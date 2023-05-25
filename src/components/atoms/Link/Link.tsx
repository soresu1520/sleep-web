import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';

type LinkProps = {
  to: string;
};

const Link = ({ to, children }: PropsWithChildren<LinkProps>) => (
  <MuiLink component={RouterLink} to={to}>
    {children}
  </MuiLink>
);

export default Link;
