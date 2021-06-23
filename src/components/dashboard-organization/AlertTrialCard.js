import React from 'react';

import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Card, CardContent, Typography, Box } from '@material-ui/core';

const YellowBadge = styled('div')(({ theme }) => ({
  backgroundColor: '#FAF6D0',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontWeight: 800,
  fontSize: 13
}));

const GreyBadge = styled('div')(({ theme }) => ({
  backgroundColor: '#DCE7FB',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontWeight: 800,
  fontSize: 13
}));

const RedBadge = styled('div')(({ theme }) => ({
  backgroundColor: '#FF5050',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontWeight: 800,
  fontSize: 13,
  color: 'white'
}));

export default function AlertTrialCard() {
  const theme = useTheme();
  return (
    <Card>
      <CardContent
        sx={{
          [theme.breakpoints.down('sm')]: { padding: theme.spacing(2.5, 0) }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
              display: 'block',
              textAlign: 'center'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              [theme.breakpoints.down('sm')]: {
                mb: 1,
                display: 'block'
              }
            }}
          >
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              Subscription
            </Typography>
            <YellowBadge>TRIAL</YellowBadge>
          </Box>
          <Box
            sx={{
              display: 'flex',
              [theme.breakpoints.down('sm')]: {
                display: 'block',
                mb: 1
              }
            }}
          >
            <Typography>ends on</Typography>
            <Box m={1} />
            <GreyBadge>July 5, 2021</GreyBadge>
            <Box m={1} />
            <RedBadge>10 Days Left</RedBadge>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
