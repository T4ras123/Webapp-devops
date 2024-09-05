import { Transform } from 'class-transformer';
import { isNumberString } from 'class-validator';

export const ToNumber = () =>
  Transform(({ value }) => (isNumberString(value) ? Number(value) : value));
