import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogTitle, DialogContent, TextField } from '@mui/material';


export default function AddCar( {addCar} ) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        price: '',
        year: '',
    })

    const handleClose = () => {
        addCar(car);
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const inputChanged= (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (

        <div>
            <Button onClick={handleClickOpen} variant="outlined">
                Add Car
            </Button>
            <Dialog onClose={handleClose} open={open}  >
              <DialogTitle>Add Car</DialogTitle>  
              <DialogContent>
                <TextField 
                name="brand"
                value={car.brand}
                label="Brand"
                margin="dense"
                onChange={inputChanged}
                fullWidth
                />
                <TextField 
                name="model"
                value={car.model}
                onChange={inputChanged}
                label="Model"
                margin="dense"
                fullWidth
                />  
                <TextField 
                name="color"
                value={car.color}
                onChange={inputChanged}
                label="Color"
                margin="dense"
                fullWidth
                /> 
                <TextField 
                name="fuel"
                value={car.fuel}
                onChange={inputChanged}
                label="Fuel"
                margin="dense"
                fullWidth
                /> 
                <TextField 
                name="year"
                value={car.year}
                onChange={inputChanged}
                label="Year"
                margin="dense"
                fullWidth
                /> 
                <TextField 
                name="price"
                value={car.price}
                onChange={inputChanged}
                label="Price"
                margin="dense"
                fullWidth
                /> 

                </DialogContent>
              <DialogActions>
            <Button onClick={handleClose}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
            </DialogActions>
            </Dialog>
            
        </div>

    );
}