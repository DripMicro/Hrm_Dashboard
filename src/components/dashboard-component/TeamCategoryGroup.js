import PropTypes from 'prop-types';

import React from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { Typography } from '@material-ui/core';

TeamCategoryGroup.propTypes = {
  daygroups: PropTypes.array,
  sx: PropTypes.object
};

export default function TeamCategoryGroup({ daygroups, sx }) {
  const [categories, setCategories] = React.useState([]);

  const handleCategories = (event, newCategories) => {
    setCategories(newCategories);
  };

  return (
    <ToggleButtonGroup
      value={categories}
      onChange={handleCategories}
      aria-label="team category"
      sx={{ display: 'block', textAlign: 'center', mb: 3, ...sx }}
    >
      {daygroups.map((item) => (
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
              color: 'white',
              fontWeight: 700,
              backgroundColor: '#00AB55'
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'rgb(87 175 105)'
            }
          }}
        >
          <Typography variant="body2">{item.label}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
