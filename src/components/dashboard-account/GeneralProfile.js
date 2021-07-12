/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  CardContent
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getOfficeList, getTeamList } from '../../redux/slices/adminSetting';
// hooks
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { UploadAvatar } from '../upload';
//
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';
// utils
// import { passwordError, emailError } from '../../utils/helpError';
// ----------------------------------------------------------------------
const initialOffices = [];
const initialTeams = [];

export default function AccountGeneral() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { updateProfile } = useAdmin();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { officeList, teamList } = useSelector((state) => state.adminSetting);

  const [offices, setOffices] = useState([]);
  const [officeIds, setOfficeIds] = useState([]);

  const [teams, setTeams] = useState([]);
  const [teamIds, setTeamIds] = useState([]);

  useEffect(() => {
    dispatch(getOfficeList());
    dispatch(getTeamList());
  }, [dispatch]);

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
    user.offices.map((office) => {
      initialOffices.push(Number(office));
    });
    setOfficeIds(initialOffices);

    user.teams.map((team) => {
      initialTeams.push(Number(team));
    });
    console.log(initialTeams);
    setTeamIds(initialTeams);
  }, [user]);

  const UpdateUserSchema = Yup.object().shape({
    firstname: Yup.string().required('FirstName is required'),
    lastname: Yup.string().required('LastName is required'),
    roles: Yup.string().required('Position is required')
  });

  const setStatusProps = (selectedIds) => {
    setOfficeIds(selectedIds);
  };

  const handleTeamSelected = (teamStatus) => {
    setTeamIds(teamStatus);
  };

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      photoURL: user.photoURL,
      roles: user.roles
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const officeId = officeIds;
        const teamId = teamIds;

        await updateProfile({ ...values, officeId, teamId });
        enqueueSnackbar('Update success', { variant: 'success' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      }
    }
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <Box
                sx={{
                  my: 10,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <UploadAvatar
                  disabled={user.email === 'demo@minimals.cc'} // You can remove this
                  value={values.photoURL}
                  onChange={(value) => setFieldValue('photoURL', value)}
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled={user.email === 'demo@minimals.cc'} // You can remove this
                      fullWidth
                      label="First Name"
                      {...getFieldProps('firstname')}
                      error={Boolean(touched.firstname && errors.firstname)}
                      helperText={touched.firstname && errors.firstname}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled={user.email === 'demo@minimals.cc'} // You can remove this
                      fullWidth
                      label="Last Name"
                      {...getFieldProps('lastname')}
                      error={Boolean(touched.lastname && errors.lastname)}
                      helperText={touched.lastname && errors.lastname}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      disabled
                      label="Email Address"
                      {...getFieldProps('email')}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Position"
                      {...getFieldProps('roles')}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mb: 5 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
                    Offices*
                  </Typography>
                  <DayStatusButtonGroup
                    officeInitProps={officeIds}
                    statusProps={setStatusProps}
                    officeGroups={offices}
                    isMulti
                    sx={{ textAlign: 'left !important' }}
                  />
                </Box>
                <Box sx={{ mb: 5 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
                    My Teams
                  </Typography>
                  <TeamCategoryGroup
                    teamInitProps={teamIds}
                    daygroups={teams}
                    teamStatusProps={handleTeamSelected}
                    sx={{ textAlign: 'left' }}
                  />
                </Box>
                <Box
                  sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
                >
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    pending={isSubmitting}
                  >
                    Save Changes
                  </LoadingButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
