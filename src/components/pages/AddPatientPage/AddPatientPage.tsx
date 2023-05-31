import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import AddPatientForm from '../../organisms/AddPatientForm/AddPatientForm';
import { AddPatientFormValues } from '../../../types/formTypes';
import { addPatient, checkIfPatientExists } from '../../../firebase/firestoreUtils';
import { Patient } from '../../../types/common';
import routes from '../../../routing/routes';
import { useAuth } from '../../../contexts/authContext';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';

const AddPatientPage = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser } = useAuth();

  const onSubmit: SubmitHandler<AddPatientFormValues> = async (formData: AddPatientFormValues) => {
    try {
      const patientExists = await checkIfPatientExists(formData.email);
      if (!patientExists) {
        const { firstName, lastName, pesel, phone, birthDate, email, diagnosis, notes } = formData;
        const DOB = Timestamp.fromDate(birthDate.toDate());
        const patient: Patient = {
          firstName,
          lastName,
          pesel,
          phone,
          birthDate: DOB,
          email,
          diagnosis,
          notes,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          doctorId: currentUser!.uid,
        };
        await addPatient(patient);
        navigate(routes.dashboard);
        enqueueSnackbar('Dodano pacjenta!', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom',
          },
        });
      } else {
        setError('Już istnieje pacjent z takim adresem e-mail');
      }
    } catch {
      setError('Wystąpił błąd');
    }
  };

  return (
    <PageTemplate>
      <AddPatientForm onSubmit={onSubmit} firebaseError={error} />
    </PageTemplate>
  );
};

export default AddPatientPage;
