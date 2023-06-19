import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { SmartwatchStudy } from '../../../types/databaseTypes';
import DetailsCardTemplate from '../../templates/DetailsCardTemplate/DetailsCardTemplate';
import {
  calculateREMLatency,
  calculateSleepTime,
  calculateSmartwatchSleepEfficiency,
  calculateStageTime,
  calculateWASO,
  countWakes,
  parseDesaturationTime,
} from '../../../utils/smartwatchStats';
import { getDiffHoursMinutes } from '../../../utils/diaryStats';
import Hypnogram from '../../molecules/Hypnogram/Hypnogram';

const SmartwatchDetails = ({ smartwatchStudy }: { smartwatchStudy: SmartwatchStudy }) => (
  <DetailsCardTemplate type="smartwatch">
    <Hypnogram sleepStages={smartwatchStudy.sleepStages} />
    <Typography variant="body1" color="primary" sx={{ marginTop: '1rem' }}>
      Czas snu
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateSleepTime(smartwatchStudy.sleepStages))}
    </Typography>
    <Typography variant="body1" color="primary">
      Czas czuwania
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateStageTime(smartwatchStudy.sleepStages, '40001'))}
    </Typography>
    <Typography variant="body1" color="primary">
      Czas snu lekkiego
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateStageTime(smartwatchStudy.sleepStages, '40002'))}
    </Typography>
    <Typography variant="body1" color="primary">
      Czas snu głębokiego
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateStageTime(smartwatchStudy.sleepStages, '40003'))}
    </Typography>
    <Typography variant="body1" color="primary">
      Czas snu REM
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateStageTime(smartwatchStudy.sleepStages, '40004'))}
    </Typography>
    <Typography variant="body1" color="primary">
      Latencja snu REM
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateREMLatency(smartwatchStudy.sleepStages))}
    </Typography>
    <Typography variant="body1" color="primary">
      Czuwanie wtrącone
    </Typography>
    <Typography variant="body1">
      {getDiffHoursMinutes(calculateWASO(smartwatchStudy.sleepStages))}
    </Typography>
    <Typography variant="body1" color="primary">
      Liczba wybudzeń
    </Typography>
    <Typography variant="body1">{countWakes(smartwatchStudy.sleepStages)}</Typography>
    <Typography variant="body1" color="primary">
      Wydajność snu
    </Typography>
    <Typography variant="body1">
      {calculateSmartwatchSleepEfficiency(smartwatchStudy.sleepStages)}%
    </Typography>
    <Divider variant="middle" sx={{ margin: '1rem 0' }} />
    <Typography variant="body1" color="primary">
      Średnia saturacja krwi
    </Typography>
    <Typography variant="body1">{smartwatchStudy.meanSaturation}%</Typography>
    <Typography variant="body1" color="primary">
      Minimalna wartość saturacji krwi
    </Typography>
    <Typography variant="body1">{smartwatchStudy.minSaturation}%</Typography>
    <Typography variant="body1" color="primary">
      Maksymalna wartość saturcji krwi
    </Typography>
    <Typography variant="body1">{smartwatchStudy.maxSaturation}%</Typography>
    <Typography variant="body1" color="primary">
      Czas desaturacji {'<'} 90%
    </Typography>
    <Typography variant="body1">
      {parseDesaturationTime(smartwatchStudy.desaturationTime)}
    </Typography>
  </DetailsCardTemplate>
);

export default SmartwatchDetails;
