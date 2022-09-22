import { useCallback, useState } from 'react';

export default function useDisclosure(initialState = false) {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);
  const toggle = useCallback(() => setOpened((state) => !state), []);

  return [opened, { open, close, toggle }] as const;
}
