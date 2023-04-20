import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { DateField } from '@mui/x-date-pickers/DateField';

function VehicleInformationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle information
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicleType"
            name="vehicleType"
            label="Type of Vehicle"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="vehicleType"
            name="vehicleType"
            label="Type of Vehicle"
            fullWidth
            autoComplete="Vehicle information-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="damageDate"
            name="damageDate"
            label="Date of Damage"
            fullWidth
            autoComplete="Vehicle information-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="damageLocation"
            name="damageLocation"
            label="Location of Damage"
            fullWidth
            autoComplete="Vehicle information-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="licenceNo"
            name="licenceNo"
            label="Vehicle License Number"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default VehicleInformationForm;