// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container, Grid, Box } from '@material-ui/core';
// ----------------------------------------------------------------------

import OccupancyRateCard from './OccupancyRateCard';
import StatusRate from './StatusRateCard';
import WorkforceRateCard from './WorkforceRateCard';
import AverageWeekCard from './AverageWeekCard';

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

export default function AnalyticsContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
}
