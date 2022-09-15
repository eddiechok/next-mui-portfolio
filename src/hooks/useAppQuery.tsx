import { useTranslation } from 'react-i18next';
import { UseQueryOptions, useQuery, QueryKey, QueryFunction } from 'react-query';

import { useToast } from '@/providers/ToastProvider';

function useAppQuery<
  Key extends QueryKey,
  Fn extends QueryFunction<Data>,
  Options extends UseQueryOptions<Data, Error, Data, Key>,
  Data
>(queryKey: Key, queryFn: Fn, options?: Options) {
  const { open } = useToast();
  const { t } = useTranslation();

  const result = useQuery<Data, Error, Data, Key>(queryKey, queryFn, {
    ...options,
    onError: (error) => {
      const errorMsg = error?.message || t('unknown_error');

      open({
        message: errorMsg,
        color: 'error',
      });

      options?.onError && options.onError(error);
    },
  });

  return result;
}

export default useAppQuery;
