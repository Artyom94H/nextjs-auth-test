import { Button, Form, Input, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { FormWrapper } from 'components/styleds';
import FormErrors from 'components/form-errors';

const SignInForm = ({ onFinish, form, resetErrors, loading, errors, }) => {
  return (
    <FormWrapper>
      <Typography.Title>
        Вход в Yoldi Agency
      </Typography.Title>
      <Form
        form={form}
        name='signIn'
        initialValues={{
          email: '',
          password: '',
        }}
        onFinish={onFinish}
        onFieldsChange={() => {
          if (resetErrors) {
            resetErrors();
          }
        }}
      >
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder='E-mail' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder='Пароль' />
        </Form.Item>
        <FormErrors errors={errors} />
        <Button loading={loading} style={{ width: '100%' }} htmlType='submit'>
          Вход
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SignInForm;
