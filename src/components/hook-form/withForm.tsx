import React, { ComponentType, FC } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';

import useErrorMessage from '@/components/hook-form/useErrorMessage';

export type WithFormComponentProps = {
  name: string;
  msgLabel?: string;
  label?: React.ReactNode;
};

export type WithFormProps = {
  formContext: UseFormReturn;
  errorMessage?: string;
};

export type WithFormWrappedComponentProps = WithFormComponentProps & WithFormProps;

/**
 * return formContext and errorMessage as props for its WrappedComponent
 */
function withForm<Props extends WithFormWrappedComponentProps = WithFormWrappedComponentProps>(
  WrappedComponent: ComponentType<Props>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithForm: FC<Omit<Props, keyof WithFormProps>> = (props) => {
    const formContext = useFormContext();
    const errorMessage = useErrorMessage(props);

    return (
      <WrappedComponent
        {...(props as Props)}
        formContext={formContext}
        errorMessage={errorMessage}
      />
    );
  };

  ComponentWithForm.displayName = `withForm(${displayName})`;

  return ComponentWithForm;
}

export default withForm;
