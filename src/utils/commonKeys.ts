import { $ElementType } from 'utility-types';

const commonKeyArray = [
  'app_name',
  'hero_title_:special',
  'hero_title_special',
  'hero_subtitle',
  'work_title',
  'work_desc',
  'skill_title',
  'skill_desc',
  'about_title',
  'about_desc',
  'contact_me',
  'contact_me_desc',
  'email',
  'name',
  'subject',
  'message',
  'send',
] as const;

export type CommonKey = $ElementType<typeof commonKeyArray, number>;
export type CommonKeys = Record<CommonKey, string>;

// Object with same key-value
export const commonKeys = commonKeyArray.reduce(
  (accValue, currentValue) => ({ ...accValue, [currentValue]: currentValue }),
  {}
) as CommonKeys;
