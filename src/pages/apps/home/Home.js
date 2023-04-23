import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../header/header';

const steps = ['Vehicle information', 'Upload photo', 'Customer information'];

const theme = createTheme({
    typography: {
      fontFamily: [
        '"Segoe UI"',
      ].join(','),
    },
    palette: {
        black: '#F40B27',
      }
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
      <Header title="Vehicle Damage Report Submission Application" variant="h5" page="home" />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <React.Fragment>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href='/apps/submit-reports/SubmitForm'
                  sx={{ fontSize:20, mt: 3, ml: 1, pl: 5, pr: 5, pt: 3, pb: 3, width: '70%' }}
                >
                  Submit Damage Report
                </Button>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href='/apps/view-reports/ViewReports'
                  sx={{ fontSize:20, mt: 3, ml: 1, pl: 5, pr: 5, pt: 3, pb: 3, width: '70%' }}
                >
                  View Reports
                </Button>
              </Box>
            </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
