import * as React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import routes from '../../../routing/routes';
import { useAuth } from '../../../contexts/authContext';
import * as Styled from './AccountDropdown.styled';

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { logOut, currentUser } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (route: string) => {
    navigate(route);
    setAnchorEl(null);
  };

  const handleLogoutClick = async () => {
    try {
      await logOut();
      navigate(routes.login);
    } catch {
      enqueueSnackbar('Wystąpił błąd', {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    }
  };

  return (
    <div>
      <Styled.FlexIconButton onClick={handleOpen} disableRipple>
        <AccountCircle color="primary" fontSize="large" />
        <Typography color="primary">{currentUser?.displayName}</Typography>
      </Styled.FlexIconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuClick(routes.dashboard)}>
          <Typography textAlign="center">Lista pacjentów</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(routes.addPatient)}>
          <Typography textAlign="center">Dodaj pacjenta</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick(routes.changePassword)}>
          <Typography textAlign="center">Zmień hasło</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <Typography textAlign="center">Wyloguj się</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AccountDropdown;
