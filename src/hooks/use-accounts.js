import { useEffect, useState } from 'react';
import UserApi from 'libs/api/user';
import { useParams } from 'react-router-dom';

const api = new UserApi();

export const useAccounts = (single = false) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (single) {
          const { data: responseData }= await api.get(params.id);
          setSingleData(responseData);
        } else {
          const { data: responseData }= await api.list();
          setData(responseData);
        }

      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [single, params.id]);

  return {
    data,
    loading,
    singleData,
  };
};
