const calculateAge = (dateOfBirth: Date): number => {
  const timeDifference = Date.now() - dateOfBirth.getTime();
  const age = timeDifference / (365 * 24 * 60 * 60 * 1000);
  return Math.floor(age);
};

export default calculateAge;
