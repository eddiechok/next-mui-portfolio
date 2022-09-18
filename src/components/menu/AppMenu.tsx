import { MenuItem } from '@mui/material';
import { createContext, ReactNode, useContext } from 'react';
import { $PropertyType } from 'utility-types';

import { MenuButton } from '@/components/menu/MenuButton';
import { MenuList } from '@/components/menu/MenuList';
import { UseAppMenu, useAppMenu } from '@/components/menu/useAppMenu';

export type AppMenuProps = {
  children: ReactNode | ((handlers: $PropertyType<UseAppMenu, 'handlers'>) => ReactNode);
};

const MenuContext = createContext<UseAppMenu>({
  anchorEl: null,
  handlers: {
    isOpen: false,
    open: () => void 0,
    close: () => void 0,
    toggle: () => void 0,
  },
});

export const useMenuContext = () => useContext(MenuContext);

/**
 * Provide menuState to children and expose its state as render props
 */
export const AppMenu = ({ children }: AppMenuProps) => {
  const menu = useAppMenu();
  return (
    <MenuContext.Provider value={menu}>
      {typeof children === 'function' ? children(menu.handlers) : children}
    </MenuContext.Provider>
  );
};

AppMenu.Button = MenuButton;
AppMenu.List = MenuList;
AppMenu.Item = MenuItem;
