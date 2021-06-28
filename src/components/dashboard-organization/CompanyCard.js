import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

export default function CompanyCard() {
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
      <CardHeader subheader="COMPANY" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Company Name </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Approved Domains </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Users can sign up with email from these domains:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="@bengoufa.com"
              disabled
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Allowed providers </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Users can sign up from these providers:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Email + Password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Google Sign In (G Suite)"
              />
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Microsoft Azure AD*"
              />
              <FormControlLabel
                disabled
                control={
                  <Checkbox
                    checked={okata}
                    onChange={handleChange}
                    name="okata"
                  />
                }
                label="Okta*"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="caption">*coming soon</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
