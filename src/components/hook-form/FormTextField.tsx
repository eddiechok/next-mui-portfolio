import React from 'react';
import { Controller } from 'react-hook-form';

import { AppTextField } from '@/components/form';
import { AppTextFieldProps } from '@/components/form/AppTextField';
import { WithFormWrappedComponentProps } from '@/components/hook-form/withForm';

type FormTextFieldProps = AppTextFieldProps & WithFormWrappedComponentProps;

const FormTextField = ({ name, formContext, errorMessage, ...props }: FormTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={formContext.control}
      defaultValue="" // to fix changing from uncontrolled input to controlled input
      render={({ field }) => {
        return (
          <AppTextField error={!!errorMessage} {...field} {...props} helperText={errorMessage} />
        );
      }}
    />
  );
};

export default FormTextField;
