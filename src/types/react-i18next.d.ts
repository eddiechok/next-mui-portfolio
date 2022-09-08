/**
 * Add type checking for translation
 */

// import all namespaces (for the default language, only)
import { CommonNamespace } from '@/types/commonNamespace.type';
import { ValidationNamespace } from '@/types/validationNamespace.type';
// import the original type declarations
import 'react-i18next';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      common: CommonNamespace;
      validation: ValidationNamespace;
    };
  }
}
