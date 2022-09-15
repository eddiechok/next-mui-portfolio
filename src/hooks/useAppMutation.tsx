import { useTranslation } from 'react-i18next';
import { UseMutationOptions, useMutation, MutationFunction } from 'react-query';

import { useToast } from '@/providers/ToastProvider';

function useAppMutation<
  Fn extends MutationFunction<Res, Params>,
  Options extends UseMutationOptions<Res, Error, Params>,
  Params = any,
  Res = any
>(queryFn: Fn, options?: Options) {
  const { open } = useToast();
  const { t } = useTranslation();

  const result = useMutation<Res, Error, Params>(queryFn, {
    ...options,
    onError: (error, ...args) => {
      const errorMsg = error?.message || t('unknown_error');

      open({
        message: errorMsg,
        color: 'error',
      });

      options?.onError && options.onError(error, ...args);
    },
  });

  return result;
}

export default useAppMutation;
