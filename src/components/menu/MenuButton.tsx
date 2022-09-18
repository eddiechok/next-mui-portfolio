import { Box, BoxProps, Button } from '@mui/material';

import { useMenuContext } from '@/components/menu/AppMenu';

export type MenuButtonProps<ComponentProps> = BoxProps<'div', ComponentProps>;

export function MenuButton<ComponentProps>(props: MenuButtonProps<ComponentProps>) {
  const menu = useMenuContext();
  return <Box component={Button} onClick={menu.handlers.toggle} {...props} />;
}
