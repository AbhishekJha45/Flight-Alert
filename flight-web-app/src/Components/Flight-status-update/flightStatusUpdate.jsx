import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import './flightStatusUpdate.css';

const FlightStatusUpdate = ({ open, onClose, data, updateFlightStatus }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      flightNumber: '',
      status: ''
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
    updateFlightStatus(formData).then(response => {
      // Handle successful update
      onClose(true);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>
        <h1>Update Flight Status</h1>
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
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Status</InputLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Status"
                  >
                    <MenuItem value="SCHEDULED">Scheduled</MenuItem>
                    <MenuItem value="ARRIVAL">Arrival</MenuItem>
                    <MenuItem value="DEPARTURE">Departure</MenuItem>
                    <MenuItem value="DELAY">Delay</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions className="action">
          <Button onClick={() => onClose(false)} variant="contained">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FlightStatusUpdate;
