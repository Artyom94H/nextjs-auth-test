import { CenteredContainer } from 'components/styleds';
import SignInForm from 'components/sign-in-form';
import PrimaryLayout from 'components/layouts/primary';
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useAuth } from 'hooks/use-auth';
import { useUser } from 'hooks/use-user';

const SignIn = () => {
  useUser(false);

  const [form] = Form.useForm();
  const [errors, setErrors] = useState(null);

  const { loading, onSignIn } = useAuth({ setErrors });

  const resetErrors = useCallback(() => {
    if (errors) {
      setErrors(null);
    }
  }, [errors]);

  return (
    <PrimaryLayout>
      <CenteredContainer>
        <SignInForm
          resetErrors={resetErrors}
          form={form}
          errors={errors}
          onFinish={onSignIn}
          loading={loading}
        />
      </CenteredContainer>
    </PrimaryLayout>
  );
};

export default SignIn;
