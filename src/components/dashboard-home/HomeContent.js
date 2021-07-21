/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
// material
import {
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';

import { Container, Typography, Box, useMediaQuery } from '@material-ui/core';
// ----------------------------------------------------------------------

import WeekScheduleCard from './WeekScheduleCard';
import WeekList from './WeekList';
import RightSideBar from './RightSideBar';
import MobileViewDetail from './MobileViewDetail';
import MobileWeekView from './MobileWeekView';

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
  getOrganizations
} from '../../redux/slices/adminSetting';

const SpaceStyle = styled('div')(({ theme }) => ({
  height: theme.spacing(4)
}));

const Weeks = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
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

const reverseMonths = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Set: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};

export default function HomeContent() {
  const theme = useTheme();
  const { updateSchedule } = useGeneral();
  const dispatch = useDispatch();
  const { calendar, allStatus, allUsers } = useSelector(
    (state) => state.general
  );
  const { officeList, organizations } = useSelector(
    (state) => state.adminSetting
  );

  const [thisWeekSchedule, setThisWeekSchedule] = useState([]);
  const [thisWeekTitle, setThisWeekTitle] = useState('');
  const [todayTitle, setTodayTitle] = useState('');
  const [dayofweek, setDayOfWeek] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [statusTitle, setStatusTitle] = useState('');
  const [allStatuses, setAllStatuses] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [cMonth, setCMonth] = useState(0);
  const [cToday, setCToday] = useState(0);

  // right side bar user setting
  const [scheduleUsers, setScheduleUsers] = useState([]);
  const [notStatusUsers, setNotStatusUsers] = useState([]);

  // detail dialog
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  useEffect(() => {
    dispatch(getCalendar());
    dispatch(getOrganizations());
    dispatch(getOfficeList());
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
    if (calendar.length > 0) {
      const curr = new Date();
      const thisMonth = calendar[curr.getMonth()];
      const beforeMonth = calendar[curr.getMonth() - 1];
      const nextMonth = calendar[curr.getMonth() + 1];

      setCMonth(curr.getMonth());

      const today = curr.getDate();

      const dayOfweek =
        WeekListTitles[curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1];
      const tmpMonth = Months[curr.getMonth()];
      const tmpYear = curr.getFullYear();
      const tmpTodaytitle = `${dayOfweek} ${today} ${tmpMonth}. ${tmpYear}`;

      setDayOfWeek(curr.getDay() - 1);
      setTodayTitle(tmpTodaytitle);

      const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      const last = first + 6; // last day is the first day + 6

      const firstday = new Date(curr.setDate(first)).getDate();
      const lastday = new Date(curr.setDate(last)).getDate();
      const thisWeekSchedules = [];
      // const NextWeekSchedules = [];

      if (firstday < lastday) {
        let weekCount = 0;
        const title = `${Months[curr.getMonth()]} ${firstday + 1} - ${
          Months[curr.getMonth()]
        } ${lastday - 1}`;
        setThisWeekTitle(title);
        thisMonth.map((mDay, mIndex) => {
          if (firstday < mIndex && mIndex < lastday) {
            const dayObj = {
              id: mIndex,
              weekday: `${Weeks[weekCount]} ${mIndex}`,
              weekTitle: `${WeekListTitles[weekCount]} ${
                Months[curr.getMonth()]
              } ${mIndex}`,
              icon: mDay.icon,
              detail: {
                morning: { id: mDay.morning.id, type: mDay.morning.type },
                afternoon: { id: mDay.afternoon.id, type: mDay.afternoon.type }
              },
              halfday: mDay.isHalf,
              work: mDay.isWork
            };
            thisWeekSchedules.push(dayObj);
            weekCount += 1;
          }
        });
      } else {
        let weekCount = 0;
        if (today > 25) {
          const title = `${Months[curr.getMonth()]} ${firstday + 1} - ${
            Months[curr.getMonth() + 1]
          } ${lastday - 1}`;
          setThisWeekTitle(title);
          thisMonth.map((mDay, mIndex) => {
            if (firstday < mIndex + 1) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth()]
                } ${mIndex}`,
                icon: mDay.icon,
                detail: {
                  morning: { id: mDay.morning.id, type: mDay.morning.type },
                  afternoon: {
                    id: mDay.afternoon.id,
                    type: mDay.afternoon.type
                  }
                },
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
          nextMonth.map((mDay, mIndex) => {
            if (lastday - 1 > mIndex) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth() + 1]
                } ${mIndex}`,
                icon: mDay.icon,
                detail: {
                  morning: { id: mDay.morning.id, type: mDay.morning.type },
                  afternoon: {
                    id: mDay.afternoon.id,
                    type: mDay.afternoon.type
                  }
                },
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
        } else if (today < 5) {
          const title = `${Months[curr.getMonth() - 1]} ${firstday + 1} - ${
            Months[curr.getMonth()]
          } ${lastday - 1}`;
          setThisWeekTitle(title);
          beforeMonth.map((mDay, mIndex) => {
            if (firstday < mIndex + 1) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth() - 1]
                } ${mIndex}`,
                icon: mDay.icon,
                detail: {
                  morning: { id: mDay.morning.id, type: mDay.morning.type },
                  afternoon: {
                    id: mDay.afternoon.id,
                    type: mDay.afternoon.type
                  }
                },
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
          thisMonth.map((mDay, mIndex) => {
            if (lastday - 1 > mIndex) {
              const dayObj = {
                id: mIndex + 1,
                weekday: `${Weeks[weekCount]} ${mIndex + 1}`,
                weekTitle: `${WeekListTitles[weekCount]} ${
                  Months[curr.getMonth()]
                } ${mIndex}`,
                icon: mDay.icon,
                detail: {
                  morning: { id: mDay.morning.id, type: mDay.morning.type },
                  afternoon: {
                    id: mDay.afternoon.id,
                    type: mDay.afternoon.type
                  }
                },
                halfday: mDay.isHalf,
                work: mDay.isWork
              };
              thisWeekSchedules.push(dayObj);
              weekCount += 1;
            }
          });
        }
      }
      console.log('TWS:', thisWeekSchedules);
      setThisWeekSchedule(thisWeekSchedules);
    }
  }, [calendar]);

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

  // useEffect(() => {
  //   console.log('Changed:', thisWeekSchedule);
  //   thisWeekSchedule.map((day, dIndex) => {
  //     if (dayofweek === dIndex) {
  //       console.log('DAYOFWORK:', dayofweek, dIndex);
  //       schedule.map((sche) => {
  //         if (
  //           sche.id === day.detail.morning.id &&
  //           sche.type === day.detail.morning.type
  //         ) {
  //           console.log('SCHE:', sche.title);
  //           setStatusTitle(sche.title);
  //         }
  //       });
  //     }
  //   });
  // }, [thisWeekSchedule]);

  useEffect(() => {
    const newData = [];
    console.log('C_TODAY:', cMonth, cToday);
    allStatuses.map((status) => {
      const dData = status.schedule[cMonth][cToday];
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

  // change icon when set icon in schedule card
  const changeIcon = (icon1, icon2, detail1, detail2, status, index) => {
    console.log('This function is called by click', index);
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
    const ThisWeekSchedule = thisWeekSchedule;
    let settingDay = 0;
    let weekTitle = '';
    thisWeekSchedule.map((schedule, sIndex) => {
      if (sIndex === index) {
        console.log('SCHEDULE:', schedule);
        ThisWeekSchedule[sIndex].icon = resIcon;
        ThisWeekSchedule[sIndex].halfday = dayStatus;
        ThisWeekSchedule[sIndex].work = true;
        ThisWeekSchedule[sIndex].detail.morning.id = detail1.id;
        ThisWeekSchedule[sIndex].detail.morning.type = detail1.type;
        settingDay = ThisWeekSchedule[sIndex].id;
        weekTitle = ThisWeekSchedule[sIndex].weekTitle;
      }
    });

    const monthText = weekTitle.split(' ')[1];
    console.log('This is weekTitle', weekTitle);
    const month = reverseMonths[monthText];

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
    console.log([...ThisWeekSchedule], cToday, 'llll');
    setThisWeekSchedule([...ThisWeekSchedule]);
  };

  const handleClickShowDetail = (day) => {
    dispatch(getAllStatusById());
    setCToday(day);

    const curr = new Date();
    curr.setDate(day);
    const dayOfweek =
      WeekListTitles[curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1];
    const tmpMonth = Months[curr.getMonth()];
    const tmpYear = curr.getFullYear();
    const tmpTodaytitle = `${dayOfweek} ${day} ${tmpMonth}. ${tmpYear}`;

    setDayOfWeek(curr.getDay() - 1);
    setTodayTitle(tmpTodaytitle);
    setShowMobileDetail(true);
  };

  const handleClickShowMobileDetail = (day) => {
    dispatch(getAllStatusById());
    setCToday(day);

    const curr = new Date();
    curr.setDate(day);
    const dayOfweek =
      WeekListTitles[curr.getDay() - 1 < 0 ? 6 : curr.getDay() - 1];
    const tmpMonth = Months[curr.getMonth()];
    const tmpYear = curr.getFullYear();
    const tmpTodaytitle = `${dayOfweek} ${day} ${tmpMonth}. ${tmpYear}`;

    setDayOfWeek(curr.getDay() - 1);
    setTodayTitle(tmpTodaytitle);
  };

  const handleShowMobileDetail = (isView) => {
    setShowMobileDetail(isView);
  };

  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          paragraph
          sx={{ textAlign: 'center' }}
        >
          Welcome to Thimble
        </Typography>
        <Container
          maxWidth="md"
          sx={{ [theme.breakpoints.down('md')]: { px: 0 } }}
        >
          <WeekScheduleCard
            title="This Week "
            period={thisWeekTitle}
            daystatus={thisWeekSchedule}
            schedule={schedule}
            iconProps={changeIcon}
          />
          <SpaceStyle />
          <WeekList
            daystatus={thisWeekSchedule}
            dayIndex={dayofweek}
            showDetail={handleClickShowDetail}
          />
          <SpaceStyle />
          <WeekScheduleCard
            title="Next Week "
            period="Jun 28 - July 2"
            daystatus={NextWeekSchedule}
            schedule={schedule}
            iconProps={changeIcon}
          />
          <SpaceStyle />
          <WeekList daystatus={NextWeekList} />
        </Container>
      </Container>
      <RightSideBar
        todayTitle={todayTitle}
        daystatus={thisWeekSchedule}
        schedule={schedule}
        iconProps={changeIcon}
        dayIndex={dayofweek}
        statusTitle={statusTitle}
        scheduleUsers={scheduleUsers}
        notStatusUsers={notStatusUsers}
      />
      {showMobileDetail && !upLg && (
        <>
          <MobileViewDetail
            todayTitle={todayTitle}
            daystatus={thisWeekSchedule}
            schedule={schedule}
            iconProps={changeIcon}
            dayIndex={dayofweek}
            statusTitle={statusTitle}
            scheduleUsers={scheduleUsers}
            notStatusUsers={notStatusUsers}
            showDetail={handleShowMobileDetail}
          />
          <MobileWeekView
            daystatus={thisWeekSchedule}
            dayIndex={dayofweek}
            showDetail={handleClickShowMobileDetail}
          />
        </>
      )}
    </Box>
  );
}

const NextWeekSchedule = [
  {
    id: 0,
    weekday: 'Mon 28',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 1,
    weekday: 'Tue 29',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wed 30',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 3,
    weekday: 'Thu 1',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Fri 2',
    icon: '?',
    halfday: false,
    work: false
  }
];

const NextWeekList = [
  {
    id: 0,
    weekday: 'Monday Jun 28',
    icon: '👨‍👨‍👦‍👦',
    halfday: false,
    work: true
  },
  {
    id: 1,
    weekday: 'Tuesday Jun 29',
    icon: '🚶‍♂️🏝',
    halfday: true,
    work: true
  },
  {
    id: 2,
    weekday: 'Wednesday Jun 30',
    icon: '🤒🏡',
    halfday: true,
    work: true
  },
  {
    id: 3,
    weekday: 'Thuesday July 1',
    icon: '💼🚶‍♂️',
    halfday: true,
    work: true
  },
  {
    id: 4,
    weekday: 'Friday July 2',
    icon: '?',
    halfday: false,
    work: false
  }
];
