import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import Link from '@mui/material/Link';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import graphic from '../../../assets/823_generated.jpg';
import * as Styled from './AddPatientForm.styled';
import { emailRegex, peselRegex, phoneRegex } from '../../../utils/regex';
import { AddPatientFormValues } from '../../../types/formTypes';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';

type AddPatientFormProps = {
  onSubmit: SubmitHandler<AddPatientFormValues>;
  firebaseError: string | null;
};

const AddPatientForm = ({ onSubmit, firebaseError }: AddPatientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddPatientFormValues>();
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);

  return (
    <Styled.FormBox component="form" onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormImage>
        <Styled.ImageBox>
          <Styled.Image src={graphic} alt="A patient with a doctor" />
          <Link
            href="https://www.vecteezy.com/free-vector/patient"
            underline="none"
            color="secondary"
          >
            Grafika od Vecteezy
          </Link>
        </Styled.ImageBox>
        <Styled.FormRows>
          <Typography variant="h5" color="primary" align="center" sx={{ marginBottom: '1rem' }}>
            Dodaj nowego pacjenta
          </Typography>
          <Styled.Row>
            <Styled.FullWidthField
              id="firstName"
              label="Imię"
              {...register('firstName', { required: 'Pole nie może być puste' })}
              error={!!errors.firstName}
              helperText={errors?.firstName?.message?.toString()}
            />
            <Styled.FullWidthField
              id="lastName"
              label="Nazwisko"
              {...register('lastName', { required: 'Pole nie może być puste' })}
              error={!!errors.lastName}
              helperText={errors?.lastName?.message?.toString()}
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.FullWidthField
              id="pesel"
              label="PESEL"
              {...register('pesel', {
                required: 'Pole nie może być puste',
                pattern: {
                  value: peselRegex,
                  message: 'Niepoprawny PESEL',
                },
              })}
              error={!!errors.pesel}
              helperText={errors?.pesel?.message?.toString()}
            />
            <Controller
              name="birthDate"
              control={control}
              rules={{ required: 'Pole nie może być puste' }}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <DatePicker
                  label="Data urodzenia"
                  disableFuture
                  sx={{ width: 1 }}
                  onChange={date => {
                    onChange(date);
                    setDateValue(date);
                  }}
                  value={dateValue}
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error?.message?.toString(),
                    },
                  }}
                />
              )}
            />
          </Styled.Row>
          <Styled.Row>
            <Styled.FullWidthField
              id="email"
              label="E-mail"
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
            <Styled.FullWidthField
              id="phone"
              label="Numer telefonu"
              {...register('phone', {
                required: 'Pole nie może być puste',
                pattern: {
                  value: phoneRegex,
                  message: 'Niepoprawny numer telefonu',
                },
              })}
              error={!!errors.phone}
              helperText={errors?.phone?.message?.toString()}
            />
          </Styled.Row>
        </Styled.FormRows>
      </Styled.FormImage>
      <TextField
        id="diagnosis"
        label="Diagnoza"
        sx={{ width: 1 }}
        {...register('diagnosis', { required: 'Pole nie może być puste' })}
        error={!!errors.diagnosis}
        helperText={errors?.diagnosis?.message?.toString()}
      />
      <TextField
        id="notes"
        label="Dodatkowe informacje"
        multiline
        minRows={4}
        sx={{ width: 1 }}
        {...register('notes')}
      />
      {firebaseError && <ErrorMessage msg={firebaseError} />}
      <Button type="submit" size="large" sx={{ width: '50%' }}>
        Dodaj pacjenta
      </Button>
    </Styled.FormBox>
  );
};

export default AddPatientForm;
