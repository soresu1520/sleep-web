import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import ChangePasswordForm from '../../organisms/ChangePasswordForm/ChangePasswordForm';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import { ChangePasswordFormValues } from '../../../types/formTypes';
import routes from '../../../routing/routes';

const ChangePasswordPage = () => {
  const { updateUserPassword } = useAuth();
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = async (
    formData: ChangePasswordFormValues
  ) => {
    try {
      await updateUserPassword(formData.password);
      setError(false);
      enqueueSnackbar('Zmieniono hasło!', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
      navigate(routes.dashboard);
    } catch {
      setError(true);
    }
  };

  return (
    <AuthTemplate>
      <ChangePasswordForm onSubmit={onSubmit} error={error} />
    </AuthTemplate>
  );
};

export default ChangePasswordPage;
