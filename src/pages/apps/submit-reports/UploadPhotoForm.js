import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

  /**
   * UploadPhotoForm Component: All upload photo related input fields are available in a Grid view.
   */
function UploadPhotoForm() {

  //react hook form
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileInput = (newImage) => {
    setSelectedFile(newImage);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Photo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="absolute inset-0 flex items-center justify-center z-20">
              <div>
                <label htmlFor="button-file" className="flex p-8 cursor-pointer">
                  <Controller
                    name="damagePhoto"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Button>
                        <input
                          accept="image/*"
                          className="hidden"
                          id="damagePhoto"
                          type="file"
                          fullWidth
                          onChange={async (e) => {
                            function readFileAsync() {
                              return new Promise((resolve, reject) => {
                                const file = e.target.files[0];
                                if (!file) {
                                  return;
                                }
                                handleFileInput(file);
                                const reader = new FileReader();
  
                                reader.onload = () => {
                                  resolve(`data:${file.type};base64,${btoa(reader.result)}`);
                                };
  
                                reader.onerror = reject;
  
                                reader.readAsBinaryString(file);
                              });
                            }
  
                            const newImage = await readFileAsync();
  
                            onChange(newImage);
                          }}
                        />
                      </Button>
                    )}
                  />
                </label>
              </div>
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
                helpertext={errors?.damageDescription?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UploadPhotoForm;
