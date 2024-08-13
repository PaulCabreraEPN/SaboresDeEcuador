import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [paraTipoUsuario, setParaTipoUsuario] = useState("cliente");

    const handleRegClick = () => {
        navigate('/registro');
    };


    
    const handleCancel = () => {
        navigate('/');
    };

    const cambioUsuario = (event) => {
        setParaTipoUsuario(event.target.value);
    };

    const manejarLogin = () => {
        let email = document.getElementById("inputEmail").value.trim();
        let contrasenia1 = document.getElementById("inputPassword").value.trim();
        let correo = "cliente@gmail.com";
        let contrasenia2 = "Cliente01";

        let error1 = document.getElementById("errorEmail");
        let error2 = document.getElementById("errorContrasenia");

        error1.textContent = "";
        error2.textContent = "";

        if (email === "") {
            error1.textContent = "El campo correo se encuentra vacío";
        } else if (email !== correo) {
            error1.textContent = "El correo es incorrecto";
        }

        if (contrasenia1 === "") {
            error2.textContent = "El campo contraseña se encuentra vacío";
        } else if (contrasenia1 !== contrasenia2) {
            error2.textContent = "La contraseña es incorrecta";
        }

        if (email === correo && contrasenia1 === contrasenia2) {
            if (paraTipoUsuario === "cliente") {
                window.location.href = "/"; 
            } else if (paraTipoUsuario === "administrador") {
                window.location.href = "/InicioMarcas";
            }
        }
    };

    return (
        <div>
            <img src={logo} alt="logo" width={'90px'} />
            <div className="combobox-container mb-4 row">
                <label htmlFor="userType" className="col-sm-1 col-form-label">Tipo de Usuario</label>
                <div className="col-sm-2">
                    <select
                        className="form-control"
                        id="userType"
                        value={paraTipoUsuario}
                        onChange={cambioUsuario}
                    >
                        <option value="administrador">Marcas</option>
                        <option value="cliente">Cliente</option>
                    </select>
                </div>
            </div>

            <div>
                <img src={user} alt="user" className="user" width={'90px'} />
                <div className="contenedor-login">
                    <div className="mb-3 row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail" />
                            <div id="errorEmail" className="text-danger"></div> {/* Error de email */}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                            <div id="errorContrasenia" className="text-danger"></div> {/* Error de contraseña */}
                        </div>
                    </div>

                    <button type="button" className="btn btn-success" onClick={manejarLogin}>
                        Iniciar Sesión
                    </button>
                    <br /><br />
                    <button type="button" onClick={handleCancel} className="btn btn-secondary">
                        Cancelar
                    </button>
                    <br /><br />
                    <p>¿Olvidaste tu contraseña?</p>
                    <p>No tienes cuenta? <a onClick={handleRegClick}>Regístrate</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;