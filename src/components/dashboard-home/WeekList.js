import PropTypes from 'prop-types';

import { useState } from 'react';
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
  zIndex: 10,
  width: '2px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#e7ecf5',
  transform: 'rotate(15deg)'
}));

WeekList.propTypes = {
  daystatus: PropTypes.array
};

// ----------------------------------------------------------------------

export default function WeekList({ daystatus }) {
  const [selected, setSelected] = useState(1);

  const theme = useTheme();

  const handleListItemClick = (event, index) => {
    setSelected(index);
  };

  return (
    <>
      <ListWrapperStyle>
        <List component="nav" aria-label="main mailbox folders">
          {daystatus.map((item) => (
            <Box key={item.id}>
              <ListItem
                button
                selected={selected === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
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
