import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VehicleInformationForm from './VehicleInformationForm';
import UploadPhotoForm from './UploadPhotoForm';
import CustomerInformationForm from './CustomerInformationForm';
import { ChevronLeftIcon } from '@heroicons/react/solid';

const steps = ['Vehicle information', 'Upload photo', 'Customer information'];

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

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

export default function SubmitForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Button href='/apps/home/Home'>
            <ChevronLeftIcon className="" />
          </Button>
          <Typography variant="h6" color="inherit" >
            Submit Vehicle Damage Report
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography> */}
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
                Your sumission will be processed by Fixico. <a href=''>See your report</a>
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

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}