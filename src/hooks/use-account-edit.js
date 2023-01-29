import { useState, useEffect, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getUser, userState } from 'hooks/use-user';
import { Form, notification } from 'antd';
import { ROUTES } from 'constants/routes';
import ProfileApi from 'libs/api/profile';
import { useErrors } from 'hooks/use-errors';
import { useNavigate } from 'react-router-dom';

const api = new ProfileApi();

export const useAccountEdit = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { errors, resetErrors, setErrors } = useErrors();
  const [loading, setLoading] = useState(false);
  const user = useRecoilValue(getUser);
  const updateUserData = useSetRecoilState(userState);

  useEffect(() => {
    if (!!user) {
      let fieldsValues = [];
      for (let key in user) {
        fieldsValues.push({
          name: key,
          value: user[key],
        });
      }
      form.setFields(fieldsValues);
    }
  }, [user, form]);

  const onSubmit = useCallback(
    async (values) => {
      try {
        setLoading(true);
        const { data } = await api.patch(null, {
          data: values,
        });
        updateUserData((s) => ({
          ...s,
          user: data,
        }));
        notification.success({
          message: 'Successfully updated',
          type: 'success',
        });
        navigate(ROUTES.accountsOwner.path);
      } catch (e) {
        setErrors([e?.response?.data?.message || '']);
      } finally {
        setLoading(false);
      }
    },
    [updateUserData, navigate, setErrors],
  );

  const onCancel = useCallback(() => {
    navigate(ROUTES.accountsOwner.path);
  }, [navigate]);

  return {
    form,
    loading,
    onSubmit,
    errors,
    resetErrors,
    onCancel,
  };
};
