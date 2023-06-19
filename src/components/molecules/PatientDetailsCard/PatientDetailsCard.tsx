import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as Styled from './PatientDetailsCard.styled';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import { Patient } from '../../../types/common';
import routes from '../../../routing/routes';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import { deletePatient } from '../../../firebase/firestoreUtils';

const PatientDetailsCard = ({ patient }: { patient: Patient }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [openDialog, setOpenDialog] = useState(false);

  const navigateToEditForm = (patientId: string) => {
    const url = routes.editPatient.replace(':id', patientId);
    navigate(url);
  };

  const onDelete = async () => {
    try {
      await deletePatient(patient.id);
      navigate(routes.dashboard);
      enqueueSnackbar('Usunięto pacjenta', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    } catch {
      enqueueSnackbar('Wystąpił błąd', {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    }
    setOpenDialog(false);
  };

  return (
    <Styled.DetailsCard>
      <Styled.CenteredCardMedia>
        <ProfileImage size={9.5} />
      </Styled.CenteredCardMedia>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="h5" color="primary" textAlign="center" sx={{ marginBottom: '1rem' }}>
          {patient.firstName} {patient.lastName}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="primary">
          Diagnoza
        </Typography>
        <Typography variant="body1">{patient.diagnosis}</Typography>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="primary"
          sx={{ marginTop: '1rem' }}
        >
          Informacje o pacjencie
        </Typography>
        <Typography variant="body1">
          <b>PESEL:</b> {patient.pesel}
        </Typography>
        <Typography variant="body1">
          <b>Data urodzenia:</b>{' '}
          {patient.birthDate && dayjs(patient.birthDate.toDate().toString()).format('DD.MM.YYYY')}
          r.
        </Typography>
        <Typography variant="body1">
          <b>E-mail:</b> {patient.email}
        </Typography>
        <Typography variant="body1">
          <b>Numer telefonu:</b> {patient.phone}
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="primary"
          sx={{ marginTop: '1rem' }}
        >
          Dodatkowe informacje
        </Typography>
        <Typography variant="body1">{patient.notes}</Typography>
      </CardContent>
      <Styled.EditBox>
        <Button variant="text" color="error" onClick={() => setOpenDialog(true)}>
          <DeleteIcon color="error" />
          Usuń
        </Button>
        <Button variant="text" color="primary" onClick={() => navigateToEditForm(patient.id)}>
          <EditIcon color="primary" />
          Edytuj
        </Button>
      </Styled.EditBox>
      <DeleteDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleClick={onDelete}
        text="Usunięcie pacjenta jest NIEODWRACALNE"
        title={`Czy chcesz usunąć pacjenta ${patient.firstName} ${patient.lastName}?`}
      />
    </Styled.DetailsCard>
  );
};

export default PatientDetailsCard;
