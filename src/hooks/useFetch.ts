import { api } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';

function useFetch(type?: string) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!type) return;

    try {
      setLoading(true);
      const { data } = await api.get(type as string);

      setData(data);
      setLoading(false);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    loading,
    errors,
  };
}

export default useFetch;
