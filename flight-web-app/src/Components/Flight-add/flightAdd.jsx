import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import './flightAdd.css';

const FlightAdd = ({ open, onClose, data, addFlight }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      flightNumber: '',
      terminalGate: '',
      flightType: '',
      originLocation: '',
      destinationLocation: '',
      arrivalTime: '',
      departureTime: '',
      status: 'SCHEDULED'
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
    addFlight(formData).then(response => {
      onClose(true);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>
        <h1>Flight Form</h1>
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
            <Controller
              name="terminalGate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Terminal Gate"
                  variant="outlined"
                  placeholder="Ex. A6"
                  required
                />
              )}
            />
          </div>

          <div className="row">
            <FormControl component="fieldset">
              <InputLabel><b>Flight Type</b></InputLabel>
              <Controller
                name="flightType"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field} row aria-label="flight type">
                    <FormControlLabel value="INBOUND" control={<Radio />} label="Inbound" />
                    <FormControlLabel value="OUTBOUND" control={<Radio />} label="Outbound" />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </div>

          <div className="row">
            <Controller
              name="originLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Origin Location"
                  variant="outlined"
                  placeholder="Ex. Vancourer"
                  required
                />
              )}
            />
            <Controller
              name="destinationLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Destination Location"
                  variant="outlined"
                  placeholder="Ex. Toronto"
                  required
                />
              )}
            />
          </div>

          <div className="row">
            <Controller
              name="arrivalTime"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Arrival Time"
                  type="datetime-local"
                  variant="outlined"
                  required
                />
              )}
            />
            <Controller
              name="departureTime"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Departure Time"
                  type="datetime-local"
                  variant="outlined"
                  required
                />
              )}
            />
          </div>

          <div className="row">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Set Status</InputLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select {...field} label="Set Status">
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
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FlightAdd;
