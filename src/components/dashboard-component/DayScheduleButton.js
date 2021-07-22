import PropTypes from 'prop-types';

import React, { useEffect } from 'react';

import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';

import Heatmap from './Heatmap';

DayScheduleButton.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
  officeInfo: PropTypes.array,
  icon: PropTypes.string,
  halfday: PropTypes.bool,
  isSelected: PropTypes.bool,
  Selection: PropTypes.func
};

const ScheduleDivider = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '7px',
  zIndex: 10,
  width: '2px',
  height: '48px',
  borderRadius: '8px',
  backgroundColor: '#e0e0e0',
  transform: 'rotate(15deg)',
  [theme.breakpoints.down('sm')]: {
    height: '30px'
  }
}));

export default function DayScheduleButton({
  year,
  month,
  day,
  officeInfo,
  icon,
  halfday,
  isSelected,
  Selection
}) {
  const theme = useTheme();

  // useEffect(() => {
  //   console.log(
  //     'OfficeInfo:',
  //     'Month:',
  //     month,
  //     'Day:',
  //     day,
  //     officeInfo[0].occupancy
  //   );
  // }, [officeInfo]);

  const handleClick = () => {
    Selection(true, year, month, day);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        ...(isSelected && { backgroundColor: '#D6F5EA' }),
        transition: 'all .3s',
        borderRadius: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
          width: '70px',
          margin: 'auto'
        },
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#D6F5EA'
        }
      }}
    >
      <Typography variant="caption">{day}</Typography>
      {/* <Box
        sx={{
          position: 'relative',
          width: 60,
          height: 60
        }}
      >
        <Heatmap occupancy={officeInfo[0].occupancy} />
        <Box
          role="img"
          aria-label="Panda"
          sx={{
            fontSize: '25px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {icon}
        </Box>
        {halfday && <ScheduleDivider />}
      </Box> */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: '50%',
          overflow: 'hidden',
          width: '60px',
          height: '60px',
          textAlign: 'center',
          margin: 'auto',
          py: 1.2,
          border: '1px solid #e8e8e8',
          [theme.breakpoints.down('sm')]: {
            border: '3px solid #E7ECF5',
            py: 1,
            width: '40px',
            height: '40px'
          }
        }}
      >
        <Box
          role="img"
          aria-label="Panda"
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12px',
            [theme.breakpoints.up('sm')]: { fontSize: '18px' }
          }}
        >
          {icon}
        </Box>
        {halfday && <ScheduleDivider />}
        <Box m={3} />
      </Box>
    </Box>
  );
}
