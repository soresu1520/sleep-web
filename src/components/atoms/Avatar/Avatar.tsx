import { Avatar as MuiAvatar, useTheme } from '@mui/material';

const Avatar = () => {
  const { palette } = useTheme();

  return (
    <MuiAvatar alt="Avatar" sx={{ bgcolor: palette.primary.main }}>
      TT
    </MuiAvatar>
  );
};

export default Avatar;
