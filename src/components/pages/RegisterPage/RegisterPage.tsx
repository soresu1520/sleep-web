import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../../contexts/authContext';
import RegisterForm from '../../organisms/RegisterForm/RegisterForm';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import { RegisterFormValues } from '../../../types/formTypes';
import routes from '../../../routing/routes';
import { addDoctor } from '../../../firebase/firestoreUtils';
import { Doctor } from '../../../types/common';

const RegisterPage = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (formData: RegisterFormValues) => {
    try {
      const res = await signUp(formData.email, formData.password);
      await updateProfile(res.user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });
      const doctor: Doctor = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      await addDoctor(doctor, res.user.uid);
      setError(false);
      navigate(routes.dashboard);
    } catch {
      setError(true);
    }
  };

  return (
    <AuthTemplate>
      <RegisterForm onSubmit={onSubmit} error={error} />
    </AuthTemplate>
  );
};

export default RegisterPage;
