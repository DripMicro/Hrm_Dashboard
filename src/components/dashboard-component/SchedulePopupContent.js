import PropTypes from 'prop-types';
import { useState } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Card,
  Box,
  List,
  Typography,
  ListItem,
  Button,
  CardContent,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

import ToggleButton from '@material-ui/lab/ToggleButton';

// routes
// components
import BlockSchedule from './BlockSchedule';
import TypeButton from './TypeButton';
import SimpleDialogDemo from './SettingDialog';

SchedulePopupContent.propTypes = {
  Schedule: PropTypes.array,
  iconProps: PropTypes.func
};

// ----------------------------------------------------------------------

const ListWrapperStyle = styled('div')(() => ({
  width: '100%'
}));

// ----------------------------------------------------------------------

export default function SchedulePopupContent({ Schedule, iconProps }) {
  const [selectedMorning, setSelectedMorning] = useState(0);
  const [selectedAfternoon, setSelectedAfternoon] = useState(0);
  const [selected, setSelected] = useState(false);

  const [morningDetail, setMorningDetail] = useState({});
  const [afternoonDetail, setAfternoonDetail] = useState({});

  const theme = useTheme();

  const handleListItemClickMorning = (event, index, id, type) => {
    const detail = {
      id,
      type
    };
    setMorningDetail(detail);
    setSelectedMorning(index);
  };

  const handleListItemClickAfternoon = (event, index, id, type) => {
    const detail = {
      id,
      type
    };
    setAfternoonDetail(detail);
    setSelectedAfternoon(index);
  };

  const handleClick = () => {
    let mDetail = {};
    let aDetail = {};
    if (morningDetail.id === undefined) {
      mDetail = {
        id: Schedule[0].id,
        type: Schedule[0].type
      };
    }
    if (afternoonDetail.id === undefined) {
      aDetail = {
        id: Schedule[0].id,
        type: Schedule[0].type
      };
    }
    iconProps(
      selectedMorning,
      selectedAfternoon,
      morningDetail.id === undefined ? mDetail : morningDetail,
      afternoonDetail.id === undefined ? aDetail : afternoonDetail,
      !selected
    );
  };

  return (
    <>
      <Card sx={{ width: 343, borderRadius: theme.spacing(2.4) }}>
        <Box
          sx={{
            padding: '24px 24px 0',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h5" sx={{ pl: 9 }}>
            Wednesday Jun 2
          </Typography>
          <SimpleDialogDemo />
        </Box>
        <CardContent>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'rgb(135, 143, 177)',
                mb: 1
              }}
            >
              <Box
                component="img"
                src="/static/dashboard/home/light_mode_black_24dp.svg"
                sx={{ mr: 1 }}
              />
              {!selected ? (
                <Typography variant="body2">MORNING</Typography>
              ) : (
                <Typography variant="body2">ALL DAY</Typography>
              )}
            </Box>
            <BlockSchedule sx={{ mb: 3, ...(selected && { height: 360 }) }}>
              <ListWrapperStyle>
                <List component="nav" aria-label="main mailbox folders">
                  {Schedule.map((item, index) => (
                    <ListItem
                      key={index}
                      button
                      selected={selectedMorning === index}
                      onClick={(event) =>
                        handleListItemClickMorning(
                          event,
                          index,
                          item.id,
                          item.type
                        )
                      }
                      sx={{ borderRadius: '10px' }}
                    >
                      <ListItemIcon>
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
                            {item.emoji}
                          </span>
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </ListWrapperStyle>
            </BlockSchedule>
          </Box>

          <Box sx={{ ...(selected && { display: 'none' }) }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'rgb(135, 143, 177)',
                mb: 1
              }}
            >
              <Box
                component="img"
                src="/static/dashboard/home/nightlight_black_24dp.svg"
                sx={{ mr: 1 }}
              />
              <Typography variant="body2">AFTERNOON</Typography>
            </Box>
            <BlockSchedule sx={{ mb: 3 }}>
              <ListWrapperStyle>
                <List component="nav" aria-label="main mailbox folders">
                  {Schedule.map((item, index) => (
                    <ListItem
                      key={index}
                      button
                      selected={selectedAfternoon === index}
                      onClick={(event) =>
                        handleListItemClickAfternoon(
                          event,
                          index,
                          item.id,
                          item.type
                        )
                      }
                      sx={{ borderRadius: '10px' }}
                    >
                      <ListItemIcon>
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
                            {item.emoji}
                          </span>
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </ListWrapperStyle>
            </BlockSchedule>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              sx={{ padding: '5px 10px', minWidth: '110px' }}
            >
              {selected ? (
                <TypeButton type="all" />
              ) : (
                <TypeButton type="half" />
              )}
            </ToggleButton>
            <Button variant="outlined" onClick={handleClick}>
              Set Status
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
