import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PatientCard from '../../molecules/PatientCard/PatientCard';
import { Patient } from '../../../types/common';
import * as Styled from './PatientsList.styled';

type PatientsListProps = {
  patientsList: Patient[];
  changeSortOption: (sortOption: string) => void;
  changeFilterOption: (filterOption: string | null) => void;
};

const PatientsList = ({
  patientsList,
  changeSortOption,
  changeFilterOption,
}: PatientsListProps) => {
  const [sortValue, setSortValue] = useState('alphabetDesc');
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleSortChange = (sortItem: string): void => {
    setSortValue(sortItem);
    changeSortOption(sortItem);
  };

  const handleSearchChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    setValue(newValue);
    changeFilterOption(newValue);
  };

  const handleSearchInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  return (
    <Styled.ContentBox>
      <Styled.SortSearchBox>
        <TextField
          id="sort"
          label="Sortuj"
          select
          value={sortValue}
          onChange={newValue => handleSortChange(newValue.target.value)}
        >
          <MenuItem value="alphabetDesc">Alfabetycznie (A-Z)</MenuItem>
          <MenuItem value="alphabetAsc">Alfabetycznie (Z-A)</MenuItem>
        </TextField>
        <Autocomplete
          id="search"
          value={value}
          onChange={(event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
            handleSearchChange(event, newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => handleSearchInputChange(event, newInputValue)}
          options={patientsList.map(patient => `${patient.firstName} ${patient.lastName}`)}
          sx={{ width: '15rem' }}
          renderInput={params => (
            <TextField
              {...params}
              label="Szukaj"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Styled.SortSearchBox>
      {patientsList.length === 0 && (
        <Typography variant="h5" color="primary" textAlign="center" sx={{ marginTop: '3rem' }}>
          Nie masz jeszcze pacjentów
        </Typography>
      )}
      <Styled.ListBox>
        {patientsList.map(patient => (
          <PatientCard
            key={patient.id}
            id={patient.id}
            name={`${patient.firstName} ${patient.lastName}`}
            diagnosis={patient.diagnosis}
            dateOfBirth={patient.birthDate.toDate()}
          />
        ))}
      </Styled.ListBox>
    </Styled.ContentBox>
  );
};

export default PatientsList;
