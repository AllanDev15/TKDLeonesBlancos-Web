document.addEventListener('DOMContentLoaded', () => {
  const btnEditar = document.querySelector('div button');
  const btnGuardar = document.querySelector('#actualizarDatos');
  const inputs = document.querySelectorAll('.input_perfil:not(#año):not(#dia)');

  // Formulario
  const nombre = document.querySelector('#nombre');
  const paterno = document.querySelector('#apPaterno');
  const materno = document.querySelector('#apMaterno');
  const mesNac = document.querySelector('#mes');
  const añoNac = document.querySelector('#año');
  const diaNac = document.querySelector('#dia');
  const cinta = document.querySelector('#cinta');
  const grado = document.querySelector('#grado');
  const tutor = document.querySelector('#tutor');
  const telefono = document.querySelector('#telefono');
  let edad;

  function setEdad() {
    if (mesNac.value !== '' && añoNac.value !== '' && diaNac.value !== '') {
      const actualDate = new Date();
      const actualYear = actualDate.getFullYear();
      const actualMonth = actualDate.getMonth() + 1;
      const actualDay = actualDate.getDate();
      edad = actualYear - añoNac.value;

      if (edad === 18) {
        if (actualMonth < mesNac.value) {
          edad--;
        } else if (mesNac.value === actualMonth.toString()) {
          if (diaNac.value <= actualDay) {
            edad--;
          }
        }
      }

      // tutor.removeAttribute('disabled');
      if (edad >= 18) {
        tutor.required = false;
        document.querySelector('.label-optional').style.display = 'block';
      } else {
        tutor.required = true;
        document.querySelector('.label-optional').style.display = 'none';
      }
    }
  }
  setEdad();

  añoNac.addEventListener('change', () => {
    setEdad();
  });
  diaNac.addEventListener('change', () => {
    setEdad();
  });

  btnEditar.addEventListener('click', () => {
    inputs.forEach((element) => {
      element.removeAttribute('disabled');
    });
    btnGuardar.disabled = false;
  });

  btnGuardar.addEventListener('click', (e) => {
    let validos = true;
    e.preventDefault();

    const datos = {
      nombre: nombre.value,
      paterno: paterno.value,
      materno: materno.value,
      mesNac: mesNac.value,
      añoNac: añoNac.value,
      diaNac: diaNac.value,
      cinta: cinta.value,
      grado: grado.value,
      tutor: tutor.value,
      telefono: telefono.value,
    };

    if (edad >= 18) {
      delete datos.tutor;
    }

    const keys = Object.keys(datos);
    let i = 0;
    Object.values(datos).forEach((valor) => {
      if (valor === '') {
        alert(`${keys[i]} esta vacio`);
        validos = false;
      }
      i++;
    });

    if (validos) {
      const data = new FormData();
      data.append('nombre', nombre.value);
      data.append('apPaterno', paterno.value);
      data.append('apMaterno', materno.value);
      data.append('mes', mesNac.value);
      data.append('año', añoNac.value);
      data.append('dia', diaNac.value);
      data.append('cinta', cinta.value);
      data.append('grado', grado.value);
      data.append('tutor', tutor.value);
      data.append('telefono', telefono.value);
      data.append('accion', document.querySelector('#accion').value);
      data.append('id', document.querySelector('#id').value);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'includes/modelos/modelo-usuario.php', true);
      xhr.onload = function () {
        if (this.status === 200) {
          console.log(JSON.parse(xhr.responseText));
        }
      };
      xhr.send(data);

      inputs.forEach((element) => {
        element.setAttribute('disabled', true);
      });
      btnGuardar.disabled = true;
    }
  });
});
