import * as Yup from 'yup';
// import { useSnackbar } from 'notistack';
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
// hooks
// import useAuth from '../../../hooks/useAuth';
// import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { UploadAvatar } from '../upload';
//
import DayStatusButtonGroup from '../dashboard-component/DayStatusButtonGroup';
import TeamCategoryGroup from '../dashboard-component/TeamCategoryGroup';

// ----------------------------------------------------------------------

const user = {
  firstName: 'Alexander',
  lastName: 'Ryndin',
  email: 'ryndinalex112@gmail.com',
  photoURL: '/static/dashboard/home/2.jpg',
  position: 'CEO'
};

const DayCategories = [
  {
    id: 0,
    label: 'swiss-office',
    icon: '💼'
  },
  {
    id: 1,
    label: 'At Home',
    icon: '🏡'
  },
  {
    id: 2,
    label: 'With Family',
    icon: '👨‍👨‍👦‍👦'
  },
  {
    id: 3,
    label: 'On the go',
    icon: '🚶‍♂️'
  },
  {
    id: 4,
    label: 'Not working',
    icon: '🏝'
  }
];

const TeamCategories = [
  {
    id: 0,
    label: 'Web Team'
  },
  {
    id: 1,
    label: 'Design Team'
  },
  {
    id: 2,
    label: 'Backend Team'
  }
];
export default function AccountGeneral() {
  // const isMountedRef = useIsMountedRef();
  // const { enqueueSnackbar } = useSnackbar();
  // const { user, updateProfile } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName is required'),
    lastName: Yup.string().required('LastName is required'),
    position: Yup.string().required('Position is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      photoURL: user.photoURL,
      position: user.position
    },

    validationSchema: UpdateUserSchema
    // onSubmit: async (values, { setErrors, setSubmitting }) => {
    //   try {
    //     await updateProfile({ ...values });
    //     enqueueSnackbar('Update success', { variant: 'success' });
    //     if (isMountedRef.current) {
    //       setSubmitting(false);
    //     }
    //   } catch (error) {
    //     if (isMountedRef.current) {
    //       setErrors({ afterSubmit: error.code });
    //       setSubmitting(false);
    //     }
    //   }
    // }
  });

  const {
    values,
    // errors,
    // touched,
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
                      {...getFieldProps('firstName')}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled={user.email === 'demo@minimals.cc'} // You can remove this
                      fullWidth
                      label="Last Name"
                      {...getFieldProps('lastName')}
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
                      {...getFieldProps('position')}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mb: 5 }} />
                <Box>
                  <Typography variant="subtitle1">Offices*</Typography>
                  <DayStatusButtonGroup
                    daygroups={DayCategories}
                    isMulti
                    sx={{ textAlign: 'left !important' }}
                  />
                </Box>
                <Box sx={{ mb: 5 }} />
                <Box>
                  <Typography variant="subtitle1">My Teams</Typography>
                  <TeamCategoryGroup
                    daygroups={TeamCategories}
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
