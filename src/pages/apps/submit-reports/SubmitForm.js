import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VehicleInformationForm from './VehicleInformationForm';
import UploadPhotoForm from './UploadPhotoForm';
import CustomerInformationForm from './CustomerInformationForm';
import { FormProvider, useForm } from 'react-hook-form';
import _ from 'lodash';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import submit from '../../api/submit';
import ViewReport from '../view-reports/viewReport';
import Header from '../header/header';
// import upload from '../../api/upload';

const steps = ['Vehicle information', 'Upload photo', 'Customer information'];

  /**
   * Constant: Yup schema objects defining all Field validations which is then passed to Yup Resolver.
   */
const vehicleInforSchema = Yup.object().shape({
  vehicleBrand: Yup.string().required("Brand of Vehicle is required"),
  vehicleModel: Yup.string().required("Model of Vehicle is required"),
  damageDate: Yup.string().required("Date of Damage is required"),
  damageLocation: Yup.string().required("Location of Damage is required"),
  licenceNo: Yup.string().required("Vehicle License Number is required"),
});

const uploadPhotoSchema = Yup.object().shape({
  damageDescription: Yup.string().required("Description is required"),
});

const custormerInforSchema = Yup.object().shape({
  driverName: Yup.string().required("Driver's Full Name is required"),
  drivingLicense: Yup.string().required("Driving License is required")
});

  /**
   * Function: A switch-case to toggle forms.
   */
function getStepContent(step) {
  switch (step) {
    case 0:
      return <VehicleInformationForm />;
    case 1:
      return <UploadPhotoForm />;
    case 2:
      return <CustomerInformationForm />;
    default:
      throw new Error('Unknown step');
  }
}

 /**
   * Constant: Theme defined for the page.
   */
const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

  /**
   * Submit Form Component: Values of all forms are collected through useForm() methods, 'Submit' and 'Next' button validations, Submit Form data, Upload Image.
   */
function SubmitForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  // forms and validation
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(activeStep == 0 ? vehicleInforSchema : activeStep == 1 ? uploadPhotoSchema : custormerInforSchema),
  });
  const { formState, getValues } = methods;
  const { isValid, dirtyFields } = formState;

  // button handling
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitBtn = () => {
    setActiveStep(activeStep + 1);
    const data = getValues();
    console.log(data);
    handleSubmit(data)
  }

  /**
   * Form Submit
   */
  const handleSubmit = async (payload) => {

    // submit form
    const submitResponse = await fetch(submit, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    });
    
    const data = await submitResponse.json();
    console.log(data.uuid); // Log the uuid returned by the server

    // upload image
    const uploadPhotoResponse = await fetch('upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload.damagePhoto
    });

    const data2 = await uploadPhotoResponse.json();
    console.log(data2.uuid); // Log the uuid returned by the server
  };

  // View report handler
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={"Submit Vehicle Damage Report"} variant={"h6"} />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you.
                </Typography>
                <Typography variant="subtitle1">
                  Your sumission will be processed by Fixico.<Button onClick={handleClickOpen}>See your report</Button>
                  <ViewReport setOpen={setOpen} open={open} report={getValues()} />
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href='/apps/home/Home'
                  sx={{ mt: 3, ml: 1 }}
                >
                  Back to Home
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmitBtn}
                      disabled={_.isEmpty(dirtyFields) || !isValid}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      disabled={_.isEmpty(dirtyFields) || !isValid}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}

                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </ThemeProvider>
    </FormProvider>
  );
}

export default SubmitForm;
