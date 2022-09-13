import { IconX } from '@tabler/icons';

import { ContainedIconButton, ContainedIconButtonProps } from '@/components/ui/ContainedIconButton';
import { packSx } from '@/utils';

export type CloseButtonProps = ContainedIconButtonProps;

export const CloseButton = (props: CloseButtonProps) => {
  return (
    <ContainedIconButton
      color="inherit"
      size="small"
      disableElevation
      {...props}
      sx={[
        {
          borderRadius: '50%',
          bgcolor: 'text.secondary',
          color: 'background.paper',
          '&:hover': {
            bgcolor: 'text.primary',
          },
        },
        ...packSx(props.sx),
      ]}
    >
      <IconX size={16} />
    </ContainedIconButton>
  );
};
