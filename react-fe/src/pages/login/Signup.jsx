import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter} from 'react-router-dom';
import "./Signup.css";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      pass: "",
      nombre: "",
      hasAgreed: false,
      confirmPass: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    //const[login,setIsLoggedIn]=useState(false)
    event.preventDefault(event);
    const { pass, confirmPass, hasAgreed } = this.state;
    // perform all neccassary validations
    if (pass !== confirmPass) {
        alert("Contraseñas no coinciden");
    } if (hasAgreed === false)
    {
      alert("Debe acceptar nuestros terminos");
    }
    else {
    
    fetch(process.env.REACT_APP_API_URL + '/user/register' , {
      method: 'POST',
      //credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 201) {
        
        this.props.history.push('/login');
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
      alert('Nombre de usuario ya existe');
    });
  }
  }


  render() {
    return(
      
      <div className="register"> 
      
      <div className="register-wrapper">
        <h1> Registrarse</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Nombre</p>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Ingrese nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Contraseña</p>
            <input
              type="password"
              id="pass"
              className="formFieldInput"
              placeholder="Ingrese contraseña"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p> Repetir contraseña</p>
            <input
              type="password"
              id="confirmPass"
              className="formFieldInput"
              placeholder="Ingrese contraseña"
              name="confirmPass"
              value={this.state.confirmPass}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <p>Nombre usuario</p>
            <input
              type="text"
              id="user"
              className="formFieldInput"
              placeholder="Ingrese nombre"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
              required
            />
          </label>
           <label >
           <p></p>
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{""}{' '}
               Acepto los terminos de servicio{" "}{' '}
              <a href="null" className="formFieldTermsLink">
              <p>Terminos de servicio</p>
              </a>
            </label> 
            
          <div>
          <p><button type="submit">Registrar</button></p>
            {' '}O {' '}
            <Link to="/login" className="formFieldLink">
            {' '}Ya estoy registrado{' '}
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
  }
}
export default withRouter(SignUpForm);