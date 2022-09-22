import { renderHook, act } from '@/test/test-utils';

import useDisclosure from '../useDisclosure';

describe('useDisclosure', () => {
  it('should open the state', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].open();
    });

    expect(result.current[0]).toBe(true);
  });

  it('should close the state', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].close();
    });

    expect(result.current[0]).toBe(false);
  });

  it('should toggle the state', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  it('should define initial state', () => {
    const { result } = renderHook(() => useDisclosure(true));

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].toggle();
    });

    expect(result.current[0]).toBe(false);
  });
});
