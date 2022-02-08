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

export default function UserList() {
  const [data, setData] = useState([]);
  //const numbers= [ '00','01','02','03','04','05','06','07','08','09']
  const [checkSelection, setCheckSelection] = React.useState([]);
  useEffect(() => {
      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados';
      axios
        .get(apiurl, { withCredentials: true })
        .then((response) => {
          setData(response.data);
          //console.log(data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [data]);
    //console.log(data)
    React.useEffect(() => {
      console.log("Selections State Hook", checkSelection);
    }, [checkSelection]);

    //  const HandleDelete = (_id) => {
      
    //     var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    //     axios.delete(apiurl + `${useState([_id])}`) // change api key
    //       .then((response) => {
    //         console.log(response);
    //         setData(response.data);
    //       })
    //   , []
    // };
    
    const handleDelete = (_id) => {
      //setData(data.filter((item) => item.id !== id));
      var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
      setData(data.filter((item) => item._id !== _id));
    
    axios.delete(apiurl + `${data._id}`, { withCredentials: true } , { data: data.filter((item) => item._id !== _id) }).then(
      // Observe the data keyword this time. Very important
      // payload is the request body
      // Do something
    )

  };


  
//   function handleChange(e) {
//     if (e.currentTarget.checked) {
//         setCheckSelection([...checkSelection, e.target.value]);
//     } else {
//         const newArr = checkSelection.filter((item) => item !== e.target.value);
//         setCheckSelection(newArr);
//     }
// }
// useEffect(() => {
//   console.log("checkSelection", checkSelection);
// }, [checkSelection]);


  // function handleChange(e) {
  //   if (e.currentTarget.checked) {
  //     setCheckSelection([...checkSelection, e.target.value]);
  //   } else {
  //     const newArr = checkSelection.filter((_id) => _id !== e.target.value);
  //     setCheckSelection(newArr);
  //   }
  //   console.log(checkSelection)
  // }
  // const deleteCustomerByIds = () => {
  //   //let arrayids = checkSelection;
  //   //console.log(arrayids)
    
  //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  //   axios
  //     .delete(apiurl + `${checkSelection}`, { withCredentials: true })
  //     .then(data => {
  //       console.log(data);
  //       console.log(checkSelection)
  //     })
  //     .catch(err => alert(err));
  // };


  // axios.delete("https://urltoendpoint/xxxxx", {
  //   headers: {
  //     Authorization: "xxxxxxx",
  //   },
  //   data: {
  //     user: users[0],
  //   },
  // });
  // const deleteCustomerByIds = contactId =>
  // axios.delete(
  //  `https://api.sendgrid.com/v3/marketing/contacts?ids=${contactId}`,
  //  options
  // )
  

  // const array = ['asdf', 'foo', 'bar'];
  // let users = [];
  // for (const id in array) {
  //   const response = await axios('/user/' + id);
  //   users.push(response);
  // }
  
  // console.log(users);

// // // const deleteCustomerByIds = async () => {
// // //   //e.preventDefault();
// // //   let users = [];
// // //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
// // //   for (const _id in checkSelection) {
// // //     const response = await axios.delete(apiurl +`${_id}`, { withCredentials: true }, {
      
 
// // //     });
// // //     users.push(response);
// // //     console.log(response)
// // //   }
 
// // // }


  const deleteCustomerByIds = () => {
    let arrayids = checkSelection;
    console.log(checkSelection)
    console.log(arrayids)
    var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    
    var forEachData = ''
    console.log(forEachData)
    axios
      .delete(apiurl +`${arrayids.forEach(d => forEachData += `${d._id}`)}`, { withCredentials: true },{
      
        data: { arrayids }
      });
      //   console.log(data);
      //   getCustomer();
      // })
      // .catch(err => alert(err));
      
  };


  // useEffect(() => {
  //   console.log("checkSelection", checkSelection);
  // }, [checkSelection]);



    // useEffect((data) => {
        
        
    //     var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    //     axios.delete(apiurl + `${data._id}`) // change api key
    //       .then((response) => {
    //         console.log(response);
    //         setDelete(response.data);
    //       });
    //   }, []); 


  
  // deleteRow(_id, e){  
  //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    
  //   axios.delete(apiurl + `${posts._id}`, { withCredentials: true })  
  //     .then(res => {  
  //       console.log(res);  
  //       console.log(res.data);  
    
  //       const posts = this.state.posts.filter(item => item._id !== _id);  
  //       this.setState({ posts });  
  //     })  
    
  // }  

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados';
  //   axios
  //     .get(apiurl, { withCredentials: true })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [setData]);
  
  

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  //  onDeleteClick = (id, e) => {
  //   let inventory;
  //   axios.delete(api() + '/products/' + id).then((deleted) => {
  //    axios.get(api() + this.state.lastGET).then((response) => {
  //     inventory = response.data.data
  //     this.setState({inventory})
  //    })
  //   })
  //  }

  // useEffect((data) => {
  //   //const bookingId = UserIdInput.target.elements.bookingId.value;
  //   setData(data.filter((item) => item._id !== _id));
  //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  //   axios.delete(apiurl + `${data._id}`) // change api key
  //     .then((response) => {
  //       console.log(response);
  //       //setDelete(response.data);
  //     });
  // }, []); 
  
  
  
  
  
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };


  // const handleDelete = data => {
  //   const id = this.state.id;
  //   const url = process.env.REACT_APP_API_URL + `/api/cliente/clientesregistrados/${data._id}`;

  //   axios
  //     .delete(url, { withCredentials: true })
  //     .then(res => {
  //       this.setState(previousState => {
  //         return {
  //           data: previousState.data.filter((item) => item.id !== id));
  //         };
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  
  
  
  
  
  
//   const handleRemove = (e) => {
//     const id = this.state.id;
//     const url = process.env.REACT_APP_API_URL + "/api/cliente/clientesregistrados/${movie.id}";
//     // const id = document.querySelectorAll("li").props['data-id'];
//     e.preventDefault();
//     axios.delete(url)
//     .then(res => {
//       this.setState(previousState => {
//         return {
//           movies: previousState.movies.filter(m => m.id !== movie.id)
//         };
//       });
//     })

// }


//   const handleDelete = (_id) => {
//     setData(data.filter((item) => item._id !== _id));
//     useEffect(() => {
//       // DELETE request using axios with error handling
//       axios.delete('https://reqres.in/invalid-url')
//           .then(response => setStatus('Delete successful'))
//           .catch(error => {
//               setErrorMessage(error.message);
//               console.error('There was an error!', error);
//           });
//   }, []);
//   };

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
            {params.row.username}
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
