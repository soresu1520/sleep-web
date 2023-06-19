/* eslint-disable  @typescript-eslint/no-explicit-any */
import CanvasJSReact from '@canvasjs/react-charts';
import { SleepStage } from '../../../types/databaseTypes';
import {
  formatTooltip,
  formatXLabels,
  formatYLabels,
  generateHypnogramPoints,
} from './Hypnogram.utils';

const Hypnogram = ({ sleepStages }: { sleepStages: SleepStage[] }) => {
  const { CanvasJSChart } = CanvasJSReact;

  const options = {
    data: [
      {
        type: 'stepLine',
        markerSize: 0,
        lineThickness: 3,
        dataPoints: generateHypnogramPoints(sleepStages),
      },
    ],
    zoomEnabled: true,
    animationEnabled: true,
    axisY: {
      interval: 0.5,
      minimum: 0.5,
      tickLength: 0,
      maximum: 4.5,
      labelFormatter: (val: any) => formatYLabels(val.value),
      gridThickness: 0,
      stripLines: [
        {
          value: 0,
          showOnTop: true,
          color: 'gray',
          thickness: 2,
        },
      ],
    },
    axisX: {
      labelFormatter: (val: any) => formatXLabels(val.value),
    },
    toolTip: {
      contentFormatter: (val: any) =>
        formatTooltip(val.entries[0].dataPoint.x, val.entries[0].dataPoint.y),
    },
    height: 200,
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Hypnogram;
