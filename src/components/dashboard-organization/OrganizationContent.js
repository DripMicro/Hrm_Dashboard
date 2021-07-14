import React, { useState, useEffect } from 'react';
// material
import { Grid, Box } from '@material-ui/core';
// ----------------------------------------------------------------------
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getOrganizations } from '../../redux/slices/adminSetting';

import AlertTrialCard from './AlertTrialCard';
import CompanyCard from './CompanyCard';
import CalendarCard from './CalendarCard';
import FeaturesCard from './FeaturesCard';
import IntegrationCard from './IntegrationCard';
import StatusesCard from './StatusesCard';
import SaveChanges from './SaveChanges';

// const initialSetting = {
//   company: {
//     name: 'ITDevelopOPS',
//     domain: '@startup.com',
//     isEmail: 0,
//     isGoogleSignIn: 1
//   },
//   calendar: {
//     startingDay: 1,
//     workDays: [1, 2, 4],
//     monthRange: 3
//   },
//   features: {
//     isHalfDays: 1,
//     isCities: 0
//   },
//   statuses: {
//     basicList: [
//       {
//         id: 1,
//         emoji: '🏡',
//         title: 'From home',
//         description: 'Remote (works with Cities feature)',
//         isActive: 1
//       },
//       {
//         id: 2,
//         emoji: '🚶‍♂️',
//         title: 'On the go',
//         description: 'On the go / Out of the office',
//         isActive: 1
//       },
//       {
//         id: 3,
//         emoji: '🏝',
//         title: 'Not working',
//         description: 'Holiday / Not working',
//         isActive: 0
//       },
//       {
//         id: 4,
//         emoji: '🤒',
//         title: 'Sick',
//         description: 'Sick days (merged with "Not working")',
//         isActive: 1
//       }
//     ],
//     customList: [
//       {
//         id: 1,
//         emoji: '🙂',
//         title: 'Custom 1',
//         isActive: 1
//       }
//     ]
//   }
// };

export default function OrganizationContent() {
  const dispatch = useDispatch();
  const { organizations } = useSelector((state) => state.adminSetting);

  const [organization, setOrganization] = useState({});
  const [company, setCompany] = useState({});
  const [calendar, setCalendar] = useState({});
  const [features, setFeatures] = useState({});
  const [statuses, setStatuses] = useState({});
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    dispatch(getOrganizations());
  }, [dispatch]);

  useEffect(() => {
    const { result } = organizations;
    console.log(result);
    if (result !== undefined) {
      setCompany(result.company);
      setCalendar(result.calendar);
      setFeatures(result.features);
      setStatuses(result.statuses);
      setOrganization(result);
    }
  }, [organizations]);

  useEffect(() => {
    setIsSave(true);
  }, [organization]);

  const handleCompanySetting = (companySetting) => {
    setOrganization({
      ...organization,
      company: companySetting
    });
  };

  const handleCalendarSetting = (calendarSetting) => {
    setOrganization({
      ...organization,
      calendar: calendarSetting
    });
  };

  const handleFeatureSetting = (featuresSetting) => {
    setOrganization({
      ...organization,
      features: featuresSetting
    });
  };

  const handleStatusSetting = (statusSetting) => {
    setOrganization({
      ...organization,
      statuses: statusSetting
    });
  };

  const handleViewSaveChanges = (isCancel) => {
    setIsSave(!isCancel);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AlertTrialCard />
      </Grid>
      <Grid item md={6} xs={12}>
        <CompanyCard
          dataProps={company}
          setCompanyProps={handleCompanySetting}
        />
        <Box m={3} />
        <IntegrationCard />
      </Grid>
      <Grid item md={6} xs={12}>
        <CalendarCard
          dataProps={calendar}
          setCalendarProps={handleCalendarSetting}
        />
        <Box m={3} />
        <FeaturesCard
          dataProps={features}
          setFeatureProps={handleFeatureSetting}
        />
        <Box m={3} />
        <StatusesCard
          dataProps={statuses}
          setStatusProps={handleStatusSetting}
        />
      </Grid>
      {isSave && (
        <SaveChanges
          setCancelProps={handleViewSaveChanges}
          saveDataProps={organization}
        />
      )}
    </Grid>
  );
}
