// const Cleave = require('cleave.js');
// const Swal = require('sweetalert2');

document.addEventListener('DOMContentLoaded', () => {
  const formRegistro = document.querySelector('#registro .form-usuario');
  const inputNombre = document.querySelector('#nombre');
  const inputPaterno = document.querySelector('#apPaterno');
  const inputMaterno = document.querySelector('#apMaterno');
  const selectMes = document.querySelector('#mes');
  const selectDia = document.querySelector('#dia');
  selectDia.disabled = true;
  const selectAño = document.querySelector('#año');
  selectAño.disabled = true;
  let edad;
  const selectCinta = document.querySelector('#cinta');
  const selectGrado = document.querySelector('#grado');
  const inputTutor = document.querySelector('#tutor');
  const inputTelefono = document.querySelector('#telefono');
  const inputCorreo = document.querySelector('#correo');
  const inputPassword = document.querySelector('#password_registro');
  const camposFormulario = {
    nombre: '',
    paterno: '',
    materno: '',
    mes: '',
    año: '',
    dia: '',
    cinta: '',
    grado: '',
    tutor: '',
    telefono: '',
    correo: '',
    password: '',
  };

  // Si el año seleccionado es bisiesto y el mes seleccionado es febrero se agrega un dia 29
  // de lo contrario se revisa que si existe un 29 este elemento se elimina
  function toggleLeapOption() {
    if (selectMes.value !== '' && selectAño.value !== '') {
      const selectedYear = selectAño.value;

      if (selectedYear % 4 === 0 && selectMes.value === '2') {
        const leapOption = document.createElement('option');
        leapOption.setAttribute('value', 29);
        leapOption.textContent = 29;
        selectDia.appendChild(leapOption);
      } else if (selectedYear % 4 !== 0 && selectMes.value === '2' && selectDia.lastChild.value === '29') {
        selectDia.lastChild.remove();
      }
    }
  }
  function setEdad() {
    if (selectMes.value !== '' && selectAño.value !== '' && selectDia.value !== '') {
      const actualDate = new Date();
      const actualYear = actualDate.getFullYear();
      const actualMonth = actualDate.getMonth() + 1;
      const actualDay = actualDate.getDate();
      edad = actualYear - selectAño.value;

      if (edad === 18) {
        if (actualMonth < selectMes.value) {
          edad--;
        } else if (selectMes.value === actualMonth.toString()) {
          if (selectDia.value <= actualDay) {
            edad--;
          }
        }
      }

      inputTutor.removeAttribute('disabled');

      if (edad >= 18) {
        camposFormulario.tutor = 'correcto';
        inputTutor.required = false;
        document.querySelector('.label-optional').style.display = 'block';
      } else {
        camposFormulario.tutor = '';
        inputTutor.required = true;
        document.querySelector('.label-optional').style.display = 'none';
      }
    }
  }
  // Llena las opciones del select año de 1960 al año actual
  function cargarSelectAños() {
    selectAño.innerHTML = '';
    const actualYear = new Date().getFullYear();
    for (let i = actualYear; i >= 1960; i--) {
      const option = document.createElement('option');
      option.setAttribute('value', i);
      option.textContent = i;
      selectAño.appendChild(option);
    }
    const option = document.createElement('option');
    option.setAttribute('value', '');
    const attrDisabled = document.createAttribute('disabled');
    option.setAttributeNode(attrDisabled);
    const attrSelected = document.createAttribute('selected');
    option.setAttributeNode(attrSelected);
    selectAño.insertBefore(option, selectAño.children[0]);
    selectAño.disabled = false;
  }
  // Llena el select 'dia' con el numero de dias dependiendo el mes seleccionado
  selectMes.addEventListener('change', (e) => {
    const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const mesSeleccionado = e.target.value - 1;
    selectDia.innerHTML = '';
    for (let i = 0; i < diasMes[mesSeleccionado]; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', i + 1);
      option.textContent = i + 1;
      selectDia.appendChild(option);
    }
    const option = document.createElement('option');
    option.setAttribute('value', '');
    const attrSelected = document.createAttribute('selected');
    option.setAttributeNode(attrSelected);
    const attrDisabled = document.createAttribute('disabled');
    option.setAttributeNode(attrDisabled);
    selectDia.insertBefore(option, selectDia.children[0]);
    selectDia.disabled = false;
    toggleLeapOption();
    setEdad();
    cargarSelectAños();
  });

  selectAño.addEventListener('change', () => {
    toggleLeapOption();
    setEdad();
  });

  selectDia.addEventListener('change', () => {
    setEdad();
  });

  selectCinta.addEventListener('change', (e) => {
    const cintaSelected = e.target.value;
  });

  function campoError(e) {
    const campo = e.target.parentNode;
    const errorIcon = campo.querySelector('.fa-times-circle');
    const correctoIcon = campo.querySelector('.fa-check-circle');
    errorIcon.classList.add('icon-error');
    errorIcon.style.opacity = '1';
    correctoIcon.classList.remove('icon-correcto');
    correctoIcon.style.opacity = '0';
    e.target.classList.add('error');
  }

  function campoCorrecto(e) {
    const campo = e.target.parentNode;
    const errorIcon = campo.querySelector('.fa-times-circle');
    const correctoIcon = campo.querySelector('.fa-check-circle');
    errorIcon.classList.remove('icon-error');
    errorIcon.style.opacity = '0';
    correctoIcon.classList.add('icon-correcto');
    correctoIcon.style.opacity = '1';
    e.target.classList.remove('error');
  }

  // Se encarga de asegurar que en los input de tipo texto solo puedan escribirse letras
  // a diferencia del input para el telefono que solo debe aceptar numeros y guiones
  document.querySelectorAll('.input').forEach((input) => {
    input.addEventListener('input', (e) => {
      const inputBlured = e.target;
      const inputText = inputBlured.value;

      if (inputBlured.id === 'nombre' || inputBlured.id === 'apPaterno' || inputBlured.id === 'apMaterno' || inputBlured.id === 'tutor') {
        inputBlured.value = inputText.replace(/[^a-z ]/gi, '');
      } else if (inputBlured.id === 'telefono') {
        inputBlured.value = inputText.replace(/[^0-9-]/g, '');
      }

      const campo = e.target.parentNode;
      const errorIcon = campo.querySelector('.fa-times-circle');
      const correctoIcon = campo.querySelector('.fa-check-circle');

      if (inputBlured.value !== '') {
        errorIcon.classList.remove('icon-error');
        errorIcon.style.opacity = '0';
        correctoIcon.classList.remove('icon-correcto');
        correctoIcon.style.opacity = '0';
        e.target.classList.remove('error');
      }
    });
  });

  const cleavePhone = new Cleave('#telefono', {
    phone: true,
    delimiter: '-',
    phoneRegionCode: 'MX',
  });
  function validInput(e) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  }
  function invalidInput(e) {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }

  inputNombre.addEventListener('blur', (e) => {
    if (/^([a-zA-Z]+\s?)+$/gi.test(inputNombre.value)) {
      camposFormulario.nombre = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.nombre = '';
      invalidInput(e);
      campoError(e);
    }
  });
  inputPaterno.addEventListener('blur', (e) => {
    if (/^\w+\s?\w+?\s?\w+?$/gi.test(inputPaterno.value)) {
      camposFormulario.paterno = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.paterno = '';
      invalidInput(e);
      campoError(e);
    }
  });
  inputMaterno.addEventListener('blur', (e) => {
    if (/^\w+\s?\w+?\s?\w+?$/gi.test(inputMaterno.value)) {
      camposFormulario.materno = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.materno = '';
      invalidInput(e);
      campoError(e);
    }
  });
  selectMes.addEventListener('blur', (e) => {
    if (selectMes.value !== '') {
      camposFormulario.mes = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.mes = '';
      invalidInput(e);
      campoError(e);
    }
  });
  selectAño.addEventListener('blur', (e) => {
    if (selectAño.value !== '') {
      camposFormulario.año = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.año = '';
      invalidInput(e);
      campoError(e);
    }
  });
  selectDia.addEventListener('blur', (e) => {
    if (selectDia.value !== '') {
      camposFormulario.dia = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.dia = '';
      invalidInput(e);
      campoError(e);
    }
  });
  selectCinta.addEventListener('blur', (e) => {
    if (selectCinta.value !== '') {
      camposFormulario.cinta = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.cinta = '';
      invalidInput(e);
      campoError(e);
    }
  });
  selectGrado.addEventListener('blur', (e) => {
    if (selectGrado.value !== '') {
      camposFormulario.grado = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.grado = '';
      invalidInput(e);
      campoError(e);
    }
  });
  inputTutor.addEventListener('blur', (e) => {
    if (edad < 18 || (edad >= 18 && inputTutor.value !== '')) {
      if (/^(\w+\s+\w+\s?)+$/gi.test(inputTutor.value)) {
        camposFormulario.tutor = 'correcto';
        validInput(e);
        campoCorrecto(e);
      } else {
        camposFormulario.tutor = '';
        invalidInput(e);
        campoError(e);
      }
    }
    console.log(camposFormulario.tutor);
  });
  inputTelefono.addEventListener('blur', (e) => {
    const telefono = cleavePhone.getRawValue();
    if (telefono.length !== 10) {
      campoError(e);
      invalidInput(e);
      camposFormulario.telefono = '';
    } else if (telefono.length === 10) {
      if (/^(\d\d-)(\d{4}-?){2}$/g.test(e.target.value)) {
        camposFormulario.telefono = 'correcto';
        campoCorrecto(e);
        validInput(e);
      }
    }
  });
  inputCorreo.addEventListener('blur', (e) => {
    if (
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(
        inputCorreo.value
      )
    ) {
      camposFormulario.correo = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.correo = '';
      invalidInput(e);
      campoError(e);
    }
  });
  inputPassword.addEventListener('blur', (e) => {
    if (e.target.value !== '') {
      camposFormulario.password = 'correcto';
      validInput(e);
      campoCorrecto(e);
    } else {
      camposFormulario.password = '';
      invalidInput(e);
      campoError(e);
    }
  });

  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    let errores = 0;

    Object.keys(camposFormulario).forEach((campo) => {
      if (camposFormulario[campo] === '') {
        errores++;
      }
    });
    if (errores !== 0) {
      alert('Rellene todos los campos correctamente');
    } else {
      const data = new FormData(formRegistro);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'includes/modelos/modelo-usuario.php', true);
      xhr.onload = function xhrLoad() {
        if (this.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          if (response.respuesta === 'exito') {
            Swal.fire({
              title: response.titulo,
              text: response.texto,
              icon: response.tipo,
              confirmButtonText: 'Iniciar Sesion',
            }).then((result) => {
              if (result.value) {
                window.location.href = 'index.php?login=true';
              }
            });
          } else {
            Swal.fire({
              title: response.titulo,
              text: response.texto,
              icon: response.tipo,
              confirmButtonText: 'Aceptar',
            });
          }
        } else {
          Swal.fire({
            title: 'Ocurrio un error',
            text: 'Error al realizar la peticion, intente mas tarde',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      };
      xhr.send(data);
    }
  });
});
