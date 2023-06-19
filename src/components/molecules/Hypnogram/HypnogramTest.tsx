import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useEffect } from 'react';
import { SleepStage } from '../../../types/databaseTypes';
import { formatYLabels, generateHypnogramData, getColors } from './Hypnogram.utils';

const HypnogramTest = ({ sleepStages }: { sleepStages: SleepStage[] }) => {
  const series = [
    {
      data: generateHypnogramData(sleepStages),
    },
  ];

  const generateColors = (data1: number[][]) =>
    data1.map((d: number[], idx: number) => {
      const color = getColors(d[1]);

      return {
        offset: (idx / data1.length) * 100,
        color,
        opacity: 1,
      };
    });

  const options: ApexOptions = {
    chart: {
      id: 'hypnogram',
    },
    markers: {
      size: 0,
    },
    stroke: {
      curve: 'stepline',
      width: 3,
    },
    yaxis: {
      min: 0,
      max: 5,
      tickAmount: 5,
      labels: {
        formatter: value => formatYLabels(value),
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: generateColors(series[0].data),
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" />
    </div>
  );
};

export default HypnogramTest;
