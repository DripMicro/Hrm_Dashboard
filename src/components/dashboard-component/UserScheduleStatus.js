import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { deepOrange } from '@material-ui/core/colors';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    padding: theme.spacing(1.5, 0, 1, 2),
    minWidth: '200px'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: theme.spacing(1.5, 0, 1, 2)
  }
}));

const Users = [
  {
    value: 0,
    label: 'Zelenko Sofia',
    icon: '/static/dashboard/home/3.jpg',
    isAvatar: true
  },
  {
    value: 1,
    label: 'Oleg Pablo',
    icon: 'OP',
    isAvatar: false
  },
  {
    value: 2,
    label: 'Alexander Ryndin',
    icon: '/static/dashboard/home/2.jpg',
    isAvatar: true
  }
];

const DayStatus = [
  {
    id: 0,
    title: 'Office',
    icon: '💼',
    panel_name: 'panel1'
  },
  {
    id: 1,
    title: 'Not working',
    icon: '🏝',
    panel_name: 'panel2'
  },
  {
    id: 2,
    title: 'No Status yet',
    icon: '🤒',
    panel_name: 'panel3'
  }
];

export default function UserScheduleStatus() {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleProfile = () => {
    console.log('this is profile');
  };

  return (
    <div className={classes.root}>
      {DayStatus.map((status) => (
        <Accordion
          key={status.id}
          expanded={expanded === status.panel_name}
          onChange={handleChange(status.panel_name)}
          sx={{
            border: '1px solid #E7ECF5',
            borderRadius: '24px !important',
            mb: 5,
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                itemAlign: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    border: '3px solid #E7ECF5',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center'
                  }}
                >
                  <span
                    role="img"
                    aria-label="Panda"
                    style={{ fontSize: '25px' }}
                  >
                    {status.icon}
                  </span>
                </Box>
                <Typography className={classes.heading}>
                  {status.title}({DayStatus.length})
                </Typography>
              </Box>

              {expanded !== status.panel_name && (
                <Box sx={{ display: 'flex', pt: 1 }}>
                  {Users.map((item) => (
                    <Box key={item.value}>
                      {item.isAvatar ? (
                        <Avatar
                          alt="Remy Sharp"
                          src={item.icon}
                          sx={{
                            width: theme.spacing(5),
                            height: theme.spacing(5),
                            marginLeft: theme.spacing(-1),
                            backgroundColor: deepOrange[500],
                            color: theme.palette.getContrastText(
                              deepOrange[500]
                            )
                          }}
                        />
                      ) : (
                        <Avatar
                          alt="Remy Sharp"
                          sx={{
                            width: theme.spacing(5),
                            height: theme.spacing(5),
                            marginLeft: theme.spacing(-1),
                            backgroundColor: deepOrange[500],
                            color: theme.palette.getContrastText(
                              deepOrange[500]
                            )
                          }}
                        >
                          {item.icon}
                        </Avatar>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {Users.map((item) => (
              <ListItem
                key={item.value}
                button
                onClick={handleProfile}
                sx={{ borderRadius: '10px' }}
              >
                <ListItemIcon>
                  <Box
                    sx={{
                      width: '50px',
                      height: '50px'
                    }}
                  >
                    {item.isAvatar ? (
                      <Avatar
                        alt="Remy Sharp"
                        src={item.icon}
                        sx={{
                          width: theme.spacing(6),
                          height: theme.spacing(6),
                          marginLeft: theme.spacing(-1)
                        }}
                      />
                    ) : (
                      <Avatar
                        alt="Remy Sharp"
                        sx={{
                          width: theme.spacing(6),
                          height: theme.spacing(6),
                          marginLeft: theme.spacing(-1),
                          backgroundColor: deepOrange[500],
                          color: theme.palette.getContrastText(deepOrange[500])
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    )}
                  </Box>
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
