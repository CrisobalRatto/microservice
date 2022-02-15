import "./productList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { userRows } from "../../dummyData.jsx";
//import React, { userRows  } from 'react';
import { Link} from "react-router-dom";
//import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import * as React from 'react'; 
import Select from 'react-select'; 

export default function ProductList() {
  const [productData, setData] = useState([]);
  const [userData, setDataUser] = useState([]);
  console.log(userData)
  console.log(productData)
  var [checkSelection, setCheckSelection] = React.useState();
  const [selectedOption, setSelectedOption] = useState();
  console.log(selectedOption)


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
  
  const getClients = async () => {
    try {
      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados';
      const data = await axios.get(apiurl, { withCredentials: true })
      console.log(data.data);
      const newUserData = data.data.map((user) => ({label: user.nombre +" "+ user.apellidoPaterno, value:user._id }))
      setDataUser(newUserData);


    } catch (e) {
      console.log(e);
    }
  };




console.log(userData)

useEffect( () => {
  getClients();
}, [ ]);


  useEffect(() => {
     getProductData();
     
  }, [ ]);

    
  const onQuantityChange = (e, _id) => {
    console.log(e)
    console.log(_id)
     console.log(productData)

     for (let i = 0; i < productData.length; i++) {
      if (productData[i]?._id === _id ) { 
        productData[i].quantity= e.target.value
      }
    }



  }
    
    const handleDelete = (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
      setData(productData.filter((item) => item._id !== _id));
      
    axios.delete(apiurl + `${productData._id}`, { withCredentials: true } , { data: productData.filter((item) => item._id !== _id) }).then(

    )

  };


  const bulkSale = async () => {
      console.log(selectedOption)
      console.log(checkSelection)
      var apiurl = process.env.REACT_APP_API_URL + '/api/venta/';
      

      checkSelection.forEach( async idProducto => { 
        
        const productQuantity = productData.find( (producto) => producto._id === idProducto )?.quantity
        await axios.post( apiurl, {idProducto, idCliente:selectedOption.value, cantidad:productQuantity }, { withCredentials: true })
      });



  }


  const deleteProductByIds = async () => {
    console.log('lmao',checkSelection)
    var apiurl = process.env.REACT_APP_API_URL + '/api/producto/';
    
    await axios.delete(apiurl, { data: checkSelection , withCredentials: true });
    getProductData();
    
   
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
      width: 220,
      renderCell: (params) => {
        return (
          <>
            
          
  
            <input type="number" id="quantity" name="quantity"  min="1" max="10" defaultValue={1} onChange={(e) => {
              onQuantityChange(e, params.row._id)
            }} />



  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          

            


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
        onClick={deleteProductByIds}
        // onClick={() => {
        //   deleteCustomerByIds();
        // }}

        //onClick={() => deleteCustomerByIds(checkSelection)}
        //onClick={() => {if(window.confirm('¿Esta seguro?')){deleteCustomerByIds(checkSelection)};}}
        >
      
        Borrar seleccionados
      </button>
      
      <Link to="/newProduct">
          <button className="userAddButtons">Agregar Producto</button>
        </Link>
      
          <button className="userAddButtons" onClick={bulkSale} >Vender selecc</button>
        

        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={userData}
      />

      <DataGrid
        rows={productData}
        //data={productData}
        getRowId={(rows) => rows._id}
        disableSelectionOnClick
        enableCellSelect
        columns={columns}
        pageSize={8}
        value={productData}
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