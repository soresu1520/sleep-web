import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TableData } from '../../organisms/StudiesTable/StudiesTable.types';

type DeleteDialogProps = {
  open: boolean;
  handleClose: () => void;
  selected: TableData[];
};

const DeleteDialog = ({ open, handleClose, selected }: DeleteDialogProps) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Czy chcesz usunąć te badania ({selected.length})?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Usunięcie badań jest nieodwracalne.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" autoFocus onClick={handleClose}>
        Nie usuwaj
      </Button>
      <Button variant="text" color="error" onClick={handleClose}>
        Usuń
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteDialog;
