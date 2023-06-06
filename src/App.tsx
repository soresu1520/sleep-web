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
import AddPatientPage from './components/pages/AddPatientPage/AddPatientPage';
import ChangePasswordPage from './components/pages/ChangePasswordPage/ChangePasswordPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import PatientDetailsPage from './components/pages/PatientDetailsPage/PatientDetailsPage';
import PatientPageTemplate from './components/templates/PatientPageTemplate/PatientPageTemplate';
import EditPatientPage from './components/pages/EditPatientPage/EditPatientPage';

const App = () => (
  <CssBaseline>
    <Header />
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<DashboardPage />} />
        <Route path={routes.changePassword} element={<ChangePasswordPage />} />
        <Route path={routes.addPatient} element={<AddPatientPage />} />
        <Route path={routes.editPatient} element={<EditPatientPage />} />
        <Route path={routes.patientDetails} element={<PatientPageTemplate />}>
          <Route index element={<PatientDetailsPage />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.resetPassword} element={<ResetPasswordPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </CssBaseline>
);

export default App;
