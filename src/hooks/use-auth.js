import { useCallback, useState } from 'react';
import AuthApi from 'libs/api/auth';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/Auth';
import { useSetRecoilState } from 'recoil';
import { userState, userInitialState } from 'hooks/use-user';

const api = new AuthApi();

export const useAuth = ({ setErrors }) => {
  const setUserState = useSetRecoilState(userState);
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

  const logoutUser = useCallback(() => {
    AuthService.logout();
    navigate('/sign-in');
    setUserState(userInitialState);
  }, [navigate, setUserState]);

  return {
    loading,
    onSignIn,
    onSignUp,
    logoutUser,
  };
};
