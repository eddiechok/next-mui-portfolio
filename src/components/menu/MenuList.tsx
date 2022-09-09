import { Menu, MenuProps } from '@mui/material';

import { useMenuContext } from '@/components/menu/Menu';

export type MenuListProps = Omit<MenuProps, 'open'>;

/**
 * Add anchorEl and close action to Menu
 */
export function MenuList(props: MenuListProps) {
  const { anchorEl, handlers } = useMenuContext();

  return (
    <Menu
      anchorEl={anchorEl}
      open={handlers.isOpen}
      onClose={handlers.close}
      onClick={handlers.close}
      {...props}
    />
  );
}
