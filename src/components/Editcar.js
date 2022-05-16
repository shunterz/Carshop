import React from 'react';
import {Dialog, DialogTitle} from '@mui/material';
import Button from '@mui/material/Button';
import { DialogActions, DialogContent, TextField } from '@mui/material';


    export default function Editcar({updateCar, params}) {
        const [open, setOpen] = React.useState(false);
        const [car, setCar] = React.useState({
            brand: '',
            model: '',
            color: '',
            fuel: '',
            price: '',
            year: ''
        })

        const handleClickOpen = () => {
            setOpen(true);
            setCar({
                brand: params.data.brand,
                model: params.data.model,
                color: params.data.color,
                fuel: params.data.fuel,
                price: params.data.price,
                year: params.data.year
            })

       }

       const handleClickClose = () => {
           setOpen(false);

       }

       const inputChanged = (event) => {
           setCar({...car, [event.target.name] : event.target.value})
       }

       const handleSave = () => {
           updateCar(car, params.value);
           setOpen(false);
       }

        return(
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Edit
                </Button>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Edit car</DialogTitle>
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
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleClickClose}>Cancel</Button>
            </DialogActions>
            </Dialog>
            </div>
        );

    }

