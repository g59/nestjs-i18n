"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nAbstractLoader = void 0;
const i18n_loader_1 = require("./i18n.loader");
const i18n_constants_1 = require("../i18n.constants");
const common_1 = require("@nestjs/common");
const path = require("path");
const promises_1 = require("fs/promises");
const file_1 = require("../utils/file");
const rxjs_1 = require("rxjs");
const chokidar = require("chokidar");
const operators_1 = require("rxjs/operators");
let I18nAbstractLoader = class I18nAbstractLoader extends i18n_loader_1.I18nLoader {
    constructor(options) {
        super();
        this.options = options;
        this.events = new rxjs_1.Subject();
        this.options = this.sanitizeOptions(options);
        if (this.options.watch) {
            this.watcher = chokidar
                .watch(this.options.path, { ignoreInitial: true })
                .on('all', (event) => {
                this.events.next(event);
            });
        }
    }
    async onModuleDestroy() {
        if (this.watcher) {
            await this.watcher.close();
        }
    }
    async languages() {
        if (this.options.watch) {
            return (0, rxjs_1.merge)((0, rxjs_1.of)(await this.parseLanguages()), this.events.pipe((0, operators_1.switchMap)(() => this.parseLanguages())));
        }
        return this.parseLanguages();
    }
    async load() {
        if (this.options.watch) {
            return (0, rxjs_1.merge)((0, rxjs_1.of)(await this.parseTranslations()), this.events.pipe((0, operators_1.switchMap)(() => this.parseTranslations())));
        }
        return this.parseTranslations();
    }
    async parseTranslations() {
        const i18nPath = path.normalize(this.options.path + path.sep);
        const translations = {};
        if (!(await (0, file_1.exists)(i18nPath))) {
            throw new Error(`i18n path (${i18nPath}) cannot be found`);
        }
        if (!this.options.filePattern.match(/\*\.[A-z]+/)) {
            throw new Error(`filePattern should be formatted like: *.json, *.txt, *.custom etc`);
        }
        const languages = await this.parseLanguages();
        const pattern = new RegExp('.' + this.options.filePattern.replace('.', '.'));
        const files = await [
            ...languages.map((l) => path.join(i18nPath, l)),
            i18nPath,
        ].reduce(async (f, p) => {
            (await f).push(...(await (0, file_1.getFiles)(p, pattern, this.options.includeSubfolders)));
            return f;
        }, Promise.resolve([]));
        for (const file of files) {
            let global = false;
            const pathParts = path
                .dirname(path.relative(i18nPath, file))
                .split(path.sep);
            const key = pathParts[0];
            if (key === '.') {
                global = true;
            }
            const data = this.formatData(await (0, promises_1.readFile)(file, 'utf8'));
            const prefix = [...pathParts.slice(1), path.basename(file).split('.')[0]];
            for (const property of Object.keys(data)) {
                [...(global ? languages : [key])].forEach((lang) => {
                    translations[lang] = translations[lang] ? translations[lang] : {};
                    if (global) {
                        translations[lang][property] = data[property];
                    }
                    else {
                        this.assignPrefixedTranslation(translations[lang], prefix, property, data[property]);
                    }
                });
            }
        }
        return translations;
    }
    assignPrefixedTranslation(translations, prefix, property, value) {
        if (prefix.length) {
            translations[prefix[0]] = translations[prefix[0]]
                ? translations[prefix[0]]
                : {};
            this.assignPrefixedTranslation(translations[prefix[0]], prefix.slice(1), property, value);
        }
        else {
            translations[property] = value;
        }
    }
    async parseLanguages() {
        const i18nPath = path.normalize(this.options.path + path.sep);
        return (await (0, file_1.getDirectories)(i18nPath)).map((dir) => path.relative(i18nPath, dir));
    }
    sanitizeOptions(options) {
        options = Object.assign(Object.assign({}, this.getDefaultOptions()), options);
        options.path = path.normalize(options.path + path.sep);
        if (!options.filePattern.startsWith('*.')) {
            options.filePattern = '*.' + options.filePattern;
        }
        return options;
    }
};
I18nAbstractLoader = __decorate([
    __param(0, (0, common_1.Inject)(i18n_constants_1.I18N_LOADER_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], I18nAbstractLoader);
exports.I18nAbstractLoader = I18nAbstractLoader;
//# sourceMappingURL=i18n.abstract.loader.js.map