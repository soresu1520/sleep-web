import { SubmitHandler, useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Styled from './ChangePasswordForm.styled';
import { ChangePasswordFormValues } from '../../../types/formTypes';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

type ChangePasswordFormProps = {
  onSubmit: SubmitHandler<ChangePasswordFormValues>;
  error: boolean;
};

const ChangePasswordForm = ({ onSubmit, error }: ChangePasswordFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormValues>();

  return (
    <Styled.ContentBox>
      <Typography variant="h4" color="primary" align="center">
        Zmień hasło
      </Typography>
      <Typography paragraph color="primary" align="center" sx={{ margin: 0 }}>
        Nowe hasło powinno mieć minimum 6 znaków
      </Typography>
      <Styled.FormBox component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="password"
          label="Nowe hasło"
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
          label="Powtórz nowe hasło"
          type="password"
          sx={{ width: 1 }}
          {...register('repeatPassword', {
            required: 'Pole nie może być puste',
            validate: (val: string) => watch('password') === val || 'Hasła nie są takie same',
          })}
          error={!!errors.repeatPassword}
          helperText={errors?.repeatPassword?.message?.toString()}
        />
        {error && <ErrorMessage msg="Wystąpił  błąd" />}
        <Button type="submit" size="large" fullWidth>
          Zmień hasło
        </Button>
      </Styled.FormBox>
    </Styled.ContentBox>
  );
};

export default ChangePasswordForm;
