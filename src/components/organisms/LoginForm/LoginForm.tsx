/* eslint-disable jsx-a11y/anchor-is-valid */
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useForm, SubmitHandler } from 'react-hook-form';
import LoginFormValues from '../../../types/formTypes';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import * as Styled from './LoginForm.styled';

type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormValues>;
  error: boolean;
};

const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <Styled.LoginBox>
      <Typography variant="h4" color="primary">
        Zaloguj się
      </Typography>
      <Styled.FormBox component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="E-mail"
          sx={{ width: 1 }}
          {...register('email', { required: 'Pole nie może być puste' })}
          error={!!errors.email}
          helperText={errors?.email?.message?.toString()}
        />
        <TextField
          id="password"
          label="Hasło"
          type="password"
          sx={{ width: 1 }}
          {...register('password', { required: 'Pole nie może być puste' })}
          error={!!errors.password}
          helperText={errors?.password?.message?.toString()}
        />
        {error && <ErrorMessage msg="Nieprawidłowy login lub hasło" />}
        <Button type="submit" size="large" fullWidth>
          Zaloguj się
        </Button>
      </Styled.FormBox>
      <Link href="#">Zapomniałeś hasła?</Link>
      <Link href="#">Nie masz konta? Zarejestruj się</Link>
    </Styled.LoginBox>
  );
};

export default LoginForm;
