/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';

import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { CardContent, IconButton, Box } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import DayScheduleButton from '../dashboard-component/DayScheduleButton';

const Weeks = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Set',
  'Oct',
  'Nov',
  'Dec'
];
const MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function init() {
  const date = new Date();
  const firstDate = getFirstDay(date.getFullYear(), date.getMonth());
  return firstDate;
}

function getDaybyWeek(year, month) {
  const monthCalendar = [];
  let day = 0;
  let monthday = MonthDays[month];
  const firstDay = getFirstDay(year, month).getDay();
  const startPos = firstDay - 1 < 0 ? 6 : firstDay - 1; // when first day of this month is Sunday.
  if (month === 1) monthday = year % 4 === 0 ? 29 : monthday; // in case of leap year
  const endPos = startPos + monthday - 1;

  for (let i = 0; i < 42; i += 1) {
    // the position of first day of this month.
    if (i < startPos) monthCalendar[i] = -1;
    else if (i > endPos) monthCalendar[i] = -1;
    else {
      day += 1;
      monthCalendar[i] = day;
    }
  }

  const res = [];
  for (let i = 0; i < 42; i += 7) {
    const row = [];
    for (let j = 0, k = i; j < 7; j += 1, k += 1) {
      row.push(monthCalendar[k]); // save by week.
    }
    res.push(row);
  }
  if (res[5][0] === -1) res.pop();
  return res;
}

function getCalendar(days, status, month, year) {
  console.log('STATUS:', status);
  const monthCalendar = [];
  days.map((weekdays) => {
    const weeks = [];
    for (const day of weekdays) {
      const dayObj = {};
      for (let i = 0; i < status.length; i += 1) {
        dayObj.day = day;
        if (day === i) {
          dayObj.year = year;
          dayObj.month = month;
          dayObj.day = day;
          dayObj.icon = status[i].icon;
          dayObj.halfday = status[i].halfday;
          dayObj.selected = false;
          break;
        }
      }
      weeks.push(dayObj);
    }
    monthCalendar.push(weeks);
  });
  return monthCalendar;
}

function getFirstDay(y, m) {
  return new Date(y, m, 1);
}

function getMonthNamebyNumber(month) {
  return Months[month];
}
CalendarCard.propTypes = {
  daystatus: PropTypes.array,
  viewDetailByClick: PropTypes.func
};

// styling conponent
const GridContainer = styled('div')(() => ({
  display: 'flex'
}));

const GridItem = styled('div')(() => ({
  flex: 1
}));

export default function CalendarCard({ daystatus, viewDetailByClick }) {
  const theme = useTheme();

  const [month, setMonth] = useState(init().getMonth());
  const [year, setYear] = useState(init().getFullYear());
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const monthData = daystatus;
    if (monthData.length > 0) {
      const days = getDaybyWeek(year, month);
      const calendarInfo = getCalendar(days, monthData[month], month, year);
      setCalendar(calendarInfo);
    }
  }, [daystatus, month, year]);

  const handleBackMonth = () => {
    let m = month - 1;
    let y = year;
    y = m < 0 ? year - 1 : year;
    m = m < 0 ? 11 : m;
    setYear(y);
    setMonth(m);
  };

  const handleNextMonth = () => {
    let m = month + 1;
    let y = year;
    y = m > 11 ? year + 1 : year;
    m = m > 11 ? 0 : m;
    setYear(y);
    setMonth(m);
  };

  const handleSelected = (selected, year, month, day) => {
    const agenda = calendar;
    calendar.map((weeks, wIndex) => {
      weeks.map((item, dIndex) => {
        agenda[wIndex][dIndex].selected = false;
        if (item.day === day) agenda[wIndex][dIndex].selected = selected;
      });
    });
    console.log('MMM:', calendar);
    setCalendar([...agenda]);
    viewDetailByClick(year, month, day);
  };

  return (
    <Card>
      <CardContent
        sx={{
          [theme.breakpoints.down('md')]: { padding: theme.spacing(3, 0.2) }
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <IconButton aria-label="delete" onClick={handleBackMonth}>
            <ArrowBackIosIcon fontSize="medium" />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {getMonthNamebyNumber(month)} {year}
          </Typography>
          <IconButton aria-label="delete" onClick={handleNextMonth}>
            <ArrowForwardIosIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Box m={3} />
        <Box sx={{ textAlign: 'center' }}>
          <GridContainer spacing={3}>
            {Weeks.map((week, index) => (
              <GridItem key={index}>
                <Typography variant="caption">{week}</Typography>
              </GridItem>
            ))}
          </GridContainer>
        </Box>
        <Box m={4} />
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          {calendar.map((weeks, wIndex) => (
            <GridContainer spacing={3} key={wIndex} sx={{ mb: 1 }}>
              {weeks.map((day, dIndex) => (
                <GridItem key={dIndex}>
                  {day.day > 0 && (
                    <DayScheduleButton
                      year={day.year}
                      month={day.month}
                      day={day.day}
                      icon={day.icon}
                      halfday={day.halfday}
                      Selection={handleSelected}
                      isSelected={day.selected}
                    />
                  )}
                </GridItem>
              ))}
            </GridContainer>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
