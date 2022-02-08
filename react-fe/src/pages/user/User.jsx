
import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import Dates from "../../components/datepicker/Datepicker";


export default function User() {
  const id = useParams()
  console.log(id)
  //const [data, setData] = useState([]);
  //const [posts, setPosts] = useState([])

  const [posts, setData] = useState([])
  const [name, setName] = useState('');
  

  
  //let startDate = name.fechaNacimiento
  //const [startDate, setStartDate] = useState(new Date());

    console.log(name)
  useEffect(()=> {
  //let arrayids = id;
    var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';  
    axios.get( apiurl + `${id.userId}`, { withCredentials: true })
      .then(res => {
          console.log(res)
          setData(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  }, [id.userId])

  function handleChange(event) {
     const { value, name } = event.target;
      setName({
       [name]: value
    });
    console.log(name)
    
    
    
    //setName(event.target.value);
  }

  // function handleChange(event) {
  //   setName(event.target.value);
  // }



  
//   useEffect(() => {
//     var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
    
//     // PUT request using axios inside useEffect React hook
//     const cliente = { name };
//     axios.put(apiurl + `${id.userId}`, { withCredentials: true }, cliente)
//         .then(response => setUpdatedAt(response.data.updatedAt));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

function update (event) {
  event.preventDefault()
  var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
  const client = name
    
      
  
  console.log(name)
  axios.put(apiurl +`${id.userId}`, client,  { withCredentials: true })
  .then(res => console.log(res.data));
}  


// const updateByid = () => {
//     const cliente =  id ;
//     var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
//     axios
//       .post(apiurl + `${id.userId}`,  cliente)
//       .then(data => {
//         console.log(data);
        
//       })
//       .catch(err => alert(err));
      
  
      
//   };

  // useEffect(() => {
  //   console.log("checkSelection", name);
  // }, [name]);


  // useEffect(() => {
  //   console.log("id", id);
  // }, [id]);

    
        // useEffect(()=> {
        //   var apiurl = process.env.REACT_APP_API_URL + '/api/cliente/';
        //   axios.get(apiurl + `${{id}.id}`, { withCredentials: true })
        //     .then(res => {
        //         console.log(res)
        //         setData(res.data)
        //     })
        //     .catch(err =>{
        //         console.log(err)
        //     })
        // }, [id._id])




  
  
  
  
  
  
  
  
  
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear Usuario</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
            {/* <div>
      {posts.map(function(d, idx){
         return (<li key={idx}>{d.apellidoMaterno}</li>)
       })}
      </div> */}
      
      {/* <div>
    {posts.map((person, index) => (
        <p key={index}>Hello, {person.apellidoPaterno} from {person.apellidoMaterno}!</p>
    ))}
    </div> */}
              <span className="userShowUsername">{posts.nombre} {posts.apellidoPaterno}</span>
              
              <span className="userShowUserTitle">{posts.fechaCreacion}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle Cliente</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{posts.nombre} {posts.apellidoPaterno} {posts.apellidoMaterno} </span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{posts.fechaNacimiento}</span>
            </div>
            <span className="userShowTitle">Detalles contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{posts.telefono}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{posts.direccion} </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm" onSubmit={update} >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Apellido Paterno</label>
                <input
                  type="text"
                  name="apellidoPaterno"
                  onChange={handleChange}
                  value={name.apellidoPaterno}
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Apellido Materno</label>
                <input
                  type="text"
                  name="apellidoMaterno"
                  onChange={handleChange}
                  value={name.apellidoMaterno}
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  value={name.nombre}
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha Nacimiento</label>
                <Dates />
                <input
                
                  type="text"
                  name="fechaNacimiento"
                  onChange={handleChange}
                  value={name.fechaNacimiento}
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="newUserItem">
          <label>Sexo</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="false" />
            <label for="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="true" />
            <label for="female">Femenino</label>
          </div>
        </div>
              <div className="userUpdateItem">
                <label>Telefono</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Direccion</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha creacion</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fecha Modificacion</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://www.clipartmax.com/png/full/259-2590807_incognito-logo-vpn-gratis-para-pc.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button type="submit" className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  
  );
  
}


