// material
import { Grid, Box } from '@material-ui/core';
// ----------------------------------------------------------------------

import AlertTrialCard from './AlertTrialCard';
import CompanyCard from './CompanyCard';
import CalendarCard from './CalendarCard';
import FeaturesCard from './FeaturesCard';
import IntegrationCard from './IntegrationCard';
import StatusesCard from './StatusesCard';
// eslint-disable-next-line import/no-unresolved

export default function OrganizationContent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AlertTrialCard />
      </Grid>
      <Grid item md={6} xs={12}>
        <CompanyCard />
        <Box m={3} />
        <IntegrationCard />
      </Grid>
      <Grid item md={6} xs={12}>
        <CalendarCard />
        <Box m={3} />
        <FeaturesCard />
        <Box m={3} />
        <StatusesCard />
      </Grid>
    </Grid>
  );
}
