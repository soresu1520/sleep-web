import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import Typography from '@mui/material/Typography';
import AddPatientForm from '../../organisms/AddPatientForm/AddPatientForm';
import { AddPatientFormValues } from '../../../types/formTypes';
import { getPatient, updatePatient } from '../../../firebase/firestoreUtils';
import { Patient } from '../../../types/common';
import routes from '../../../routing/routes';
import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import Spinner from '../../atoms/Spinner/Spinner';

const EditPatientPage = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(true);

  const fetchPatient = async () => {
    try {
      if (id) {
        const doc = await getPatient(id);
        if (doc.exists()) {
          setPatient(doc.data() as Patient);
          setError(null);
        }
      }
      // eslint-disable-next-line no-empty
    } catch {
      setError('Wystąpił błąd');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPatient();
  }, []);

  const onSubmit: SubmitHandler<AddPatientFormValues> = async (formData: AddPatientFormValues) => {
    try {
      if (id) {
        const { firstName, lastName, pesel, phone, birthDate, email, diagnosis, notes } = formData;
        const DOB = Timestamp.fromDate(birthDate.toDate());
        const updatedPatient: Partial<Patient> = {
          firstName,
          lastName,
          pesel,
          phone,
          birthDate: DOB,
          email,
          diagnosis,
          notes,
        };
        await updatePatient(updatedPatient, id);
        setError(null);
        const url = routes.patientDetails.replace(':id', id);
        navigate(url);
        enqueueSnackbar('Zaktualizowano dane pacjenta!', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'bottom',
          },
        });
      }
    } catch {
      setError('Wystąpił błąd');
    }
  };

  return (
    <PageTemplate>
      {loading && <Spinner />}
      {patient && (
        <AddPatientForm onSubmit={onSubmit} firebaseError={error} edit patient={patient} />
      )}
      {error && (
        <Typography variant="h5" color="primary" sx={{ marginTop: '3rem' }}>
          Wystapił błąd
        </Typography>
      )}
    </PageTemplate>
  );
};

export default EditPatientPage;
