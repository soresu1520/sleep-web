import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/Watch';
import * as Styled from './StatisticsDetails.styled';

const StatisticsDetails = () => (
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
      <div style={{ border: '1px solid red', flexBasis: '32%' }}>lol</div>
      <div style={{ border: '1px solid red', flexBasis: '32%' }}>lol</div>
      <div style={{ border: '1px solid red', flexBasis: '32%' }}>lol</div>
    </Styled.StatisticsBox>
  </div>
);

export default StatisticsDetails;
