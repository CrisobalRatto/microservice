// Login.jsx
import React, { Component  } from 'react';
import { withRouter} from 'react-router-dom';
//import { Redirect } from 'react-router'
//import { Link } from "react-router-dom";

// function useLoged() {
//   const[logins,setIsLoggedIn]=useState(false)

  
//     setIsLoggedIn(true);

// if(logins){
//   return <Redirect to='/'/>
// }

//   return logins;
// }


 class Login extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      user : '',
      pass: ''
      
    };
    
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    //const[login,setIsLoggedIn]=useState(false)
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + '/user/login' , {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        
        this.props.history.push('/');
        //return <Redirect to='/'/>;
      }

      else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('error intente logear nuevamente');
    });
  }
  render() {
    return(
      <div className="login-wrapper">
        <h1> Log In</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            <p>Username</p>
            <input type="text" name="user" value={this.state.user}
          onChange={this.handleInputChange}
          required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="pass" value={this.state.pass}
          onChange={this.handleInputChange}
          required/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
