import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/Watch';
import * as Styled from './StatisticsDetails.styled';
import { diaryParams } from './StatisticsDetails.utils';
import {
  SleepDiaryStatistics,
  SmartwatchStudyStatistics,
} from '../../pages/SatatisticsPage/StatisticsPage.types';

type StatisticsDetailsProps = {
  diaryStatistics: SleepDiaryStatistics;
  smartwatchStatistics: SmartwatchStudyStatistics;
};

const StatisticsDetails = ({ diaryStatistics, smartwatchStatistics }: StatisticsDetailsProps) => (
  <div>
    <Styled.TopBox>
      <Styled.SubtitleBox width="66%">
        <WatchIcon color="primary" />
        <Typography variant="h6" color="primary">
          Smartwatch
        </Typography>
      </Styled.SubtitleBox>
      <Styled.SubtitleBox width="32%">
        <FormatListBulletedIcon color="primary" />
        <Typography variant="h6" color="primary">
          Dziennik snu
        </Typography>
      </Styled.SubtitleBox>
    </Styled.TopBox>

    <Styled.StatisticsBox>
      <Styled.StatisticsColumn>
        <Typography variant="body1" color="primary">
          Średni czas snu
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.sleepTime}</Typography>
        <Typography variant="body1" color="primary">
          Średni czas czuwania
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.wakeTime}</Typography>
        <Typography variant="body1" color="primary">
          Średni czas snu lekkiego
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.lightSleepTime}</Typography>
        <Typography variant="body1" color="primary">
          Średni czas snu głębokiego
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.deepSleepTime}</Typography>
        <Typography variant="body1" color="primary">
          Średni czas snu REM
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.remSleepTime}</Typography>
        <Typography variant="body1" color="primary">
          Średnia latencja snu REM
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.remLatency}</Typography>
      </Styled.StatisticsColumn>

      <Styled.StatisticsColumn>
        <Typography variant="body1" color="primary">
          Średnie czuwanie wtrącone
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.waso}</Typography>
        <Typography variant="body1" color="primary">
          Średnia liczba wybudzeń
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.wakes}</Typography>
        <Typography variant="body1" color="primary">
          Średnia wydajność snu
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.sleepEfficiency}</Typography>
        <Typography variant="body1" color="primary">
          Średnia saturacja krwi
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.saturation}</Typography>
        <Typography variant="body1" color="primary">
          Średni czas desaturacji {'<'} 90%
        </Typography>
        <Typography variant="body1">{smartwatchStatistics.desaturationTime}</Typography>
      </Styled.StatisticsColumn>

      <Styled.StatisticsColumn>
        {Object.keys(diaryParams).map(entry => (
          <div key={entry}>
            <Typography variant="body1" color="primary">
              {diaryParams[entry as keyof SleepDiaryStatistics]}
            </Typography>
            <Typography variant="body1">
              {diaryStatistics[entry as keyof SleepDiaryStatistics]}
            </Typography>
          </div>
        ))}
      </Styled.StatisticsColumn>
    </Styled.StatisticsBox>
  </div>
);

export default StatisticsDetails;
