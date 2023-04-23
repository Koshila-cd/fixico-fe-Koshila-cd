import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

  /**
   * CustomerInformationForm Component where all customer related input fields are available in a Grid view.
   */
function CustomerInformationForm() {

  //react hook form
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="driverName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="driverName"
                label="Drivers Full Name"
                variant="standard"
                fullWidth
                error={!!errors.driverName}
                helpertext={errors ? errors?.driverName?.message : "Please provide Drivers Full Name with initials"}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="drivingLicense"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="drivingLicense"
                label="Driving License Number"
                variant="standard"
                fullWidth
                error={!!errors.drivingLicense}
                helpertext={errors?.drivingLicense?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="witnessName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="witnessName"
                label="Witness Full Name"
                variant="standard"
                fullWidth
                helpertext="Please provide Witnesses Full Name with initials"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomerInformationForm;
