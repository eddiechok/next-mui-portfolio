import axios from 'axios';

import useAppQuery from '@/hooks/useAppQuery';
import Provider from '@/providers/Provider';
import { renderHook, screen, waitFor } from '@/test/test-utils';

const testGet = () => axios.get('/api/unknown-route');

describe('useAppQuery', () => {
  it('should show a toast on error', async () => {
    const { result } = renderHook(() => useAppQuery(['testGet'], testGet), { wrapper: Provider });

    await waitFor(() => expect(result.current.isFetched).toBe(true));

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});
