import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useAuth } from '../../../contexts/authContext';
import ResetPasswordForm from '../../organisms/ResetPasswordForm/ResetPasswordForm';
import LoginTemplate from '../../templates/LoginTemplate/LoginTemplate';
import { ResetFormValues } from '../../../types/formTypes';

const ResetPasswordPage = () => {
  const { resetPassword } = useAuth();
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit: SubmitHandler<ResetFormValues> = async (formData: ResetFormValues) => {
    try {
      await resetPassword(formData.email);
      setError(false);
      enqueueSnackbar('Wysłano maila. Sprawdź swoją skrzynkę pocztową!', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    } catch {
      setError(true);
    }
  };

  return (
    <LoginTemplate>
      <ResetPasswordForm onSubmit={onSubmit} error={error} />
    </LoginTemplate>
  );
};

export default ResetPasswordPage;
