import { useForm, SubmitHandler } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '../../atoms/Link/Link';
import routes from '../../../routing/routes';
import * as Styled from './ResetPasswordForm.styled';
import { emailRegex } from '../../../utils/regex';
import { ResetFormValues } from '../../../types/formTypes';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

type ResetPasswordFormProps = {
  onSubmit: SubmitHandler<ResetFormValues>;
  error: boolean;
};

const ResetPasswordForm = ({ onSubmit, error }: ResetPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormValues>();

  return (
    <Styled.ResetBox>
      <Typography variant="h4" color="primary" align="center">
        Zapomniałeś hasła?
      </Typography>
      <Typography paragraph color="primary" align="center" sx={{ margin: 0 }}>
        Wpisz adres e-mail i zresetuj swoje hasło
      </Typography>
      <Styled.FormBox component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="E-mail"
          sx={{ width: 1 }}
          {...register('email', {
            required: 'Pole nie może być puste',
            pattern: {
              value: emailRegex,
              message: 'Niepoprawny format adresu e-mail',
            },
          })}
          error={!!errors.email}
          helperText={errors?.email?.message?.toString()}
        />
        {error && <ErrorMessage msg="Nieprawidłowy e-mail" />}
        <Button type="submit" size="large" fullWidth>
          Wyślij maila
        </Button>
      </Styled.FormBox>
      <Link to={routes.login}>Zaloguj się</Link>
    </Styled.ResetBox>
  );
};

export default ResetPasswordForm;
