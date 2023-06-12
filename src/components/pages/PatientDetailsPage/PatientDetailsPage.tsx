import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StudiesTable from '../../organisms/StudiesTable/StudiesTable';
import * as Styled from './PatientDetailsPage.styled';
import { TableData } from '../../organisms/StudiesTable/StudiesTable.types';
import { getDiaries, getSmartwatchStudies } from '../../../firebase/firestoreUtils';

const tempRows: TableData[] = [
  { diaryId: '1', smartwatchId: '1', date: '23.05.2023', diary: true, smartwatch: true },
  { diaryId: '2', date: '25.05.2023', diary: true, smartwatch: false },
  { smartwatchId: '3', date: '24.05.2023', diary: false, smartwatch: true },
  { smartwatchId: '4', date: '26.05.2023', diary: false, smartwatch: true },
  { diaryId: '5', smartwatchId: '5', date: '27.05.2023', diary: true, smartwatch: true },
  { diaryId: '6', date: '28.05.2023', diary: true, smartwatch: false },
];

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [diaries, setDiaries] = useState<DocumentData[]>();
  const [smartwatchStudies, setSmartwatchStudies] = useState<DocumentData[]>();
  const [tableData, setTableData] = useState<TableData[]>();

  const fetchDiaries = async () => {
    try {
      if (id) {
        const snapshots = await getDiaries(id);
        const diariesData = snapshots.docs.map(doc => {
          const tableItem: TableData = {
            diaryId: doc.data().id,
            diary: true,
            date: doc.data().date,
            smartwatch: false,
          };
          return tableItem;
        });
        setDiaries(diariesData);
        setTableData(diariesData);
        // console.log(diariesData);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };

  const fetchSmartwatchStudies = async () => {
    try {
      if (id) {
        const snapshots1 = await getDiaries(id);
        const diariesData = snapshots1.docs.map(doc => {
          const tableItem: TableData = {
            diaryId: doc.data().id,
            diary: true,
            date: doc.data().date.toDate().toString(),
            smartwatch: false,
          };
          return tableItem;
        });
        // console.log(diariesData);

        const snapshots = await getSmartwatchStudies(id);
        const smartwatchData = snapshots.docs.map(doc => {
          const tableItem: TableData = {
            smartwatchId: doc.data().id,
            diary: false,
            date: doc.data().date.toDate().toString(),
            smartwatch: true,
          };
          return tableItem;
        });
        setSmartwatchStudies(smartwatchData);
        // console.log(smartwatchData);

        const data = diariesData;
        smartwatchData.forEach(item => {
          const diaryIndex = data.findIndex(item2 => item2.date === item.date);
          console.log(diaryIndex);
          if (diaryIndex > -1) {
            data[diaryIndex].smartwatch = true;
            data[diaryIndex].smartwatchId = item.smartwatchId;
          } else {
            console.log('else');
            data.push(item);
          }
        });
        console.log(data);
      }
    } catch {
      // eslint-disable-next-line no-empty
    }
  };

  useEffect(() => {
    fetchDiaries();
    fetchSmartwatchStudies();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" color="primary">
        Lista badań
      </Typography>
      <Styled.ActionRow>actions will go here</Styled.ActionRow>
      <StudiesTable tableData={tempRows} />
    </Box>
  );
};

export default PatientDetailsPage;
