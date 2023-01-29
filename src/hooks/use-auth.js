import { useCallback, useState } from 'react';
import AuthApi from 'libs/api/auth';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/Auth';

const api = new AuthApi();

export const useAuth = ({ setErrors }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSignIn = useCallback(
    async (values) => {
      setLoading(true);
      try {
        const { data } = await api.signIn({
          data: values,
        });
        AuthService.setToken(data.value);
        navigate('/');
      } catch (e) {
        setErrors([e?.response?.data?.message]);
      } finally {
        setLoading(false);
      }
    },
    [navigate, setErrors],
  );

  const onSignUp = useCallback(
    async (values) => {
      setLoading(true);
      try {
        await api.signUp({
          data: values,
        });
        navigate('/sign-in');
      } catch (e) {
        setErrors([e?.response?.data?.message]);
      } finally {
        setLoading(false);
      }
    },
    [navigate, setErrors],
  );

  return {
    loading,
    onSignIn,
    onSignUp,
  };
};
