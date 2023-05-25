import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

type ToolbarProps = {
  isLoggedIn: boolean;
};

export const WhiteAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const FlexToolbar = styled(Toolbar, {
  shouldForwardProp: prop => prop !== 'isLoggedIn',
})<ToolbarProps>(({ isLoggedIn }) => ({
  display: 'flex',
  justifyContent: isLoggedIn ? 'space-between' : 'center',
}));

export const LogoBox = styled(Box)({
  display: 'flex',
});
