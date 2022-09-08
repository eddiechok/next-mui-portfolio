/**
 * Add type checking for translation
 */

// import all namespaces (for the default language, only)
import { CommonKeys } from '@/utils/commonKeys';
import { ValidationKeys } from '@/utils/validationKeys';
// import the original type declarations
import 'react-i18next';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      common: CommonKeys;
      validation: ValidationKeys;
    };
  }
}
