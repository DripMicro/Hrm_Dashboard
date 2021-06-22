// material
import { useTheme } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

import TeamLists from './TeamLists';
// eslint-disable-next-line import/no-unresolved

export default function TeamsContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        component="h1"
        paragraph
        sx={{ textAlign: 'center' }}
      >
        Teams
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <TeamLists />
      </Container>
    </Container>
  );
}
