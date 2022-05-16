import React, {useEffect, useState} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddCar from './AddCar';
import EditCar from './Editcar';


function Carlist(){

    // STATE CAR OLIOT
    const [cars, setCars] = React.useState([]);

    const deleteCar = (link) => {
        
        fetch(link, {method: 'DELETE'})
            .then (response => {
                if(response.ok){
                    fetchCars();

        }
        
    })
    }

    const addCar = (car) => {
        fetch("https://carrestapi.herokuapp.com/cars", {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(car)        
             })
             .then(response => {
                 if(response.ok) {
                     fetchCars();
                   
                 } else {
                     alert('Something went wrong when adding car');
                 }
             })
             .catch(err => console.error(err))
    }

    const fetchCars = () => {
        fetch("https://carrestapi.herokuapp.com/cars")
        .then (response => response.json())
        .then (data => setCars(data._embedded.cars));
    }

    const updateCar = (updateCar, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)
        })
        .then(response => {
            if(response.ok) {
                fetchCars();
            } else {
                alert('Something went wrong.');
            }
        })
        .catch(err => console.error(err))
    }


    const columns = [
       { field: 'brand', sortable: true, filter: true },
       { field: 'model', sortable: true, filter: true },
       { field: 'color', sortable: true, filter: true },
       { field: 'fuel', sortable: true, filter: true },
       { field: 'year', sortable: true, filter: true },
       { field: 'price', sortable: true, filter: true },

        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params => 
            <EditCar updateCar={updateCar} params={params} />

        },

       {

        headerName: 'Delete',
        width: 100,
        field: '_links.self.href',
        cellRenderer: params =>
        <IconButton onClick={() => deleteCar(params.value)}>
            <DeleteIcon />
        </IconButton>
         

       },
    ]

    // REST API AUTOHAKU

    useEffect( () => {

        fetchCars();

    }, []);


    return (
        <>
        <AddCar addCar={addCar} />
        <div className='ag-theme-material' style={{ height: 600, width: '90' }}>
            <AgGridReact
                rowData={cars}
                paginationPageSize={10}
                pagination={true}
                columnDefs={columns}>
            </AgGridReact>
        </div></>
);

}

export default Carlist;