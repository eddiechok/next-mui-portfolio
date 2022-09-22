import axios from 'axios';

import useAppMutation from '@/hooks/useAppMutation';
import Provider from '@/providers/Provider';
import { renderHook, act, screen } from '@/test/test-utils';

const testPost = () => axios.post('/api/unknown-route');

describe('useAppMutation', () => {
  it('should show a toast on error', async () => {
    const { result } = renderHook(() => useAppMutation(testPost), { wrapper: Provider });
    act(() => {
      result.current.mutate({});
    });

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
