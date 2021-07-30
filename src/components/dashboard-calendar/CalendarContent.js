/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
// material
import { useTheme } from '@material-ui/core/styles';

import { Container, Box } from '@material-ui/core';
// ----------------------------------------------------------------------
// hooks
import useGeneral from '../../hooks/useGeneral';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import {
  getCalendar,
  getAllStatusById,
  getUsersByCompany
} from '../../redux/slices/general';
import {
  getOfficeList,
  getTeamList,
  getOrganizations
} from '../../redux/slices/adminSetting';

import CalendarCard from './CalendarCard';
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

import RightSideBar from './RightSideBar';

export default function CalendarContent() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { updateSchedule } = useGeneral();
  const { officeList, teamList } = useSelector((state) => state.adminSetting);
  const { calendar, allStatus, allUsers } = useSelector(
    (state) => state.general
  );
  const { organizations } = useSelector((state) => state.adminSetting);

  const [teams, setTeams] = useState([]);
  const [teamIds, setTeamIds] = useState([]);

  const [offices, setOffices] = useState([]);
  const [officeIds, setOfficeIds] = useState(initialStatus);

  const [calendarProps, setCalendarProps] = useState([]);

  const [todayTitle, setTodayTitle] = useState('');

  // calendar setting
  const [cToday, setCToday] = useState({});
  const [schedule, setSchedule] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);
  const [allMembers, setAllMembers] = useState([]);

  // right side bar user setting
  const [scheduleUsers, setScheduleUsers] = useState([]);
  const [notStatusUsers, setNotStatusUsers] = useState([]);

  useEffect(() => {
    dispatch(getCalendar());
    dispatch(getOfficeList());
    dispatch(getTeamList());
    dispatch(getOrganizations());
    dispatch(getAllStatusById());
    dispatch(getUsersByCompany());
  }, [dispatch]);

  useEffect(() => {
    if (allStatus.length > 0) {
      setAllStatuses(allStatus);
    }
  }, [allStatus]);

  useEffect(() => {
    if (allUsers.length > 0) {
      setAllMembers(allUsers);
    }
  }, [allUsers]);

  useEffect(() => {
    const curr = new Date();
    const today = {
      year: curr.getFullYear(),
      month: curr.getMonth(),
      day: curr.getDate()
    };

    const dayOfweek =
      WeekListTitles[curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1];
    const tmpMonth = Months[curr.getMonth()];
    const tmpYear = curr.getFullYear();
    const tmpTodaytitle = `${dayOfweek} ${today.day} ${tmpMonth}. ${tmpYear}`;

    setTodayTitle(tmpTodaytitle);

    setCToday(today);
  }, []);

  useEffect(() => {
    if (calendar.length > 0) {
      const yearData = [];
      calendar.map((months, mIndex) => {
        const curr = new Date();
        curr.setMonth(mIndex);
        const thisMonth = months;

        const monthData = [];

        thisMonth.map((mDay, dIndex) => {
          curr.setDate(dIndex + 1);
          const dayListIndex = curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1;
          const dayObj = {
            id: dIndex + 1,
            weekTitle: `${WeekListTitles[dayListIndex]} ${
              Months[curr.getMonth()]
            } ${dIndex + 1}`,
            icon: mDay.icon,
            detail: {
              morning: { id: mDay.morning.id, type: mDay.morning.type },
              afternoon: { id: mDay.afternoon.id, type: mDay.afternoon.type }
            },
            halfday: mDay.isHalf,
            work: mDay.isWork
          };
          monthData.push(dayObj);
        });
        yearData.push(monthData);
      });

      setCalendarProps(yearData);
    }
  }, [calendar]);

  useEffect(() => {
    const OfficeStatus = [];
    officeList.map((office) => {
      const data = {
        id: office.id,
        label: office.name,
        icon: office.emoji
      };

      OfficeStatus.push(data);
    });

    const TeamStatus = [];
    teamList.map((team) => {
      const data = {
        id: team.id,
        label: team.name,
        color: team.color
      };

      TeamStatus.push(data);
    });

    setOffices([...OfficeStatus]);
    setTeams([...TeamStatus]);
  }, [officeList, teamList]);

  useEffect(() => {
    if (organizations.result !== undefined) {
      const { statuses } = organizations.result;

      const schedules = [];
      const { basicList, customList } = statuses;
      officeList.map((office) => {
        const rowObj = {
          id: office.id,
          type: 'office',
          emoji: office.emoji,
          title: office.name,
          capacity: office.capacity
        };
        schedules.push(rowObj);
      });

      basicList.map((basic) => {
        if (basic.isActive > 0) {
          const rowObj = {
            id: basic.id,
            type: 'basic',
            emoji: basic.emoji,
            title: basic.title
          };
          schedules.push(rowObj);
        }
      });

      customList.map((custom) => {
        if (custom.isActive > 0) {
          const rowObj = {
            id: custom.id,
            type: 'custom',
            emoji: custom.emoji,
            title: custom.title
          };
          schedules.push(rowObj);
        }
      });
      setSchedule(schedules);
    }
  }, [organizations, officeList]);

  useEffect(() => {
    const newData = [];
    allStatuses.map((status) => {
      const dData = status.schedule[cToday.month][cToday.day - 1];
      const rObj = {
        userId: status.userId,
        data: dData
      };
      newData.push(rObj);
    });

    const schArr = [];
    let notStatus = [];
    schedule.map((sche) => {
      const userArr = [];
      newData.map((user) => {
        if (user.data.isWork) {
          if (user.data.isHalf) {
            if (
              sche.id === user.data.morning.id &&
              sche.type === user.data.morning.type
            ) {
              userArr.push(user.userId);
            } else if (
              sche.id === user.data.afternoon.id &&
              sche.type === user.data.afternoon.type
            ) {
              userArr.push(user.userId);
            }
          } else if (!user.data.isHalf) {
            if (
              sche.id === user.data.morning.id &&
              sche.type === user.data.morning.type
            ) {
              userArr.push(user.userId);
            }
          }
        }
      });
      if (userArr.length > 0) {
        let schObj = {};
        if (sche.type === 'office') {
          const occupancy = (userArr.length / sche.capacity) * 100;
          schObj = {
            emoji: sche.emoji,
            schTitle: sche.title,
            users: userArr,
            type: 'office',
            capacity: sche.capacity,
            occupancy: parseInt(occupancy)
          };
        } else {
          schObj = {
            emoji: sche.emoji,
            schTitle: sche.title,
            users: userArr,
            type: 'status'
          };
        }
        schArr.push(schObj);
      }
    });

    newData.map((user) => {
      let isSet = false;
      schArr.map((sUser) => {
        for (let i = 0; i < sUser.users.length; i += 1) {
          if (user.userId === sUser.users[i]) {
            isSet = true;
            break;
          }
        }
      });
      if (!isSet) {
        notStatus.push(user.userId);
      }
    });

    const tmpSchArr = schArr;
    tmpSchArr.map((sche, sIndex) => {
      const updatedUsers = [];
      sche.users.map((userId) => {
        allMembers.map((member) => {
          if (userId === member.id) {
            const userObj = {
              id: userId,
              avatarURL: member.avatarURL,
              name: member.name
            };
            updatedUsers.push(userObj);
          }
        });
      });
      schArr[sIndex].users = updatedUsers;
    });

    if (notStatus.length > 0) {
      const tmpNotStatus = notStatus;
      const updatedUsers = [];
      tmpNotStatus.map((userId) => {
        allMembers.map((member) => {
          if (userId === member.id) {
            const userObj = {
              id: userId,
              avatarURL: member.avatarURL,
              name: member.name
            };
            updatedUsers.push(userObj);
          }
        });
      });
      notStatus = updatedUsers;
      setNotStatusUsers(notStatus);
    } else {
      setNotStatusUsers([]);
    }

    setScheduleUsers(schArr);
  }, [allStatuses, cToday, allMembers]);

  const setStatusProps = (selectedIds) => {
    setOfficeIds(selectedIds);
  };

  const handleTeamSelected = (teamStatus) => {
    setTeamIds(teamStatus);
  };

  const handleClickShowDetail = (year, month, day) => {
    dispatch(getAllStatusById());
    const today = {
      year,
      month,
      day
    };
    setCToday(today);

    const curr = new Date();
    curr.setMonth(month);
    curr.setDate(day);
    const dayOfweek =
      WeekListTitles[curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1];
    const tmpMonth = Months[curr.getMonth()];
    const tmpYear = curr.getFullYear();
    const tmpTodaytitle = `${dayOfweek} ${day} ${tmpMonth}. ${tmpYear}`;

    setTodayTitle(tmpTodaytitle);
  };

  // change icon when set icon in schedule card
  const changeIcon = (icon1, icon2, detail1, detail2, status, month, day) => {
    let emoji1 = '';
    let emoji2 = '';
    let resIcon = '';
    schedule.map((item, i) => {
      if (i === icon1) emoji1 = item.emoji;
      if (i === icon2) emoji2 = item.emoji;
    });
    let dayStatus = status;
    if (icon1 === icon2) dayStatus = false;
    resIcon = dayStatus ? `${emoji1}${emoji2}` : emoji1;
    const CalendarSchedule = calendarProps;
    let settingDay = 0;
    calendarProps.map((months, mIndex) => {
      months.map((schedule, sIndex) => {
        if (mIndex === month && schedule.id === day) {
          CalendarSchedule[mIndex][sIndex].icon = resIcon;
          CalendarSchedule[mIndex][sIndex].halfday = dayStatus;
          CalendarSchedule[mIndex][sIndex].work = true;
          CalendarSchedule[mIndex][sIndex].detail.morning.id = detail1.id;
          CalendarSchedule[mIndex][sIndex].detail.morning.type = detail1.type;
          settingDay = sIndex;
        }
      });
    });

    const updatedSchedule = {
      month,
      day: settingDay,
      emoji: resIcon,
      morning: detail1,
      afternoon: detail2,
      isHalf: dayStatus,
      isWork: true
    };

    updateSchedule({ updatedSchedule }).then(() => {
      dispatch(getAllStatusById());
    });
    setCalendarProps([...CalendarSchedule]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="xl">
        <Container
          maxWidth="md"
          sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
        >
          <DayStatusButtonGroup
            officeInitProps={officeIds}
            statusProps={setStatusProps}
            officeGroups={offices}
            isMulti={false}
          />
          <TeamCategoryGroup
            teamInitProps={teamIds}
            daygroups={teams}
            teamStatusProps={handleTeamSelected}
          />
          <CalendarCard
            officeFilterId={officeIds[0]}
            allStatuses={allStatuses}
            schedule={schedule}
            daystatus={calendarProps}
            viewDetailByClick={handleClickShowDetail}
          />
        </Container>
      </Container>
      <RightSideBar
        todayTitle={todayTitle}
        daystatus={calendarProps}
        schedule={schedule}
        iconProps={changeIcon}
        cToday={cToday}
        scheduleUsers={scheduleUsers}
        notStatusUsers={notStatusUsers}
      />
    </Box>
  );
}

const initialStatus = [1];
const WeekListTitles = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

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
