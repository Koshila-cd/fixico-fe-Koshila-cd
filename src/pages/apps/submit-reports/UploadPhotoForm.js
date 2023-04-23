import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, CircularProgress } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function UploadPhotoForm() {
  const [isUploading, setIsUploading] = React.useState(false);

  //react hook form
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Photo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {isUploading ? (
              <CircularProgress color="primary" />
            ) : (
              <div>
                <label htmlFor="button-file" className="flex p-8 cursor-pointer">
                  <Controller
                    name="damagePhoto"
                    control={control}
                    render={({ field }) => (
                      <Button>
                        <input
                          {...field}
                          accept="image/*"
                          className="hidden"
                          id="damagePhoto"
                          type="file"
                          fullWidth
                        />
                      </Button>
                    )}
                  />
                </label>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="damageDescription"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                id="damageDescription"
                label="Please Describe the Damage briefly"
                variant="standard"
                fullWidth
                error={!!errors.damageDescription}
                helperText={errors?.damageDescription?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UploadPhotoForm;
