import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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
                helperText={errors ? errors?.driverName?.message : "Please provide Drivers Full Name with initials"}
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
                helperText={errors?.drivingLicense?.message}
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
                helperText="Please provide Witnesses Full Name with initials"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomerInformationForm;
