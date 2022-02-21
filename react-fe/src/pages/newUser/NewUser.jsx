
import "./newUser.css";
import Dates from "../../components/datepicker/Datepicker";
import React, { Component } from "react";

import { withRouter} from 'react-router-dom';


const initialState = {
  apellidoPaterno: "",
  apellidoMaterno: "",
  nombre: "",
  fechaNacimiento: "",
  sexo: null,
  telefono: '',
  direccion: ''
};


class NewUser extends Component {

  
  constructor() {
    super();
    this.state = initialState
    this.handleRadio = this.handleRadio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadio(event) {
    const sexo = event.currentTarget.value === 'true' ? true: false;
    console.log('handle', sexo);
    this.setState( {sexo} );
  }


  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  // handleChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  validate = () => {
    let apellidoPaternoError = "";
    let apellidoMaternoError = "";
    let nombreError = "";
    let telefonoError = "";
    let direccionError = "";
    // let passwordError = "";

    if (!this.state.apellidoPaterno) {
      apellidoPaternoError = "Ingrese apellido paterno";
    }
    if (!this.state.apellidoMaterno) {
      apellidoMaternoError = "Ingrese apellido materno";
    }
    if (!this.state.nombre) {
      nombreError = "Ingrese nombre";
    }
    if (!this.state.telefono) {
      telefonoError = "Ingrese numero de telefono";
    }
    if (!this.state.direccion) {
      direccionError = "Ingrese direccion";
    }


    if (apellidoPaternoError || apellidoMaternoError || nombreError ||    telefonoError || direccionError) {
      this.setState({ apellidoPaternoError, apellidoMaternoError, nombreError,   telefonoError, direccionError});
      return false;
    }

    return true;
  };


  handleSubmit = (event) => {
    //const[login,setIsLoggedIn]=useState(false)
    event.preventDefault(event);
    const isValid = this.validate();
    if (isValid){
    
    fetch(process.env.REACT_APP_API_URL + '/api/cliente/' , {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        
        this.props.history.push('/users');
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
    const { sexo } = this.state;
    console.log(sexo);
    return (
      <div className="newUser">
         
        <h1 className="newUserTitle">Nuevo Usuario</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Apellido Paterno</label>
            <input type="text"  name="apellidoPaterno" 
            value={this.state.apellidoPaterno}
            onChange={this.handleChange} 
            required />
                    <div style={{ fontSize: 12, color: "red" }}>
            {this.state.apellidoPaternoError}
          </div>
          </div>

          <div className="newUserItem">
            <label>Apellido Materno</label>
            <input type="text" name="apellidoMaterno"
            value={this.state.apellidoMaterno}
            onChange={this.handleChange} 
            required />
                <div style={{ fontSize: 12, color: "red" }}>
            {this.state.apellidoMaternoError}
          </div>
          </div>
    
          <div className="newUserItem">
            <label>Nombre</label>
            <input type="text" name="nombre"
            value={this.state.nombre}
            onChange={this.handleChange} 
            required />
                  <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nombreError}
          </div>
          </div>
  
          <div className="newUserItem">
            <label>Fecha Nacimieto</label>
            <Dates name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={this.handleChange} 
            required/>
                    <div style={{ fontSize: 12, color: "red" }}>
            {this.state.fechaNacimientoError}
          </div>
          </div>

          <div className="newUserItem">
            <label>Telefono</label>
            <input type="number" name="telefono"  value={this.state.telefono}
            onChange={this.handleChange} 
            required />
                    <div style={{ fontSize: 12, color: "red" }}>
            {this.state.telefonoError}
          </div>
          </div>

          <div className="newUserItem">
            <label>Direccion</label>
            <input type="text" name="direccion"
            value={this.state.direccion}
            onChange={this.handleChange} 
            required />
                    <div style={{ fontSize: 12, color: "red" }}>
            {this.state.direccionError}
          </div>
          </div>

          <div className="newUserItem">
            <label>Sexo</label>
            <div className="newUserGender">
              {/* eslint-disable-next-line */}
              <input type="radio" name="sexo" id="true" value="true" checked={sexo === true} onChange={this.handleRadio} checked/>
              <label for="false">Masculino</label>
              <input type="radio" name="sexo" id="false" value="false" checked={sexo === false} onChange={this.handleRadio} />
              <label for="true">Femenino</label>
            </div>
            


          </div>

          
          <button className="newUserButton" onClick={this.handleSubmit}>Crear Cliente</button>
        </form>
        
      </div>
  
  );
       
}

}

export default withRouter(NewUser);



