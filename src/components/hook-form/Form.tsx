import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

import FormTextField from '@/components/hook-form/FormTextField';
import withForm from '@/components/hook-form/withForm';

type TFormProps<FormValues extends FieldValues> = PropsWithChildren<
  Omit<BoxProps<'form'>, 'onSubmit'> & {
    methods: UseFormReturn<FormValues>;
    onSubmit?: SubmitHandler<FormValues>;
  }
>;

export function Form<FormValues extends FieldValues>({
  children,
  methods,
  onSubmit,
  ...props
}: TFormProps<FormValues>) {
  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={onSubmit && methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </Box>
    </FormProvider>
  );
}

Form.displayName = 'Form';

Form.TextField = withForm(FormTextField);
