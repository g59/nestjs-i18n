import { BadRequestException, ValidationError } from '@nestjs/common';
export type I18nValidationError = ValidationError;
export declare class I18nValidationException extends BadRequestException {
    errors: I18nValidationError[];
    constructor(errors: I18nValidationError[]);
}
