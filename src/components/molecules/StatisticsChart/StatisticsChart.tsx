import { useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { MyTooltip, StatisticsChartProps } from './StatisticsChart.types';
import { formatValue, formatYLabel, getData } from './StatisticsChart.utils';

const CustomTooltip = ({ active, payload, label, chartType }: MyTooltip<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`${label}: ${formatValue(payload[0].value, chartType)}`}</p>
      </div>
    );
  }

  return null;
};

const StatisticsChart = ({ chartType, smartwatch, diary }: StatisticsChartProps) => {
  const { palette } = useTheme();

  return (
    <ResponsiveContainer width="80%" height={300}>
      <BarChart
        width={900}
        height={200}
        data={getData(diary, smartwatch, chartType)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={value => formatYLabel(value, chartType)} />
        <Tooltip
          content={<CustomTooltip chartType={chartType} />}
          wrapperStyle={{
            backgroundColor: '#FFFFFF',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        />
        <Bar dataKey="value" fill={palette.secondary.main} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;
