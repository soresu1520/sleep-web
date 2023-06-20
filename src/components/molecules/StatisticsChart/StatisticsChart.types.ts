import { SleepDiary, SmartwatchStudy } from '../../../types/databaseTypes';
import { ChartType } from '../StatisticsToggleButtons/StatisticsToggleButtons.types';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts';

export type StatisticsChartProps = {
  chartType: ChartType;
  smartwatch: SmartwatchStudy[];
  diary: SleepDiary[];
};

export type MyTooltip<MyValue extends ValueType, MyName extends NameType> = TooltipProps<
  MyValue,
  MyName
> & {
  chartType: ChartType;
};

export type DataPoint = {
  name: string;
  value: number;
};
