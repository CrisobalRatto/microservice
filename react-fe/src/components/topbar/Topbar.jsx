import React, { Component } from "react";
import "./topbar.css";
import { Button } from '@mui/material';
//import { withRouter } from "react-router-dom";


  function handleClicklogout(e) {
    e.preventDefault();
    fetch ( process.env.REACT_APP_API_URL + '/user/logout' , {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }


  class Topbar extends  Component {
    constructor() {
      super();
      this.state = {
        visible:false,
        logedIn:false,
      };
    }
    componentDidMount () {
        fetch ( process.env.REACT_APP_API_URL + '/api/token/checkToken' , {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ visible: true });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ visible: false });
        });
      }
       logout () {
        fetch ( process.env.REACT_APP_API_URL + '/user/logout' , {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status === 200) {
            ;
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ visible: false });
        });
      }




render() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Aligare</span>
        </div>
        <div className="topRight">

          

          <div className="topbarIconContainer">
            {this.state.visible ?   
          
            <Button onClick={ handleClicklogout } >LogOut</Button>: null}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
}

export default Topbar;

