import { Outlet, Navigate } from 'react-router-dom';
import routes from './routes';
import { useAuth } from '../contexts/authContext';

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to={routes.login} />;
};

export default PrivateRoutes;
