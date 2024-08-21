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
import './flightSearch.css';

const FlightSearch = ({ open, onClose, data, searchFlightData }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      flightNumber: '',
      terminalGate: '',
      flightType: '',
      originLocation: '',
      destinationLocation: '',
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
    searchFlightData(formData).then(response => {
      if (response.data && response.data.length > 0) {
        // Handle successful search
      } else {
        // Handle no results found
      }
      onClose(response);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <Dialog open={open} onClose={() => onClose(null)}>
      <DialogTitle>
        <h1>Advanced Search</h1>
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
          <Button onClick={() => onClose(null)} variant="contained">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Search
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FlightSearch;
