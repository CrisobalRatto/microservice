import "./userList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData.jsx";
//import React, { userRows  } from 'react';
import { Link } from "react-router-dom";
//import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as React from 'react';  

export default function UserList() {
  const [datauser, setData] = useState([]);

  var [checkSelection, setCheckSelection] = React.useState();
  
  const getProductData = async () => {
    try {
      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados';
      const data = await axios.get(apiurl, { withCredentials: true })
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect( () => {
    getProductData();
  }, [ ]);

  React.useEffect(() => {
    console.log("Selections State Hook", checkSelection);
  }, [checkSelection]);

    
    const handleDelete = async (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
      setData(datauser.filter((item) => item._id !== _id));
    
    await axios.delete(apiurl + `${datauser._id}`, { withCredentials: true } , { data: datauser.filter((item) => item._id !== _id) }).then(

    )

  };


const deleteCustomerByIds = async () => {
  console.log('lmao',checkSelection)
  var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  
  await axios.delete(apiurl, { data: checkSelection , withCredentials: true });
  getProductData();
  
 
}

 

    const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.nombre}
          </div>
        );
      },
    },
    { field: "apellidoPaterno", headerName: "ApellidoPaterno", width: 200 },
    {
      field: "apellidoMaterno",
      headerName: "ApellidoMaterno",
      width: 120,
    },
    {
      field: "fechaCreacion",
      headerName: "Fecha Creacion",
      width: 120,
    },
    {
      field: "fechaModificacion",
      headerName: "Fecha Modificacion",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
              // {(e) => HandleDelete(data._id, e)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">

      <button
        className="userDeleteButton"
        //onClick={deleteCustomerByIds}
        onClick={deleteCustomerByIds}
        // onClick={() => {
        //   deleteCustomerByIds();
        // }}

        //onClick={() => deleteCustomerByIds(checkSelection)}
        //onClick={() => {if(window.confirm('¿Esta seguro?')){deleteCustomerByIds(checkSelection)};}}
        >
      
        Borrar eleccionados
      </button>
      <Link to="/newUser">
          <button className="userAddButtons">Crear Usuario</button>
        </Link>
      <DataGrid
        rows={datauser}
        //data={datauser}
        getRowId={(rows) => rows._id}
        //disableSelectionOnClick
        enableCellSelect
        columns={columns}
        pageSize={8}
        value={datauser}
        checkboxSelection 
        onSelectionModelChange={(newSelectionModel) => {
          setCheckSelection(newSelectionModel);
        }}
        newSelectionModel={checkSelection}
        components={{
          Toolbar: GridToolbar,
        }}
      
      />
      
    </div>
  );
  
}