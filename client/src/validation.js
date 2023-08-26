export default function validation (userData) {

    // eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//validación de errores

  let errors = {};

  if (!userData.email) {
    errors.email = "Se requiere un email"
  } else {
    if (!regexEmail.test(userData.email)) errors.email = "Debe ser un correo electrónico válido"
    if (userData.email.length > 35) errors.email = "Email no puede superar los 35 caracteres"
  }

  if (userData.password.length > 10 || userData.password.length < 6) {
    errors.password = "Pass entre 6 y 10 caracteres"
  }else {
  if (!userData.password.includes(".")) errors.password = "Debe incluir un punto"
  };
  
  return errors; 
};

