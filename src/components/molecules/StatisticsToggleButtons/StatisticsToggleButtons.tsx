import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { ChartType, StatisticsToggleButtonsProps } from './StatisticsToggleButtons.types';
import { FlexGroup } from './StatisticsToggleButtons.styled';

const StatisticsToggleButtons = ({ chooseChartType }: StatisticsToggleButtonsProps) => {
  const [chartType, setChartType] = useState<ChartType | null>(null);

  const onChange = (event: React.MouseEvent<HTMLElement>, newChartType: ChartType | null) => {
    if (newChartType !== null) {
      setChartType(newChartType);
      chooseChartType(newChartType);
    }
  };

  return (
    <FlexGroup value={chartType} exclusive onChange={onChange} color="primary">
      <ToggleButton value="sleepTime">Czas snu</ToggleButton>
      <ToggleButton value="diarySleepTime">Czas snu (dziennik)</ToggleButton>
      <ToggleButton value="sleepEfficiency">Wydajność snu</ToggleButton>
      <ToggleButton value="diarySleepEfficiency">Wydajność snu (dziennik)</ToggleButton>
      <ToggleButton value="latency">Latencja snu</ToggleButton>
      <ToggleButton value="waso">Czuwanie wtrącone</ToggleButton>
      <ToggleButton value="sleepQuality">Jakość snu</ToggleButton>
      <ToggleButton value="saturation">Saturacja</ToggleButton>
      <ToggleButton value="desaturation">Desaturacja</ToggleButton>
    </FlexGroup>
  );
};
export default StatisticsToggleButtons;
