import "./saleList.css";
import { DataGrid, GridToolbar} from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData.jsx";
//import React, { userRows  } from 'react';
//import { Link } from "react-router-dom";
//import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as React from 'react';  

export default function SaleList() {
  const [datasale, setData] = useState([]);
 
  const [checkSelection, setCheckSelection] = React.useState([]);
  const getSaleData = async () => {
    try {
      var apiurl = process.env.REACT_APP_API_URL + '/api/venta/ventasregistradas';
      const data = await axios.get(apiurl, { withCredentials: true })
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSaleData();
  }, [ ]);

    //console.log(data)
    React.useEffect(() => {
      console.log("Selections State Hook", checkSelection);
    }, [checkSelection]);


    
    const handleDelete = (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/venta/';
      setData(datasale.filter((item) => item._id !== _id));
    
    axios.delete(apiurl + `${datasale._id}`, { withCredentials: true } , { data: datasale.filter((item) => item._id !== _id) }).then(

    )

  };





const deleteSalesByIds = async () => {
  console.log('lmao',checkSelection)
  var apiurl = process.env.REACT_APP_API_URL + '/api/venta/';
  
  await axios.delete(apiurl, { data: checkSelection , withCredentials: true });
  getSaleData();
  
 
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
    { field: "_id", headerName: "Folio", width: 160 },
 
    {
      field: "idCliente",
      headerName: "idCliente",
      width: 160,
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 160,
    },
    {
      field: "fechaCreacion",
      headerName: "Fecha Venta",
      width: 160,
    },
    {
      field: "total",
      headerName: "Total venta",
      width: 160,
    },
    // {
    //   field: "idProducto",
    //   headerName: "idProducto",
    //   width: 160,
    // },



    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          

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
        onClick={deleteSalesByIds}
        
        // onClick={() => {
        //   deleteCustomerByIds();
        // }}

        //onClick={() => deleteCustomerByIds(checkSelection)}
        //onClick={() => {if(window.confirm('¿Esta seguro?')){deleteCustomerByIds(checkSelection)};}}
        >
      
        Borrar eleccionados
      </button>

      <DataGrid
        rows={datasale}
        getRowId={(rows) => rows._id}
        //disableSelectionOnClick
        enableCellSelect
        columns={columns}
        pageSize={8}
        value={datasale}
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
