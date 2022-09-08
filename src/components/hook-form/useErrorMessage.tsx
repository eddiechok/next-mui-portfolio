import { get } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MessageParams } from 'yup/lib/types';

import { WithFormComponentProps } from '@/components/hook-form/withForm';
import { ValidationKey } from '@/utils/validationKeys';

type UseErrorMessageProps = WithFormComponentProps;

type YupValidationMessage =
  | {
      key: ValidationKey;
      data: MessageParams;
    }
  | string;

const useErrorMessage = ({ name, msgLabel, label }: UseErrorMessageProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const yupValidationMessage = useMemo(
    () => get(errors, name)?.message as YupValidationMessage | undefined,
    [errors, name]
  );
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useTranslation('validation');

  // get validationKey from formErrors and translate it
  useEffect(() => {
    if (typeof yupValidationMessage === 'object') {
      if (!yupValidationMessage.key) {
        setErrorMsg('');
      } else if (yupValidationMessage.data) {
        const { label: yupLabel, path, ...rest } = yupValidationMessage.data;
        setErrorMsg(
          t(yupValidationMessage.key, {
            label: msgLabel || yupLabel || label || (path ? t(path as any) : ''),
            ...rest,
          })
        );
      } else {
        setErrorMsg(t(yupValidationMessage.key));
      }
    } else {
      setErrorMsg(yupValidationMessage || '');
    }
  }, [yupValidationMessage, msgLabel, label, t]);

  return errorMsg;
};

export default useErrorMessage;
