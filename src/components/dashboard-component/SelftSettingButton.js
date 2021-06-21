import React from 'react';
import { withStyles, useTheme, makeStyles } from '@material-ui/core/styles';

import { Button, Popover, Typography, Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import PopupContent from './SchedulePopupContent';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

const PopoverStyle = withStyles(() => ({
  paper: {
    borderRadius: 24
  }
}))(Popover);

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const theme = useTheme();
  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          marginTop: '20px',
          width: '100%',
          py: theme.spacing(2),
          px: theme.spacing(3),
          borderRadius: theme.spacing(3)
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/dashboard/home/3.jpg"
              sx={{
                width: theme.spacing(6),
                height: theme.spacing(6),
                marginRight: theme.spacing(3)
              }}
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2">You are working from</Typography>
              <Typography variant="subtitle1">Office</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: theme.spacing(3),
              padding: theme.spacing(0.8, 1.3)
            }}
          >
            <span role="img" aria-label="Panda" style={{ fontSize: '23px' }}>
              💼
            </span>
          </Box>
        </Box>
      </Button>
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
        <PopupContent />
      </PopoverStyle>
    </div>
  );
}
