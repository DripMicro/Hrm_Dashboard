import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '👨‍👦‍👦 swiss-office',
    data: [
      0,
      85,
      85,
      81,
      89,
      82,
      89,
      91,
      94,
      96, // 10
      95,
      95,
      91,
      79,
      72,
      79,
      71,
      74,
      75,
      95, // 20
      91,
      89,
      82,
      89,
      81,
      94,
      76,
      95,
      85,
      81 // 30
    ]
  },
  {
    name: '🦧 Brief',
    data: [
      86,
      84,
      93,
      86,
      77,
      88,
      99,
      87,
      85,
      86, // 10
      84,
      83,
      76,
      77,
      88,
      99,
      77,
      95,
      96,
      94, // 20
      96,
      94,
      93,
      86,
      97,
      88,
      99,
      77,
      85,
      96 // 30
    ]
  },
  {
    name: '💼 Office',
    data: [
      76,
      94,
      94,
      76,
      87,
      88,
      89,
      86,
      83,
      96, // 10
      94,
      83,
      96,
      97,
      88,
      90,
      88,
      89,
      97,
      85,
      96,
      54, // 20
      76,
      94,
      93,
      96,
      47,
      58,
      69,
      87 // 30
    ]
  }
];

export default function AppAreaInstalled() {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30'
      ]
    }
  });

  return (
    <Card>
      <CardHeader
        title="Workforce distribution"
        subheader="Percentage of each status per day"
      />
      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart
          type="area"
          series={CHART_DATA}
          options={chartOptions}
          height={300}
        />
      </Box>
    </Card>
  );
}
