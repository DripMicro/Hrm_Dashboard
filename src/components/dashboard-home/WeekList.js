/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button
} from '@material-ui/core';

// ----------------------------------------------------------------------

const ListWrapperStyle = styled('div')(() => ({
  width: '100%'
}));

const ScheduleDivider = styled('div')(() => ({
  position: 'absolute',
  width: '2px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#e7ecf5',
  transform: 'rotate(15deg)'
}));

WeekList.propTypes = {
  dayIndex: PropTypes.number,
  daystatus: PropTypes.array,
  showDetail: PropTypes.func
};

// ----------------------------------------------------------------------

export default function WeekList({ dayIndex, showDetail, daystatus }) {
  const [selected, setSelected] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    if (showDetail !== undefined) {
      showDetail(new Date().getDate());
      console.log('this is DayINDEX:', dayIndex, daystatus);
      setSelected(dayIndex);
    }
  }, []);

  const handleListItemClick = (event, id, index) => {
    showDetail(id);
    setSelected(index);
  };

  return (
    <>
      <ListWrapperStyle>
        <List component="nav" aria-label="main mailbox folders">
          {daystatus.map((item, index) => (
            <Box key={item.id}>
              <ListItem
                button
                selected={selected === index}
                onClick={(event) => handleListItemClick(event, item.id, index)}
                sx={{
                  borderRadius: '10px',
                  '&.Mui-selected': {
                    borderLeft: '3px solid #00AB55',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }
                }}
              >
                <ListItemIcon>
                  <Button
                    disabled
                    sx={{
                      border: '1px solid #E7ECF5',
                      borderRadius: '40%',
                      padding: theme.spacing(1.7, 0),
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
                        [theme.breakpoints.up('md')]: { fontSize: '20px' }
                      }}
                    >
                      {item.icon}
                    </Box>
                    {item.halfday && <ScheduleDivider />}
                    {item.work ? (
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
                </ListItemIcon>
                <ListItemText primary={item.weekTitle} />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </ListWrapperStyle>
    </>
  );
}
