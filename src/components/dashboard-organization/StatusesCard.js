/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

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
  Checkbox,
  TextField,
  FormControlLabel
} from '@material-ui/core';

import EmojiButton from '../dashboard-component/EmojiButton';

function createData(id, emoji, description, subDescription, isActive) {
  return { id, emoji, description, subDescription, isActive };
}

function customData(id, emoji, description, isActive) {
  return { id, emoji, description, isActive };
}

const basicList = [
  createData(0, '🏡', 'From home', 'Remote (works with Cities feature)', true),
  createData(1, '🚶‍♂️', 'On the go', 'On the go / Out of the office', false),
  createData(2, '🏝', 'Not working', 'Holiday / Not working', true),
  createData(3, '🤒', 'Sick', 'Sick days (merged with "Not working")', true)
];

const customeList = [customData(0, '🙂', 'Custom 1', true)];

export default function StatusesCard() {
  const [basics, setBasics] = useState(basicList);
  const [customes, setCustomes] = useState(customeList);
  const theme = useTheme();

  const changeIcon = (icon, index) => {
    // eslint-disable-next-line array-callback-return
    basics.map((basic, basicIndex) => {
      if (index === basicIndex) {
        basicList[basicIndex].emoji = icon;
      }
    });
    setBasics([...basicList]);
  };

  const handleAddStatuses = () => {
    customeList.push(
      customData(
        customeList.length,
        '🙂',
        `Custom ${customeList.length + 1}`,
        false
      )
    );
    setCustomes([...customeList]);
  };

  const changeIconCustom = (icon, index) => {
    // eslint-disable-next-line array-callback-return
    customes.map((custom, customIndex) => {
      if (index === customIndex) {
        customeList[customIndex].emoji = icon;
      }
    });
    setCustomes([...customeList]);
  };

  return (
    <Card>
      <CardHeader subheader="STATUSES" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Basic</Typography>
          </Grid>
          {basics.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <EmojiButton
                  icon={item.emoji}
                  index={item.id}
                  changeIconProps={changeIcon}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={item.description}
                  sx={{ mr: 1, width: '100%' }}
                />
                <FormControlLabel
                  control={<Checkbox name="checkedC" checked={item.isActive} />}
                  label="Active"
                />
              </Box>
              <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="caption">{item.subDescription}</Typography>
              </Box>
            </Grid>
          ))}
          <Box m={2} />
          <Grid item xs={12}>
            <Typography variant="h5">Custom</Typography>
          </Grid>
          {customes.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <EmojiButton
                  icon={item.emoji}
                  index={item.id}
                  changeIconProps={changeIconCustom}
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={item.description}
                  sx={{ mr: 1, width: '100%' }}
                />
                <FormControlLabel
                  control={<Checkbox name="checkedC" checked={item.isActive} />}
                  label="Active"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={handleAddStatuses}
          variant="contained"
          sx={{ width: '100%', mt: 2 }}
        >
          <AddIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
