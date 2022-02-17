
import "./newUser.css";
import Dates from "../../components/datepicker/Datepicker";
import React, { Component } from "react";

import { withRouter} from 'react-router-dom';


const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};


class NewUser extends Component {
  constructor() {
    super();

    this.state = {
      apellidoPaterno: "",
      apellidoMaterno: "",
      nombre: "",
      fechaNacimiento: "",
      sexo: null,
      telefono: '',
      direccion: ''
    };
    this._handleRadio = this._handleRadio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  _handleRadio(event) {
    const sexo = event.currentTarget.value === 'true' ? true: false;
    console.log('handle', sexo);
    this.setState({ sexo });
  }


  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }





    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    //const[login,setIsLoggedIn]=useState(false)
    event.preventDefault(event);
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
  


  render() {
    const { sexo } = this.state;
    console.log(sexo, true);
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
          </div>
          <div className="newUserItem">
            <label>Apellido Materno</label>
            <input type="text" name="apellidoMaterno"
            value={this.state.apellidoMaterno}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Nombre</label>
            <input type="text" name="nombre"
            value={this.state.nombre}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Fecha Nacimieto</label>
            <Dates name="fechaNacimiento" value={this.state.fechaNacimiento} onChange={this.handleChange} 
            required/>
          </div>
  
          <div className="newUserItem">
            <label>Telefono</label>
            <input type="text" name="telefono" value={this.state.telefono}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Direccion</label>
            <input type="text" name="direccion"
            value={this.state.direccion}
            onChange={this.handleChange} 
            required />
          </div>
          <div className="newUserItem">
            <label>Sexo</label>
            <div className="newUserGender">
              <input type="radio" name="sexo" id="false" value="true" checked={sexo === true} onChange={this._handleRadio} />
              <label for="false">Masculino</label>
              <input type="radio" name="sexo" id="true" value="false" checked={sexo === false} onChange={this._handleRadio} />
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



