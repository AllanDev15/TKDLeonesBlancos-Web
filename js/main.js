document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#index')) {
    // const map = L.map('map').setView([19.354144, -99.07461], 18);

    const map = L.map('map', {
      center: [19.354144, -99.07461],
      zoom: 18,
      dragging: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([19.354144, -99.07461]).addTo(map).bindPopup('TaeKwonDo<br>Leones').openPopup();
  }

  const body = document.querySelector('body');
  const botonCuenta = document.querySelector('.cuenta');
  const formLogin = document.querySelector('.form-login');

  // Muestra u oculta la navegacion en mobil
  if (body.id !== 'registro' && body.id !== 'perfil') {
    document.querySelector('.menu').addEventListener('click', () => {
      const navegacion = document.querySelector('.navegacion');

      if (navegacion.style.display === 'none') {
        navegacion.style.display = 'block';
        navegacion.style.top = `${document.querySelector('.contenedor-navegacion').offsetHeight}px`;

        let alturaNavMobil = Number(document.querySelector('.contenedor-navegacion').offsetHeight) + Number(document.querySelector('.navegacion').offsetHeight);
        alturaNavMobil += 'px';
        botonCuenta.style.display = 'block';
        botonCuenta.style.top = alturaNavMobil;
        if (body.id === 'index') {
          document.querySelector('.navegacion a:nth-child(1)').classList.add('indicator-mobil');
        } else if (body.id === 'nosotros' || body.id === 'Nosotros') {
          document.querySelector('.navegacion a:nth-child(2)').classList.add('indicator-mobil');
        }
      } else {
        navegacion.style.display = 'none';
        botonCuenta.style.display = 'none';
      }
    });

    const cuenta = document.querySelector('#cuenta');
    const perfil = document.querySelector('#perfil');

    if (cuenta) {
      cuenta.addEventListener('click', () => {
        cuenta.classList.add('boton-activo');
        document.querySelector('.login').style.visibility = 'visible';
        document.querySelector('.login').style.opacity = '1';
        document.querySelector('.modal').style.display = 'block';
        if (window.screen.width < 1024) {
          if (document.querySelector('.navegacion').style.display === 'block') {
            document.querySelector('.navegacion').style.display = 'none';
            cuenta.style.display = 'none';
          }
        }
      });
    }
    if (perfil) {
      perfil.addEventListener('click', () => {
        const opciones = document.querySelector('.opciones-cuenta');
        opciones.style.display = 'block';
        setTimeout(() => {
          opciones.style.opacity = '1';
        }, 10);
        document.querySelector('.modal').style.display = 'block';
      });
    }

    const modal = document.querySelector('.modal');
    if (modal) {
      modal.addEventListener('click', () => {
        const opciones = document.querySelector('.opciones-cuenta');
        opciones.style.opacity = '0';
        setTimeout(() => {
          opciones.style.display = 'none';
        }, 300);

        document.querySelector('.cuenta').classList.remove('boton-activo');
        // document.querySelector('.login').style.visibility = 'hidden';
        document.querySelector('.login').removeAttribute('style');
        body.classList.remove('no-scroll');
        document.querySelector('.modal').style.display = 'none';
        // document.querySelector('.login form').reset();
      });
    }
  }

  // Controla el movimiento de la navegacion
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const navegacion = document.querySelector('.contenedor-navegacion');

    if (scroll > 0) {
      navegacion.style.position = 'fixed';
      body.style.marginTop = `${navegacion.offsetHeight}px`;
    } else {
      navegacion.style.position = 'relative';
      body.style.marginTop = '0px';
    }
  });

  const windowWidth = window.screen.width;
  let eventosHeader;
  let eventosDown;
  let eventosUp;
  let eventos;
  let numeroEventos;
  let enlaceEventos;

  function mostrarEventos() {
    if (eventos.style.height === '0px') {
      eventos.style.height = 'auto';
      eventosDown.style.opacity = 0;
      eventosUp.style.opacity = 1;
      if (numeroEventos.length > 2) {
        eventos.style.overflowY = 'scroll';
      } else {
        eventos.style.overflow = 'visible';
      }
      setTimeout(() => {
        numeroEventos.forEach((evento) => {
          // eslint-disable-next-line no-param-reassign
          evento.style.opacity = 1;
        });
      }, 100);
      enlaceEventos.style.display = 'block';
    } else {
      eventos.style.height = '0px';
      eventosUp.style.opacity = 0;
      eventosDown.style.opacity = 1;
      eventos.style.overflow = 'hidden';
      numeroEventos.forEach((evento) => {
        // eslint-disable-next-line no-param-reassign
        evento.style.opacity = 0;
      });
      enlaceEventos.style.display = 'none';
    }
  }

  if (windowWidth >= 1024) {
    document.querySelector('.navegacion').style.display = 'flex';
  }

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
  function validInput(e) {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  }
  function invalidInput(e) {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  }

  if (body.id === 'index') {
    // Mostrar u ocultar los eventos en movil
    eventosHeader = document.querySelector('.noticias aside h3');
    eventosDown = document.querySelector('aside h3 i:nth-child(1)');
    eventosUp = document.querySelector('aside h3 i:nth-child(2)');
    eventos = document.querySelector('.eventos');
    numeroEventos = document.querySelectorAll('.evento');
    enlaceEventos = document.querySelector('aside a.enlace');
    // console.log(windowWidth);

    if (windowWidth < 1024) {
      eventos.style.height = '0px';
      eventos.style.overflow = 'hidden';
      enlaceEventos.style.display = 'none';
      eventosHeader.addEventListener('click', mostrarEventos, false);
      eventosHeader.addEventListener('touchStart', mostrarEventos, false);
    } else {
      eventos.style.height = '355px';
      enlaceEventos.style.display = 'block';
      if (numeroEventos.length >= 4) {
        eventos.style.overflowY = 'scroll';
      } else {
        eventos.style.overflow = 'visible';
      }
    }

    const usuarioInput = document.querySelector('#usuario');
    const passwordInput = document.querySelector('#password');

    usuarioInput.addEventListener('input', (e) => {
      if (
        // eslint-disable-next-line no-control-regex
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(
          e.target.value
        )
      ) {
        validInput(e);
        campoCorrecto(e);
      } else {
        invalidInput(e);
        campoError(e);
      }
    });
    passwordInput.addEventListener('input', (e) => {
      if (e.target.value !== '') {
        validInput(e);
        campoCorrecto(e);
      } else {
        invalidInput(e);
        campoError(e);
      }
    });

    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      if (usuarioInput.value !== '' && passwordInput !== '') {
        if (
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(
            usuarioInput.value
          )
        ) {
          const loginData = new FormData();
          loginData.append('accion', 'login');
          loginData.append('usuario', usuarioInput.value);
          loginData.append('password', passwordInput.value);

          const xhr = new XMLHttpRequest();

          xhr.open('POST', 'includes/modelos/modelo-usuario.php', true);
          document.querySelector('.container-loader').style.display = 'flex';
          setTimeout(() => {
            document.querySelector('.container-loader').style.opacity = '1';
          }, 100);
          document.querySelector('.loader').style.display = 'block';
          body.style.overflow = 'hidden';

          xhr.onload = function xhrLoad() {
            if (this.status === 200) {
              const response = JSON.parse(xhr.responseText);
              if (response.respuesta === 'exito') {
                window.location.href = 'index.php';
              } else if (response.respuesta === 'error') {
                Swal.fire({
                  title: response.titulo,
                  text: response.texto,
                  icon: response.tipo,
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
            document.querySelector('.container-loader').style.opacity = '0';
            setTimeout(() => {
              document.querySelector('.container-loader').style.display = 'none';
            }, 300);
            document.querySelector('.loader').style.display = 'none';
            body.style.overflow = '';
          };
          xhr.send(loginData);
        }
      }
    });
  } else if (body.id === 'nosotros' || body.id === 'Nosotros') {
    if (document.querySelector('.navegacion a:nth-child(2)')) {
      document.querySelector('.navegacion a:nth-child(2)').classList.add('indicator-mobil');
    }
  }

  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    /* scrollbar: {
                el: '.swiper-scrollbar',
            }, */

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
});

$(window).ready(function () {
  AOS.init();
});
