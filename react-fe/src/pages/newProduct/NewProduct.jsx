
import "./newProduct.css";

import React, { Component } from "react";

import { withRouter} from 'react-router-dom';

class NewProduct extends Component {
  constructor() {
    super();

    this.state = {
      sku: "",
      nombre: "",
      marca: "",
      descripcion: "",
      precio: null,
      fechaCreacion: '',
      fechaModificacion: ''
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault(event);
    fetch(process.env.REACT_APP_API_URL + '/api/producto/' , {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        
        this.props.history.push('/products');
        window.location.reload();
        //return <Redirect to='/'/>;




      }
      else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('error');
    });
  }
  


  render() {

    return (
      <div className="newUser">
         
        <h1 className="newUserTitle">Nuevo Producto</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Nombre producto </label>
            <input type="text"  name="nombre" 
            value={this.state.nombre}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Marca Producto</label>
            <input type="text" name="marca"
            value={this.state.marca}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Descripcion</label>
            <input type="text" name="descripcion"
            value={this.state.descripcion}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Precio</label>
            <input type="text" name="precio" value={this.state.precio}
            onChange={this.handleChange} 
            required />
          </div>
 

          <button className="newUserButton" onClick={this.handleSubmit}>Nuevo Producto</button>
        </form>
        
      </div>
  
  );
       
}

}

export default withRouter(NewProduct);



