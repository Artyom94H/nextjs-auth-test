import { Button, Col, Form, Input, Modal, Row, Typography } from 'antd';
import { ROUTES } from 'constants/routes';
import FormErrors from 'components/form-errors';
import { useAccountEdit } from 'hooks/use-account-edit';

const AccountOwnerEdit = () => {
  const { form, onSubmit, loading, errors, resetErrors, onCancel } =
    useAccountEdit();

  return (
    <Modal open={true} onCancel={onCancel} footer={false}>
      <Typography.Text>Edit</Typography.Text>
      <Form
        form={form}
        name='accountEdit'
        initialValues={{
          description: 'Можешь менять, но толка нету, в апи нету этого поля',
        }}
        wrapperCol={{
          span: 24,
        }}
        layout={'vertical'}
        onFinish={onSubmit}
        onFieldsChange={resetErrors}
      >
        <Form.Item name='name' label='Name'>
          <Input placeholder='Имя' />
        </Form.Item>
        <Form.Item name='slug' label='Address'>
          <Input
            addonBefore={`${
              window.location.origin
            }${ROUTES.accountsGuest.path.replace(':id', '')}`}
            placeholder='slug'
          />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <Input.TextArea placeholder='description' />
        </Form.Item>
      </Form>
      <FormErrors errors={errors} />
      <Row gutter={[20, 20]}>
        <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
          <Button style={{ width: '100%' }} onClick={onCancel}>Cancel</Button>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} xs={24} sm={24}>
          <Button
            loading={loading}
            style={{ width: '100%' }}
            type='primary'
            onClick={form.submit}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default AccountOwnerEdit;
