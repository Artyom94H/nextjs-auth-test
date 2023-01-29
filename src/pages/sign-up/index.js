import { CenteredContainer } from 'components/styleds';
import SignUpForm from 'components/sign-up-form';
import PrimaryLayout from 'components/layouts/primary';
import { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useAuth } from 'hooks/use-auth';

const SignUp = () => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState(null);

  const { loading, onSignUp } = useAuth({ setErrors });

  const resetErrors = useCallback(() => {
    if (errors) {
      setErrors(null);
    }
  }, [errors]);

  return (
    <PrimaryLayout>
      <CenteredContainer>
        <SignUpForm
          resetErrors={resetErrors}
          form={form}
          errors={errors}
          onFinish={onSignUp}
          loading={loading}
        />
      </CenteredContainer>
    </PrimaryLayout>
  );
};

export default SignUp;
