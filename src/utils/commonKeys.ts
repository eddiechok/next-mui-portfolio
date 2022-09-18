import { $ElementType } from 'utility-types';

const commonKeyArray = [
  'app_name',
  'hero_title_{{special}}',
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
  'copyright_year',
  'work',
  'skills',
  'case_study',
  'about',
  'contact_me_success_alert',
  'introduction',
  'introduction_desc',
  'get_my_resume',
  'planning',
  'development',
  'testing',
  'deployment',
  'unknown_error',
] as const;

export type CommonKey = $ElementType<typeof commonKeyArray, number>;
export type CommonKeys = Record<CommonKey, string>;

// Object with same key-value
export const commonKeys = commonKeyArray.reduce(
  (accValue, currentValue) => ({ ...accValue, [currentValue]: currentValue }),
  {}
) as CommonKeys;
