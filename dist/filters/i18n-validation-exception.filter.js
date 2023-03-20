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
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nValidationExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const iterare_1 = require("iterare");
const i18n_context_1 = require("../i18n.context");
const i18n_validation_error_interface_1 = require("../interfaces/i18n-validation-error.interface");
const format_1 = require("../utils/format");
const util_1 = require("../utils/util");
let I18nValidationExceptionFilter = class I18nValidationExceptionFilter {
    constructor(options = {
        detailedErrors: true,
    }) {
        this.options = options;
    }
    catch(exception, host) {
        var _a;
        const i18n = i18n_context_1.I18nContext.current(host);
        const errors = (0, util_1.formatI18nErrors)((_a = exception.errors) !== null && _a !== void 0 ? _a : [], i18n.service, {
            lang: i18n.lang,
        });
        switch (host.getType()) {
            case 'http':
                const response = host.switchToHttp().getResponse();
                response
                    .status(this.options.errorHttpStatusCode || exception.getStatus())
                    .send({
                    statusCode: this.options.errorHttpStatusCode || exception.getStatus(),
                    message: exception.getResponse(),
                    errors: this.normalizeValidationErrors(errors),
                });
                break;
            case 'graphql':
                exception.errors = this.normalizeValidationErrors(errors);
                return exception;
        }
    }
    isWithErrorFormatter(options) {
        return 'errorFormatter' in options;
    }
    normalizeValidationErrors(validationErrors) {
        if (this.isWithErrorFormatter(this.options) &&
            !('detailedErrors' in this.options))
            return this.options.errorFormatter(validationErrors);
        if (!this.isWithErrorFormatter(this.options) &&
            !this.options.detailedErrors)
            return this.flattenValidationErrors(validationErrors);
        return validationErrors;
    }
    flattenValidationErrors(validationErrors) {
        return (0, iterare_1.default)(validationErrors)
            .map((error) => (0, format_1.mapChildrenToValidationErrors)(error))
            .flatten()
            .filter((item) => !!item.constraints)
            .map((item) => Object.values(item.constraints))
            .flatten()
            .toArray();
    }
};
I18nValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(i18n_validation_error_interface_1.I18nValidationException),
    __metadata("design:paramtypes", [Object])
], I18nValidationExceptionFilter);
exports.I18nValidationExceptionFilter = I18nValidationExceptionFilter;
//# sourceMappingURL=i18n-validation-exception.filter.js.map