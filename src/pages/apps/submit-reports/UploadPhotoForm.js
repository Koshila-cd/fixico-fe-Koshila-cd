import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { UploadIcon } from '@heroicons/react/solid';
import { Button, CircularProgress } from '@mui/material';

function UploadPhotoForm() {
  const [isUploading, setIsUploading] = React.useState(false);
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
              
              <Button>
              <input
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
              />
            
          </Button>
            </label>
          </div>
                                            )}
                                            </div>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="damageDescription"
            label="Damage Description"
            helperText="Please Describe the Damage briefly"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UploadPhotoForm;