import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import BaseOptionChart from '../dashboard-component/BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'has status',
    data: [
      0,
      95,
      97,
      97,
      89,
      99,
      99,
      91,
      94,
      86, // 10
      45,
      89,
      81,
      99,
      92,
      99,
      91,
      64,
      75,
      95, // 20
      91,
      96,
      97,
      95,
      96,
      84,
      96,
      95,
      96,
      92 // 30
    ]
  },
  {
    name: 'no status',
    data: [
      46,
      34,
      93,
      99,
      77,
      99,
      99,
      77,
      99,
      46, // 10
      97,
      73,
      56,
      77,
      88,
      99,
      77,
      98,
      99,
      94, // 20
      97,
      74,
      63,
      89,
      77,
      88,
      99,
      77,
      45,
      98 // 30
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
        title="Status rate"
        subheader="Ratio of set/unset status per day"
      />
      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={300}
        />
      </Box>
    </Card>
  );
}
