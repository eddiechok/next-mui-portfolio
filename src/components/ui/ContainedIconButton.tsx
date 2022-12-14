import { Button, ButtonProps } from '@mui/material';

import { packSx } from '@/utils';

export type ContainedIconButtonProps = ButtonProps;

export const ContainedIconButton = (props: ContainedIconButtonProps) => {
  return (
    <Button
      {...props}
      sx={[{ p: props.size === 'small' ? 1 : 2, minWidth: 0 }, ...packSx(props.sx)]}
    />
  );
};
