import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export type AppTextFieldProps = TextFieldProps;

export const AppTextField = React.forwardRef<HTMLDivElement | null, AppTextFieldProps>(
  ({ required, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        {...props}
        InputLabelProps={{
          required: required, // remove browser checking, but show asterisk
          ...props.InputLabelProps,
        }}
      />
    );
  }
);

AppTextField.displayName = 'AppTextField';
