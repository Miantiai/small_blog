import { useEffect, useState } from 'react';

export function useFeching(callback) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetching() {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetching();
  }, []);

  return [isLoading, error];
}
