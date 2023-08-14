import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginLayout.css';
import {useState} from 'react';
import Swal from 'sweetalert2';


function LoginLayout({isLoggedIn, setIsLoggedIn}) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Declaración del estado y la función setMessage

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setMessage('Enviando solicitud...'); 
  
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Username,
          Password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
       
        
          Swal.fire({
            icon: 'success',
            title: 'Inicio de Sesión Exitoso',
            text: data.message,
          });
          setIsLoggedIn(true);
          setMessage(data.message);
          setUsername(data.username);
         
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Inicio de Sesión Fallido',
          text: data.message,
        });
        setIsLoggedIn(false);
        setMessage(data.message);
        
      }
      setMessage(data.message); // Actualiza el estado del mensaje con la respuesta del servidor
    } catch (error) {
      setMessage('Error en la solicitud: ' + error.message);
      console.error('Error al enviar la solicitud:', error);
    } 
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ maxWidth: '500px' }}>
        <img src="et7.png" alt="Logo" className="logo-image" />
        <form onSubmit = {handleSubmit}>
        <div className="form-floating m-2 position-relative">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="user"
            onChange = {handleUsernameChange}
            
          />
          <label htmlFor="floatingInput">Nombre de usuario</label>
        </div>
        <div className="form-floating m-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange = {handlePasswordChange}
            
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary button-form mx-auto ">
          Ingresar
        </button>
        </form>
         
      </div>
       
    </div>

  );

  
}

export default LoginLayout;
