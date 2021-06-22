// material
import { useTheme } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

import OfficeLists from './OfficeLists';
// eslint-disable-next-line import/no-unresolved

export default function OfficesContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        component="h1"
        paragraph
        sx={{ textAlign: 'center' }}
      >
        Offices
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <OfficeLists />
      </Container>
    </Container>
  );
}
