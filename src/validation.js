export default function validation () {


    // eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//validación de errores
export function validate (inputs) {
  let errors = {};

  if (!inputs.name) errors.name = "Se requiere un nombre"
  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico"
  if (!inputs.message) errors.message = "Se requiere un mensaje"
  return errors; 
};


};

/*
ejercicio 4
EMAIL

el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
el nombre de usuario no puede estar vacío.
el nombre de usuario no puede tener más de 35 caracteres.
PASSWORD

la contraseña tiene que tener al menos un número.
la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
¡No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar. */