import { Grid } from '@material-ui/core';
// ----------------------------------------------------------------------

import OccupancyRateCard from './OccupancyRateCard';
import StatusRate from './StatusRateCard';
import WorkforceRateCard from './WorkforceRateCard';
import AverageWeekCard from './AverageWeekCard';

export default function AnalyticsContent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OccupancyRateCard />
      </Grid>
      <Grid item xs={12}>
        <StatusRate />
      </Grid>
      <Grid item xs={12}>
        <WorkforceRateCard />
      </Grid>
      <Grid item xs={12}>
        <AverageWeekCard />
      </Grid>
    </Grid>
  );
}
