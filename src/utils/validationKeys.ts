import { $ElementType } from 'utility-types';

const validationKeyArray = ['{{label}}_is_required', 'invalid_email'] as const;

export type ValidationKey = $ElementType<typeof validationKeyArray, number>;
export type ValidationKeys = Record<ValidationKey, string>;

// Object with same key-value
export const validationKeys = validationKeyArray.reduce(
  (accValue, currentValue) => ({ ...accValue, [currentValue]: currentValue }),
  {}
) as ValidationKeys;
