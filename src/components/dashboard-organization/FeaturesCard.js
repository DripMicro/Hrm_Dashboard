/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
  Checkbox
} from '@material-ui/core';

const ScheduleDivider = styled('div')(() => ({
  position: 'absolute',
  zIndex: 10,
  width: '2px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#e7ecf5',
  transform: 'rotate(15deg)'
}));

export default function FeaturesCard() {
  const theme = useTheme();
  return (
    <Card>
      <CardHeader subheader="FEATURES" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5">Half days</Typography>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  backgroundColor: '#FCEEE2',
                  padding: theme.spacing(2, 3),
                  borderRadius: theme.spacing(2),
                  maxHeight: 90
                }}
              >
                <Button
                  disabled
                  sx={{
                    backgroundColor: 'white',
                    border: '1px solid #E7ECF5',
                    borderRadius: '40%',
                    padding: theme.spacing(1.7, 0),
                    position: 'relative',
                    [theme.breakpoints.down('md')]: {
                      minWidth: '0px',
                      width: '63px'
                    }
                  }}
                >
                  <Box
                    role="img"
                    aria-label="Panda"
                    sx={{
                      fontSize: '15px',
                      [theme.breakpoints.up('md')]: { fontSize: '20px' }
                    }}
                  >
                    🤒🏠
                  </Box>
                  <ScheduleDivider />
                </Button>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 2, display: 'flex', alignItems: 'center' }}
              >
                Users can set a different status for the morning and the
                afternoon.
              </Typography>
            </Box>
          </Grid>
          <Box m={2} />
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5">Cities (working remotely)</Typography>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  backgroundColor: '#E4DDFD',
                  padding: theme.spacing(3.5, 1),
                  borderRadius: theme.spacing(2),
                  maxHeight: 90
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    fontWeight: 900,
                    fontSize: 15,
                    backgroundColor: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: theme.spacing(1)
                  }}
                >
                  📍 London
                </Box>
              </Box>
              <Typography
                variant="body1"
                sx={{ ml: 2, display: 'flex', alignItems: 'center' }}
              >
                Users can set specific city to help their colleague know where
                they’re working remotely from.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
