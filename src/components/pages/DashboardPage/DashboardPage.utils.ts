import { PatientWithId } from '../../../types/common';

export const sortPatients = (
  patientsList: PatientWithId[],
  sortOption: string
): PatientWithId[] => {
  switch (sortOption) {
    case 'alphabetDesc':
      return patientsList.sort((a, b) =>
        `${a.lastName} ${a.firstName}`.localeCompare(`${b.lastName} ${b.firstName}`)
      );
    case 'alphabetAsc':
      return patientsList.sort((a, b) =>
        `${b.lastName} ${b.firstName}`.localeCompare(`${a.lastName} ${a.firstName}`)
      );
    default:
      return patientsList;
  }
};

export default {};
