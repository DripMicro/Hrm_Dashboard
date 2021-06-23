import React, { useState } from 'react';

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
  TextField,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

import DayGroup from '../dashboard-component/TeamCategoryGroup';

const days = [
  {
    id: 0,
    label: 'M',
    selected: true
  },
  {
    id: 1,
    label: 'T',
    selected: true
  },
  {
    id: 2,
    label: 'W',
    selected: false
  },
  {
    id: 3,
    label: 'T',
    selected: true
  },
  {
    id: 4,
    label: 'F',
    selected: true
  },
  {
    id: 5,
    label: 'S',
    selected: false
  },
  {
    id: 6,
    label: 'S',
    selected: false
  }
];

export default function CalendarCard() {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
    okata: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine, okata } = state;

  return (
    <Card>
      <CardHeader subheader="CALENDAR" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> First day of the week </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Typography variant="body1" sx={{ py: 1 }}>
                  You start to work on
                </Typography>
              </Grid>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                <Autocomplete
                  id="combo-box-demo"
                  options={WeekDays}
                  getOptionLabel={(option) => option.weekday}
                  defaultValue={WeekDays[0]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Week of day"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Working days </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Other days will still be available but in a more discrete way. 98%
              of the time it’s weekends.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DayGroup daygroups={days} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Range </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              How many months in advance people can set their status:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex' }}>
              <TextField
                id="filled-number"
                label="Months"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
              <Typography variant="body1" sx={{ py: 2, ml: 2 }}>
                month(s)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const WeekDays = [
  { weekday: 'Monday' },
  { weekday: 'Tuesday' },
  { weekday: 'Wednesday' },
  { weekday: 'Thursday' },
  { weekday: 'Friday' },
  { weekday: 'Saturday' },
  { weekday: 'Sunday' }
];
