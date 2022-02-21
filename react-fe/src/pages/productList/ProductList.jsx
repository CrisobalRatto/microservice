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
import swal from 'sweetalert'
import dateFormat from 'dateformat'

export default function ProductList() {
  const [productData, setData] = useState([]);
  const [userData, setDataUser] = useState([]);
  console.log(userData)
  console.log(productData)
  var [checkSelection, setCheckSelection] = React.useState();
  const [selectedOption, setSelectedOption] = useState();
  
  console.log(checkSelection)



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

  React.useEffect(() => {
    console.log("Selections State Hook", checkSelection);
  }, [checkSelection]);


    
  const onQuantityChange = async (e, _id) => {
    console.log(e)
    console.log(_id)
     console.log(productData)

     for (let i = 0; i < productData.length; i++) {
      if (await productData[i]?._id === _id ) { 
        productData[i].quantity= e.target.value
      }
    }
  }
  useEffect(() => {
    onQuantityChange();
    
 }, );

    
    const handleDelete = (_id) => {

      var apiurl = process.env.REACT_APP_API_URL + '/api/producto/';
      setData(productData.filter((item) => item._id !== _id));
      
    axios.delete(apiurl + `${productData._id}`, { withCredentials: true } , { data: productData.filter((item) => item._id !== _id) }).then(

    )

  };


  const bulkSale = async () => {
      console.log(selectedOption)
      console.log(checkSelection)
      var apiurl = process.env.REACT_APP_API_URL + '/api/venta/';
      
      checkSelection?.forEach( async idProducto => { 
        
        const productQuantity = productData?.find( (producto) => producto._id === idProducto )?.quantity
        await axios.post( apiurl, {idProducto, idCliente:selectedOption.value, cantidad:productQuantity }, { withCredentials: true }).then(response => { 
          console.log(response)
          swal({
            title: "Venta exitosa",
            text: "Puede ver las ventas en el menu Ventas",
            icon: "success",
            timer: 1000,
            button: false
          })
          this.setState({ redirect: this.state.redirect === false });
      })
      .catch(err => { 
        console.log(err)
          
      });   
      })
      


  }


  const deleteProductByIds = async () => {
    console.log('lmao',checkSelection)
    var apiurl = process.env.REACT_APP_API_URL + '/api/producto/';
    
    await axios.delete(apiurl, { data: checkSelection , withCredentials: true });
    getProductData();
    
   
  }

 

    const columns = [
    { field: "_id", headerName: "SKU",  flex: 1 },
    {
      field: "nombre",
      headerName: "Nombre Producto",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.nombre}
          </div>
        );
      },
    },
    { field: "descripcion", headerName: "Descripcion", flex: 1 },

    {
      field: "precio",
      headerName: "Precio",
      flex: 1,
    },
    {
      field: "fechaCreacion",
      headerName: "Fecha Creacion",
      flex: 1,
    },
    {
      field: "fechaModificacion",
      headerName: "Fecha Modificacion",
      flex: 1,
    },
    
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            
          
  
            <input type="number" id="quantity" name="quantity"  min="1" max="10" defaultValue={1}  onChange={(e) => {
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
        
        getRowId={(rows) => rows._id}
        disableSelectionOnClick
        enableCellSelect
        columns={columns}
        pageSize={15}
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