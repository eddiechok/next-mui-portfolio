/* eslint-disable @typescript-eslint/no-empty-interface */
import * as yup from 'yup';

import { validationKeys } from '@/utils/validationKeys';

/**
 * Set Default Validation Messages
 */
yup.setLocale({
  mixed: {
    required: (data) => ({
      key: validationKeys[':label_is_required'],
      data,
    }),
  },
  string: {
    email: validationKeys[':label_invalid_email'],
  },
});

// eaiser to import yup
export const Yup = yup;
