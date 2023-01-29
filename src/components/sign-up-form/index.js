import { Button, Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { FormWrapper } from 'components/styleds';
import FormErrors from 'components/form-errors';

const SignUpForm = ({ onFinish, form, resetErrors, loading, errors, }) => {
  return (
    <FormWrapper>
      <Typography.Title>
        Регистрация в Yoldi Agency
      </Typography.Title>
      <Form
        autoComplete='off'
        form={form}
        name='signUp'
        initialValues={{
          name: '',
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
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input size='large' prefix={<UserOutlined />} placeholder='Имя' />
        </Form.Item>
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
          <Input size='large' prefix={<MailOutlined />} placeholder='E-mail' />
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
          <Input.Password size='large' prefix={<LockOutlined />} placeholder='Пароль' />
        </Form.Item>
        <FormErrors errors={errors} />
        <Button size='large' loading={loading} style={{ width: '100%' }} htmlType='submit'>
          Вход
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SignUpForm;
