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
      86,
      45,
      35,
      51,
      49,
      62,
      69,
      91,
      64,
      86, // 10
      45,
      95,
      51,
      49,
      62,
      69,
      91,
      64,
      45,
      45, // 20
      51,
      49,
      62,
      69,
      81,
      64,
      86,
      45,
      85,
      51 // 30
    ]
  },
  {
    name: '🦧 Brief',
    data: [
      46,
      34,
      93,
      56,
      77,
      88,
      99,
      77,
      45,
      46, // 10
      34,
      73,
      56,
      77,
      88,
      99,
      77,
      45,
      46,
      94, // 20
      46,
      74,
      63,
      56,
      77,
      88,
      99,
      77,
      45,
      46 // 30
    ]
  },
  {
    name: '💼 Office',
    data: [
      76,
      94,
      94,
      76,
      47,
      68,
      59,
      76,
      43,
      96, // 10
      44,
      83,
      96,
      97,
      8,
      50,
      48,
      19,
      97,
      75,
      96,
      54, // 20
      76,
      94,
      93,
      96,
      47,
      58,
      69,
      87,
      55,
      36 // 30
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
