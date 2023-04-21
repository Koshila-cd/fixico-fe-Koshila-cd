import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

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
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer Information
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <TextField
            required
            id="driverName"
            name="driverName"
            label="Drivers Full Name"
            fullWidth
            helperText="Please provide Drivers Full Name with initials"
            autoComplete="Vehicle information-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="drivingLicense"
            name="drivingLicense"
            label="Driving License Number"
            fullWidth
            autoComplete="Vehicle information-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="witnessName"
            name="witnessName"
            label="Witness Full Name"
            helperText="Please provide Witnesses Full Name with initials"
            fullWidth
            autoComplete="Vehicle information-level2"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} >
          <TextField
            required
            id="licenceNo"
            name="licenceNo"
            label="Vehicle License Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicleMake"
            name="vehicleMake"
            label="Vehicle Make"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicleModel"
            name="vehicleMake"
            label="Vehicle Model"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default CustomerInformationForm;