import { SubmitHandler, useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Styled from './RegisterForm.styled';
import Link from '../../atoms/Link/Link';
import routes from '../../../routing/routes';
import { emailRegex } from '../../../utils/regex';
import { RegisterFormValues } from '../../../types/formTypes';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

type RegisterFormProps = {
  onSubmit: SubmitHandler<RegisterFormValues>;
  error: boolean;
};

const RegisterForm = ({ onSubmit, error }: RegisterFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  return (
    <Styled.RegisterBox>
      <Typography variant="h4" color="primary">
        Zarejestruj się
      </Typography>
      <Styled.FormBox component="form" onSubmit={handleSubmit(onSubmit)}>
        <Styled.FormRow>
          <TextField
            id="firstName"
            label="Imię"
            {...register('firstName', { required: 'Pole nie może być puste' })}
            error={!!errors.firstName}
            helperText={errors?.firstName?.message?.toString()}
          />
          <TextField
            id="lastName"
            label="Nazwisko"
            {...register('lastName', { required: 'Pole nie może być puste' })}
            error={!!errors.lastName}
            helperText={errors?.lastName?.message?.toString()}
          />
        </Styled.FormRow>
        <TextField
          id="email"
          label="E-mail"
          sx={{ width: 1 }}
          {...register('email', {
            required: 'Pole nie może być puste',
            pattern: {
              value: emailRegex,
              message: 'Niepoprawny e-mail',
            },
          })}
          error={!!errors.email}
          helperText={errors?.email?.message?.toString()}
        />
        <Styled.FormRow>
          <TextField
            id="password"
            label="Hasło"
            type="password"
            sx={{ width: 1 }}
            {...register('password', {
              required: 'Pole nie może być puste',
              minLength: { value: 6, message: 'Hasło musi mieć przynajmniej 6 znaków' },
            })}
            error={!!errors.password}
            helperText={errors?.password?.message?.toString()}
          />
          <TextField
            id="repeatPassword"
            label="Powtórz hasło"
            type="password"
            sx={{ width: 1 }}
            {...register('repeatPassword', {
              required: 'Pole nie może być puste',
              validate: (val: string) => watch('password') === val || 'Hasła nie są takie same',
            })}
            error={!!errors.repeatPassword}
            helperText={errors?.repeatPassword?.message?.toString()}
          />
        </Styled.FormRow>
        {error && <ErrorMessage msg="Wystąpił  błąd" />}
        <Button type="submit" size="large" fullWidth>
          Zarejestruj się
        </Button>
      </Styled.FormBox>
      <Link to={routes.login}>Masz już konto? Zaloguj się</Link>
    </Styled.RegisterBox>
  );
};

export default RegisterForm;
