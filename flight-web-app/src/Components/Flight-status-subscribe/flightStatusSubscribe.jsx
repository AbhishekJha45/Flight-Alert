import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import './flightStatusSubscribe.css';

const FlightStatusSubscribe = ({ open, onClose, data, subscribeToFlightStatus }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      flightNumber: '',
      email: '',
      subscribeToArrival: false,
      subscribeToDeparture: false,
      subscribeToDelay: false
    }
  });

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach(key => {
        setValue(key, data[key]);
      });
    }
  }, [data, setValue]);

  const onSubmit = (formData) => {
    subscribeToFlightStatus(formData).then(response => {
      // Handle successful subscription
      onClose(true);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>
        <h1>Subscribe to Flight Status</h1>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className="content">
          <div className="row">
            <Controller
              name="flightNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Flight Number"
                  variant="outlined"
                  placeholder="Ex. BOEING001"
                  required
                />
              )}
            />
          </div>

          <div className="row">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  placeholder="Ex. BOEING001"
                  required
                />
              )}
            />
          </div>

          <div className="row">
            <Controller
              name="subscribeToArrival"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Subscribe to arrival"
                />
              )}
            />
          </div>

          <div className="row">
            <Controller
              name="subscribeToDeparture"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Subscribe to departure"
                />
              )}
            />
          </div>

          <div className="row">
            <Controller
              name="subscribeToDelay"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Subscribe to delay"
                />
              )}
            />
          </div>
        </DialogContent>
        <DialogActions className="action">
          <Button onClick={() => onClose(false)} variant="contained">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FlightStatusSubscribe;
