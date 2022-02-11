import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData.jsx";
//import React, { userRows  } from 'react';
import { Link } from "react-router-dom";
//import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as React from 'react';  

export default function SaleList() {
  const [data, setData] = useState([]);
 
  const [checkSelection, setCheckSelection] = React.useState([]);
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

  useEffect(() => {
    getProductData();
  }, [ ]);

    //console.log(data)
    React.useEffect(() => {
      console.log("Selections State Hook", checkSelection);
    }, [checkSelection]);


    
    const handleDelete = (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
      setData(data.filter((item) => item._id !== _id));
    
    axios.delete(apiurl + `${data._id}`, { withCredentials: true } , { data: data.filter((item) => item._id !== _id) }).then(

    )

  };



const deleteCustomerByIds = async () => {
  //e.preventDefault();
  let users = [];
  var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  for (const _id in checkSelection) {
    const response = await axios.delete(apiurl +`${_id}`, { withCredentials: true }, {
      
 
    });
    users.push(response);
    console.log(response)
  }
 
}


  // const deleteCustomerByIds = () => {
  //   let arrayids = checkSelection;
  //   console.log(checkSelection)
  //   console.log(arrayids)
  //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    
  //   var forEachData = ''
  //   console.log(forEachData)
  //   axios
  //     .delete(apiurl +`${arrayids.forEach(d => forEachData += `${d._id}`)}`, { withCredentials: true },{
      
  //       data: { arrayids }
  //     });
  //     //   console.log(data);
  //     //   getCustomer();
  //     // })
  //     // .catch(err => alert(err));
      
  // };


 

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
        
        onClick={() => {
          deleteCustomerByIds();
        }}

        //onClick={() => deleteCustomerByIds(checkSelection)}
        //onClick={() => {if(window.confirm('¿Esta seguro?')){deleteCustomerByIds(checkSelection)};}}
        >
      
        Borrar eleccionados
      </button>
      <Link to="/newUser">
          <button className="userAddButtons">Crear Usuario</button>
        </Link>
      <DataGrid
        rows={data}
        getRowId={(rows) => rows._id}
        //disableSelectionOnClick
        enableCellSelect
        columns={columns}
        pageSize={8}
        value={data._id}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setCheckSelection(newSelectionModel);
        }}
        newSelectionModel={checkSelection}
        {...data}
      
      />
      
    </div>
  );
  
}
