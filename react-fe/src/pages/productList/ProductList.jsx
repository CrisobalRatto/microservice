import "./productList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData.jsx";
//import React, { userRows  } from 'react';
import { Link } from "react-router-dom";
//import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as React from 'react';  

export default function ProductList() {
  const [datauser, setData] = useState([]);

  var [checkSelection, setCheckSelection] = React.useState();
  const getProductData = async () => {
    try {
      var apiurl = process.env.REACT_APP_API_URL + '/api/producto/productosregistrados';
      const data = await axios.get(apiurl, { withCredentials: true })
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
     getProductData();
  }, [ ]);


    
    const handleDelete = (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
      setData(datauser.filter((item) => item._id !== _id));
    
    axios.delete(apiurl + `${datauser._id}`, { withCredentials: true } , { data: datauser.filter((item) => item._id !== _id) }).then(

    )

  };


const deleteCustomerByIds =  () => {

  var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  for (let i = 0; i<1; i++) {
    axios.delete(apiurl +`${checkSelection}`, { withCredentials: true }, { data: datauser } , {
      
 
    });

  }
 
}

 

    const columns = [
    { field: "_id", headerName: "SKU", width: 120 },
    {
      field: "nombre",
      headerName: "Nombre Producto",
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
    { field: "descripcion", headerName: "Descripcion", width: 200 },

    {
      field: "precio",
      headerName: "Precio",
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
          
            <Link to={"/product/" + params.row._id}>
              <button className="userListEdit">Editar</button>
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
    <div className="productList">

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
      <Link to="/newProduct">
          <button className="userAddButtons">Agregar Producto</button>
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