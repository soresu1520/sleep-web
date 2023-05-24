import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Footer from './components/atoms/Footer/Footer';
import LoginPage from './components/pages/LoginPage/LoginPage';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';
import routes from './routing/routes';
import PrivateRoutes from './routing/PrivateRoutes';
import PublicRoutes from './routing/PublicRoutes';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage/ResetPasswordPage';

const App = () => (
  <CssBaseline>
    <Header />
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<DashboardPage />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.resetPassword} element={<ResetPasswordPage />} />
      </Route>
    </Routes>
    <Footer />
  </CssBaseline>
);

export default App;
