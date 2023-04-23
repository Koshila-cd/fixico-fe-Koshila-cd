import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Controller, useForm, useFormContext } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { vehicles } from '../../../vechilces';

function VehicleInformationForm() {

  //react hook form
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  const vehicleBrands = vehicles;

  const [selectedBrand, setSelectedBrand] = React.useState("");

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle Information
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Controller
            name="vehicleBrand"
            control={control}
            render={({ field }) => (
              <FormControl variant="standard" fullWidth>
                <InputLabel id="vehicleBrand-label">Brand of Vehicle</InputLabel>
                <Select
                  {...field}
                  labelId="vehicleBrand-label"
                  id="vehicleBrand"
                  required
                  error={!!errors.vehicleBrand}
                  helpertext={errors?.vehicleBrand?.message}
                  onChange={(e) => {
                    const selectedBrandName = e.target.value;
                    const selectedBrand = vehicleBrands.find((brand) => brand.name === selectedBrandName);
                    setSelectedBrand(selectedBrand);
                    field.onChange(selectedBrandName);
                  }}
                >
                  {vehicleBrands && vehicleBrands.map((brand) => (
                    <MenuItem key={brand.id} value={brand.name}>
                      {brand.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="vehicleModel"
            control={control}
            render={({ field }) => (
              <FormControl variant="standard" fullWidth>
                <InputLabel id="vehicleModel-label">Model of Vehicle</InputLabel>
                <Select
                  {...field}
                  labelId="vehicleModel-label"
                  id="vehicleModel"
                  required
                  error={!!errors.vehicleModel}
                  helpertext={errors?.vehicleModel?.message}
                >
                  {selectedBrand ? (
                    selectedBrand.models.map((model) => (
                      <MenuItem key={model.id} value={model.name}>
                        {model.name}
                      </MenuItem>
                    ))) :
                    (
                      <MenuItem disabled >
                        Please select a Brand of Vehicle
                      </MenuItem>
                    )

                  }
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
                helpertext={errors?.licenceNo?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
                helpertext={errors?.damageDate?.message}
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
                helpertext={errors?.damageLocation?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default VehicleInformationForm;
