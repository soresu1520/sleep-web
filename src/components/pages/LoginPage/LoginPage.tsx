import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import LoginTemplate from '../../templates/LoginTemplate/LoginTemplate';
import { useAuth } from '../../../contexts/authContext';
import { LoginFormValues } from '../../../types/formTypes';
import routes from '../../../routing/routes';
import { checkIfDoctor } from '../../../firebase/firestoreUtils';

const LoginPage = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormValues> = async (formData: LoginFormValues) => {
    try {
      const ifDoctor = await checkIfDoctor(formData.email);
      if (ifDoctor) {
        await logIn(formData.email, formData.password);
        setError(false);
        navigate(routes.dashboard);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <LoginTemplate>
      <LoginForm onSubmit={onSubmit} error={error} />
    </LoginTemplate>
  );
};

export default LoginPage;
