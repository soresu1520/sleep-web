/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/Watch';
import * as Styled from './StatisticsDetails.styled';
import { diaryParams, initialDiaryStatistics } from './StatisticsDetails.utils';
import { SleepDiaryStatistics, StatisticsDetailsProps } from './StatisticsDetails.types';

const StatisticsDetails = ({ sleepDiary }: StatisticsDetailsProps) => {
  const [diaryStatistics, setDiaryStatistics] = useState(initialDiaryStatistics);

  useEffect(() => {
    console.log('ey');
  }, [sleepDiary]);

  return (
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
        <Styled.StatisticsColumn>lol</Styled.StatisticsColumn>
        <Styled.StatisticsColumn>lol</Styled.StatisticsColumn>
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
};

export default StatisticsDetails;
