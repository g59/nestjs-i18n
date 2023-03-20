"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nValidationException = void 0;
const common_1 = require("@nestjs/common");
class I18nValidationException extends common_1.BadRequestException {
    constructor(errors) {
        super(errors);
        this.errors = errors;
    }
}
exports.I18nValidationException = I18nValidationException;
//# sourceMappingURL=i18n-validation-error.interface.js.map