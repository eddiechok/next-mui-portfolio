/* eslint-disable @typescript-eslint/no-empty-interface */
import * as yup from 'yup';

import { validationKeys } from '@/utils/validationKeys';

/**
 * Set Default Validation Messages
 */
yup.setLocale({
  mixed: {
    required: (data) => ({
      key: validationKeys['{{label}}_is_required'],
      data,
    }),
  },
  string: {
    email: (data) => ({
      key: validationKeys['invalid_email'],
      data,
    }),
  },
});

// eaiser to import yup
export const Yup = yup;
