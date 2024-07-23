import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registro.css';
import logo from './imagenes/MainLogo.png';

const Registro = () => {
    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        const user = document.getElementById('user').value;
        const email = document.getElementById('email').value;
        const telef = document.getElementById('phone').value;
        const contra = document.getElementById('password').value;
        const contraC = document.getElementById('confirmPassword').value;

        if (!user) {
            formErrors.user = "Nombre es obligatorio";
            isValid = false;
        }

        if (!email) {
            formErrors.email = "Correo Electrónico es obligatorio";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Correo Electrónico inválido";
            isValid = false;
        }

        if (!telef) {
            formErrors.telef = "Telefono es obligatorio";
            isValid = false;
        } else if (!/^\d{10}$/.test(telef)) {
            formErrors.telef = "Telefono debe contener exactamente 10 dígitos";
            isValid = false;
        }

        if (!contra) {
            formErrors.contra = "Contraseña es obligatoria";
            isValid = false;
        } else if (contra.length < 8) {
            formErrors.contra = "Contraseña debe contener al menos 8 caracteres";
            isValid = false;
        } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(contra)) {
            formErrors.contra = "Contraseña debe contener caracteres y dígitos numéricos";
            isValid = false;
        }

        if (contra !== contraC) {
            formErrors.contraC = "Las contraseñas no coinciden";
            isValid = false;
        }

        const errorElements = document.querySelectorAll('.text-danger');
        errorElements.forEach(el => el.remove());

        if (!isValid) {
            for (const [key, value] of Object.entries(formErrors)) {
                const errorElement = document.createElement('small');
                errorElement.className = 'text-danger';
                errorElement.innerText = value;
                document.getElementById(key).parentElement.appendChild(errorElement);
            }
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado con éxito');
        }
    };

    useEffect(() => {
        const registerButton = document.getElementById('registerButton');
        if (registerButton) {
            registerButton.addEventListener('click', handleSubmit);
        }

        return () => {
            if (registerButton) {
                registerButton.removeEventListener('click', handleSubmit);
            }
        };
    }, []);

    return (
        <section className="container mt-5 registro">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4 logo">
                    <img src={logo}  alt="logo" width={'150px'}/> 
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Crea tu cuenta</h2>
                            <form id="quiz-form">
                                <div className="form-group">
                                    <label htmlFor="user">Nombre</label>
                                    <input type="text" name="user" id="user" className="form-control" placeholder="Nombre Apellido" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="correo@ejemplo.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefono</label>
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="0912345678" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="********" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="********" />
                                </div>
                                <br />
                                <div className="text-center">
                                    <button type="button" id="registerButton" className="btn btn-primary mr-2">Registrarse</button>
                                    <br /><br />
                                    <button type="button" className="btn btn-secondary">Cancelar</button>
                                </div>
                            </form>
                            <div id="results"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pie">.</div>
        </section>
    );
};

export default Registro;