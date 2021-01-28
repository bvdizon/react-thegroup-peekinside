import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};
