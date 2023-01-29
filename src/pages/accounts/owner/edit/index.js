import { Modal, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { ROUTES } from 'constants/routes';

const AccountOwnerEdit = () => {
  const navigate = useNavigate();

  const onCancel = useCallback(() => {
    navigate(ROUTES.accountsOwner.path);
  }, [navigate]);

  return (
    <Modal open={true} onCancel={onCancel}>
      <Typography.Text>asdasd</Typography.Text>
    </Modal>
  );
};

export default AccountOwnerEdit;
