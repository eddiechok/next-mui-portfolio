import React from 'react';

/**
 * return anchorEl and menu state
 */

export type UseAppMenu = {
  anchorEl: HTMLElement | null;
  handlers: {
    isOpen: boolean;
    open: (event: React.MouseEvent<HTMLElement>) => void;
    toggle: (event: React.MouseEvent<HTMLElement>) => void;
    close: () => void;
  };
};

export const useAppMenu: () => UseAppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const open = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setAnchorEl(null);
  };

  const toggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl((prevEl) => (prevEl === null ? event.currentTarget : null));
  };

  return {
    anchorEl,
    handlers: {
      isOpen,
      open,
      toggle,
      close,
    },
  };
};
