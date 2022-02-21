
import "./newProduct.css";

import React, { Component } from "react";

import { withRouter} from 'react-router-dom';


const initialState = {
  nombre: "",
  marca: "",
  descripcion: "",
  precio: null,
};



class NewProduct extends Component {
  constructor() {
    super();

    this.state = initialState
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  // handleChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nombreError = "";
    let marcaError = "";
    let descripcionError = "";
    let precioError = "";


    if (!this.state.nombre) {
      nombreError = "Ingrese nombre producto";
    }
    if (!this.state.marca) {
      marcaError = "Ingrese marca producto";
    }
    if (!this.state.descripcion) {
      descripcionError = "Ingrese descripcion de producto";
    }
    if (!this.state.precio  ) {
      precioError = "Ingrese precio producto en numeros";
    }

    if (nombreError || marcaError || descripcionError || precioError ) {
      this.setState({ nombreError, marcaError, descripcionError, precioError});
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault(event);
    const isValid = this.validate();
    if (isValid){
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
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nombreError}
          </div>
          </div>
          
          <div className="newUserItem">
            <label>Marca Producto</label>
            <input type="text" name="marca"
            value={this.state.marca}
            onChange={this.handleChange} 
            required />
            <div style={{ fontSize: 12, color: "red" }}>
            {this.state.marcaError}
          </div>
          </div>
        
          <div className="newUserItem">
            <label>Descripcion</label>
            <input type="text" name="descripcion"
            value={this.state.descripcion}
            onChange={this.handleChange} 
            required />
              <div style={{ fontSize: 12, color: "red" }}>
            {this.state.descripcionError}
          </div>
          </div>
      
          <div className="newUserItem">
            <label>Precio</label>
            <input type="number" name="precio" value={this.state.precio}
            onChange={this.handleChange} 
            required />
                   <div style={{ fontSize: 12, color: "red" }}>
            {this.state.precioError}
          </div>
          </div>
 
 

          <button className="newUserButton" onClick={this.handleSubmit}>Nuevo Producto</button>
        </form>
        
      </div>
  
  );
       
}

}

export default withRouter(NewProduct);



