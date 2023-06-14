import { PropsWithChildren } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/Watch';
import * as Styled from './DetailsCardTemplate.styled';

type DetailsCardTemplateProps = {
  // eslint-disable-next-line react/require-default-props
  noData?: boolean;
  type: 'diary' | 'smartwatch';
};

const DetailsCardTemplate = ({
  noData = false,
  type,
  children,
}: PropsWithChildren<DetailsCardTemplateProps>) => (
  <Card sx={{ width: '100%' }}>
    <CardContent>
      <Styled.TitleBox>
        {type === 'diary' ? (
          <FormatListBulletedIcon color="primary" />
        ) : (
          <WatchIcon color="primary" />
        )}
        <Typography variant="h6" color="primary">
          {type === 'diary' ? 'Dziennik snu' : 'Smartwatch'}
        </Typography>
      </Styled.TitleBox>
      {noData ? <Typography variant="body1">Brak danych</Typography> : children}
    </CardContent>
  </Card>
);

export default DetailsCardTemplate;
