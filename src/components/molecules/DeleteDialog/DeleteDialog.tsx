import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type DeleteDialogProps = {
  open: boolean;
  handleClose: () => void;
  handleClick: () => void;
  title: string;
  text: string;
};

const DeleteDialog = ({ open, handleClose, handleClick, title, text }: DeleteDialogProps) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" autoFocus onClick={handleClose}>
        Nie usuwaj
      </Button>
      <Button variant="text" color="error" onClick={handleClick}>
        Usuń
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteDialog;
