
import React, { Component } from "react";

export const userData  = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  

        export const userRows = [class userRows extends Component {
          constructor(props) {
            super(props)
            this.state = {
              _id : '',
              apellidoPaterno: '',
              apellidoMaterno : '',
              nombre : '',
              fechaNacimiento : '',
              sexo : '',
              telefono : '',
              direccion : '',
              fechaCreacion : '',
              fechaModificacion : '',
              
            };
            
          }
          clientes = () => {
          JSON.parse(
          
            fetch(process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados' , {
                  method: 'GET',
                  //credentials: 'include',
                  body: JSON.stringify(this.state),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                
                )
              }
            
              
                return() {
                  <React.Fragment>{this.state}</React.Fragment>
    
                }
              
              
            }];
        
  
  
  
  
  // export const userRows extends Component = [
  
  
  
  
  //   JSON.parse(
      
  //     fetch(process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados' , {
  //           method: 'GET',
  //           //credentials: 'include',
  //           body: JSON.stringify(this.state),
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         })
          
  //         )
  
  
  
  // ]




  // // JSON.parse(JSON_source)
  
  // // class userRows extends Component {
  // //   constructor(props) {
  // //     super(props)
  // //     this.state = {
  // //       _id : '',
  // //       apellidoPaterno: '',
  // //       apellidoMaterno : '',
  // //       nombre : '',
  // //       fechaNacimiento : '',
  // //       sexo : '',
  // //       telefono : '',
  // //       direccion : '',
  // //       fechaCreacion : '',
  // //       fechaModificacion : '',
        
  // //     };
      
  // //   }
    
    
  //   // handleInputChange = (event) => {
  //   //   const { value, name } = event.target;
  //   //   this.setState({
  //   //     [name]: value
  //   //   });
  //   // }
  //   // onSubmit = (event) => {
  //   //   //const[login,setIsLoggedIn]=useState(false)
  //   //   event.preventDefault();
  //   //   fetch(process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados' , {
  //   //     method: 'GET',
  //   //     //credentials: 'include',
  //   //     body: JSON.stringify(this.state),
  //   //     headers: {
  //   //       'Content-Type': 'application/json'
  //   //     }
  //   //   })
      
   
  // }
  

  
  
  
  
  
  // export const userRows = [
  //   fetch(process.env.REACT_APP_API_URL + '/api/cliente/clientesregistrados' , {
  //     method: 'GET',
  //     //credentials: 'include',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })


  // ];


  // export const userRows = [
  //   {
  //     id: 1,
  //     username: "Cristobal Cornejo",
  //     avatar:
  //       "https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png",
  //     email: "cris@gmail.com",
  //     status: "active",
  //     transaction: "$20000",
  //   },
  // ];


  export const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 10,
      status: "active",
      price: "$12000",
    },
    {
      id: 2,
      name: "Xbox Series X",
      img:
        "https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png%22",
      stock: 20,
      status: "active",
      price: "$750000",
    },

  ];