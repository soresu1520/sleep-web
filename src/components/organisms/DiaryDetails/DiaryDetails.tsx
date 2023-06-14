import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { diaryQuestions } from './DiaryDetails.utils';
import DetailsCardTemplate from '../../templates/DetailsCardTemplate/DetailsCardTemplate';
import {
  getDiaryTimeDiff,
  calculateDiarySleepEfficiency,
  addMinutes,
} from '../../../utils/diaryStats';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DiaryDetails = ({ diary }: { diary: any }) => (
  <DetailsCardTemplate type="diary">
    {diaryQuestions.map((question, index) => (
      <div key={question}>
        <Typography variant="body1" color="primary">
          {index + 1}. {question}
        </Typography>
        <Typography variant="body1">{diary[`q${index + 1}`]}</Typography>
      </div>
    ))}
    <Divider variant="middle" sx={{ margin: '1rem 0' }} />
    <Typography variant="body1" color="primary">
      Czas snu
    </Typography>
    <Typography variant="body1">
      {getDiaryTimeDiff(addMinutes(diary.q3, diary.q4), diary.q5)}
    </Typography>
    <Typography variant="body1" color="primary">
      Czas spędzony w łóżku
    </Typography>
    <Typography variant="body1">{getDiaryTimeDiff(diary.q2, diary.q7)}</Typography>
    <Typography variant="body1" color="primary">
      Wydajność snu
    </Typography>
    <Typography variant="body1">
      {calculateDiarySleepEfficiency(diary.q2, addMinutes(diary.q3, diary.q4), diary.q5, diary.q7)}%
    </Typography>
  </DetailsCardTemplate>
);

export default DiaryDetails;
