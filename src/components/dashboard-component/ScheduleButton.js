import PropTypes from 'prop-types';

import React, { useState } from 'react';
import {
  withStyles,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Button, Popover, Typography, Box } from '@material-ui/core';

import PopupContent from './SchedulePopupContent';

const PopoverStyle = withStyles(() => ({
  paper: {
    borderRadius: 24
  }
}))(Popover);

const ScheduleDivider = styled('div')(() => ({
  position: 'absolute',
  zIndex: 10,
  width: '2px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#e7ecf5',
  transform: 'rotate(15deg)'
}));

ScheduleButton.propTypes = {
  index: PropTypes.number,
  schedule: PropTypes.array,
  weekday: PropTypes.string,
  icon: PropTypes.string,
  halfday: PropTypes.bool,
  work: PropTypes.bool,
  iconProps: PropTypes.func
};

export default function ScheduleButton({
  index,
  schedule,
  weekday,
  icon,
  halfday,
  work,
  iconProps
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHalf, setHalf] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeIcon = (icon1, icon2, status) => {
    setHalf(status);
    iconProps(icon1, icon2, status, index);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          width: 64,
          mr: 0,
          [theme.breakpoints.up('sm')]: { mr: 5 },
          [theme.breakpoints.up('md')]: { mr: 3 },
          [theme.breakpoints.up(1600)]: { mr: 9 }
        }}
      >
        <Typography
          variant="body2"
          sx={{ pl: 1, [theme.breakpoints.up('md')]: { textAlign: 'center' } }}
        >
          {weekday}
        </Typography>
        <Button
          onClick={handleClick}
          sx={{
            border: '1px solid #E7ECF5',
            borderRadius: '40%',
            padding: theme.spacing(1.7, 0),
            maxWidth: '66px',
            maxHeight: '67px',
            position: 'relative',
            [theme.breakpoints.down('md')]: {
              minWidth: '0px',
              width: '50px'
            }
          }}
        >
          <Box
            role="img"
            aria-label="Panda"
            sx={{
              fontSize: '15px',
              [theme.breakpoints.up('md')]: {
                fontSize: '20px',
                ...(isHalf && { fontSize: '20px' })
              }
            }}
          >
            {icon}
          </Box>
          {halfday && <ScheduleDivider />}
          {work ? (
            <Box
              component="img"
              src="/static/dashboard/home/ok.svg"
              sx={{
                width: 18,
                height: 18,
                position: 'absolute',
                right: 0,
                bottom: 0
              }}
            />
          ) : (
            <Box
              component="img"
              src="/static/dashboard/home/cancel.svg"
              sx={{
                width: 18,
                height: 18,
                position: 'absolute',
                right: 0,
                bottom: 0
              }}
            />
          )}
        </Button>
      </Box>
      <PopoverStyle
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 90,
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        sx={{ backgroundColor: '#00000040' }}
      >
        <PopupContent Schedule={schedule} iconProps={changeIcon} />
      </PopoverStyle>
    </div>
  );
}
