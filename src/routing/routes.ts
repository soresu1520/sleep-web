const routes = {
  dashboard: '/',
  login: '/login',
  register: '/register',
  resetPassword: '/reset-password',
  changePassword: '/change-password',
  addPatient: '/add-patient',
  patientDetails: '/patient/:id',
  editPatient: '/edit-patient/:id',
  statistics: 'statistics',
  studyDetails: 'study/:diaryId?/:smartwatchId?',
};

export default routes;
