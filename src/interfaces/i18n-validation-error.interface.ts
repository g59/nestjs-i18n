import { BadRequestException, ValidationError } from '@nestjs/common';

export type I18nValidationError = ValidationError;

export class I18nValidationException extends BadRequestException {
  constructor(public errors: I18nValidationError[]) {
    super(errors);
  }
}
