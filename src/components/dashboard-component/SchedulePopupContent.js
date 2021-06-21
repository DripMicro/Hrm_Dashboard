import { useState } from 'react';
// material
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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
  CardHeader,
  CardContent,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import BlockSchedule from './BlockSchedule';
import TypeButton from './TypeButton';
import SimpleDialogDemo from './SettingDialog';

// ----------------------------------------------------------------------

const Schedule = [
  {
    value: 0,
    label: 'Working remotely',
    icon: '🏡'
  },
  {
    value: 1,
    label: 'On the go',
    icon: '🚶‍♂️'
  },
  {
    value: 2,
    label: 'Not working',
    icon: '🏝'
  },
  {
    value: 3,
    label: 'At the office',
    icon: '💼'
  },
  {
    value: 4,
    label: 'Sick',
    icon: '🤒'
  },
  {
    value: 5,
    label: 'With family',
    icon: '👨‍👨‍👦‍👦'
  },
  {
    value: 6,
    label: 'lol',
    icon: '😫'
  }
];

const ListWrapperStyle = styled('div')(({ theme }) => ({
  width: '100%'
}));

// ----------------------------------------------------------------------

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ListsComponent() {
  const [open, setOpen] = useState(true);
  const [selectedMorning, setSelectedMorning] = useState(1);
  const [selectedAfternoon, setSelectedAfternoon] = useState(3);
  const [checked, setChecked] = useState([0]);
  const [selected, setSelected] = useState(false);

  const theme = useTheme();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleListItemClickMorning = (event, index) => {
    setSelectedMorning(index);
  };

  const handleListItemClickAfternoon = (event, index) => {
    setSelectedAfternoon(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSetting = () => {
    console.log('Hello');
  };

  return (
    <>
      <Card sx={{ width: 360, borderRadius: theme.spacing(2.4) }}>
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
                  {Schedule.map((item) => (
                    <ListItem
                      key={item.value}
                      button
                      selected={selectedMorning === item.value}
                      onClick={(event) =>
                        handleListItemClickMorning(event, item.value)
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
                            {item.icon}
                          </span>
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
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
                  {Schedule.map((item) => (
                    <ListItem
                      key={item.value}
                      button
                      selected={selectedAfternoon === item.value}
                      onClick={(event) =>
                        handleListItemClickAfternoon(event, item.value)
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
                            {item.icon}
                          </span>
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
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
