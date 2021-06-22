// material
import { useTheme } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

import InviteLists from './InviteLists';
// eslint-disable-next-line import/no-unresolved

export default function InviteContent() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" paragraph sx={{ textAlign: 'center' }}>
        Invite your colleagues
      </Typography>
      <Typography variant="h6" paragraph sx={{ textAlign: 'center' }}>
        Your colleagues will need to use their @bengoufa.com email to join your
        organization!
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
      >
        <InviteLists />
      </Container>
    </Container>
  );
}
