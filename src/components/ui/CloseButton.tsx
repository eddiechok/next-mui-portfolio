import { IconButton, IconButtonProps } from '@mui/material';
import { IconX } from '@tabler/icons';

export type CloseButtonProps = IconButtonProps;

export const CloseButton = (props: CloseButtonProps) => {
  return (
    <IconButton color="inherit" {...props}>
      <IconX />
    </IconButton>
  );
};
