import PropTypes from 'prop-types';

import React, { useEffect } from 'react';

import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@material-ui/core';

DayStatusButtonGroup.propTypes = {
  officeGroups: PropTypes.array.isRequired,
  statusProps: PropTypes.func,
  officeInitProps: PropTypes.array,
  isMulti: PropTypes.bool,
  sx: PropTypes.object
};

export default function DayStatusButtonGroup({
  officeGroups,
  statusProps,
  officeInitProps,
  isMulti,
  sx
}) {
  const [type, setType] = React.useState(0);
  const [types, setTypes] = React.useState([]);

  const handleType = (event, newType) => {
    console.log(newType);
    setType(newType);
  };

  const handleTypes = (event, newTypes) => {
    statusProps(newTypes);
    setTypes(newTypes);
  };

  useEffect(() => {
    setTypes(officeInitProps);
    setType(1);
  }, [officeInitProps]);
  return (
    <>
      {isMulti ? (
        <ToggleButtonGroup
          value={types}
          onChange={handleTypes}
          aria-label="day type"
          sx={{ display: 'block', textAlign: 'center', mb: 3, ...sx }}
        >
          {officeGroups.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              style={{ height: '42px' }}
              sx={{
                mr: 1,
                mb: 1,
                heigth: '42px !important',
                borderRadius: '20px !important',
                borderLeft: '1px solid #D5D9DF !important',
                '&.Mui-selected': {
                  border: '1px solid #00AB55',
                  borderLeft: '1px solid #00AB55 !important',
                  color: '#00AB55',
                  backgroundColor: 'white'
                }
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <span
                  role="img"
                  aria-label="Panda"
                  style={{ fontSize: '23px' }}
                >
                  {item.icon}
                </span>
                <Typography variant="body2" sx={{ paddingTop: 1, ml: 1 }}>
                  {item.label}
                </Typography>
              </Box>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      ) : (
        <ToggleButtonGroup
          value={type}
          exclusive
          onChange={handleType}
          aria-label="day type"
          sx={{ display: 'block', textAlign: 'center', mb: 3 }}
        >
          {officeGroups.map((item) => (
            <ToggleButton
              key={item.id}
              value={item.id}
              style={{ height: '42px' }}
              sx={{
                mr: 1,
                mb: 1,
                heigth: '42px !important',
                borderRadius: '20px !important',
                borderLeft: '1px solid #D5D9DF !important',
                '&.Mui-selected': {
                  border: '1px solid #00AB55',
                  borderLeft: '1px solid #00AB55 !important',
                  color: '#00AB55',
                  backgroundColor: 'white'
                }
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <span
                  role="img"
                  aria-label="Panda"
                  style={{ fontSize: '23px' }}
                >
                  {item.icon}
                </span>
                <Typography variant="body2" sx={{ paddingTop: 1, ml: 1 }}>
                  {item.label}
                </Typography>
              </Box>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    </>
  );
}
