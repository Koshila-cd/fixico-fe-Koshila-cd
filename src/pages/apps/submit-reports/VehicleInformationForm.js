import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { DateField } from '@mui/x-date-pickers/DateField';

import { Controller, useFormContext } from "react-hook-form";

function VehicleInformationForm() {

  //react hook form
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle Information
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Controller
            name="vehicleType"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="vehicleType"
                label="Type of Vehicle"
                variant="standard"
                fullWidth
                error={!!errors.vehicleType}
                helperText={errors?.vehicleType?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="damageDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="damageDate"
                label="Date of Damage"
                variant="standard"
                fullWidth
                error={!!errors.damageDate}
                helperText={errors?.damageDate?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="damageLocation"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="damageLocation"
                label="Location of Damage"
                variant="standard"
                fullWidth
                error={!!errors.damageLocation}
                helperText={errors?.damageLocation?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} >
          <Controller
            name="licenceNo"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="licenceNo"
                label="Vehicle License Number"
                variant="standard"
                fullWidth
                error={!!errors.licenceNo}
                helperText={errors?.licenceNo?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="vehicleMake"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="vehicleMake"
                label="Vehicle Make"
                variant="standard"
                fullWidth
                error={!!errors.vehicleMake}
                helperText={errors?.vehicleMake?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="vehicleModel"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="vehicleModel"
                label="Vehicle Model"
                variant="standard"
                fullWidth
                error={!!errors.vehicleModel}
                helperText={errors?.vehicleModel?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default VehicleInformationForm;