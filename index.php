<?php include 'includes/funciones/sesiones.php'; ?>
<?php include 'includes/templates/header.php'; ?>
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
<?php include 'includes/templates/navegacion.php'; ?>

  <header class="encabezado">
    <h1 class="titulo-principal seccion" data-aos="fade-up" data-aos-duration="1000">
      Kyeongju <br><span class="span">Leones Blancos</span><br> TaeKwonDo 
    </h1>
  </header>

  <div class="noticias seccion">
    <section class="avisos"></section>
    <aside>
      <h3>Proximos Eventos <i class="far fa-caret-square-down"></i> <i class="far fa-caret-square-up" style="opacity: 0;"></i></h3>
      <div class="eventos">
        <div class="evento">
          <div class="info-evento">
            <h4>Torneo de Deteccion de Talentos en TaeKwonDo 2020</h4>
            <p>Fecha pospuesta hasta nuevo aviso</p>
          </div>
        </div>
      </div>

      
      <a href="#" class="enlace">Ver todos <i class="fas fa-external-link-alt"></i></a>      
    </aside>
  </div>

  <main>
    <div class="contenedor-definicion contenedor" data-aos="fade-right" data-aos-once="true">
      <div class="definicion seccion">
        <h2>¿Que es el TaeKwonDo?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat reiciendis minima quas dolor perferendis
          rem
          pariatur voluptas quia iusto quos dignissimos, maxime quis impedit sit libero ea ex, consequuntur nobis!</p>
      </div>
    </div>

    <div class="horarios contenedor">
      <h2>Dias y Horarios</h2>
      <div class="info-horarios seccion">
        <div class="card lunes">
          <h3>Lunes y Miercoles</h3>
          <ul>
            <li>
              <p class="hora">6:00 - 7:00 pm</p>
            </li>

            <li>
              <p class="hora">7:00 - 8:00 pm</p>
            </li>

            <li>
              <p class="hora">8:00 - 9:00 pm</p>
            </li>
          </ul>
        </div>

        <div class="card viernes">
          <h3>Viernes</h3>
          <ul>
            <li>
              <p class="hora">6:00 - 7:00 pm</p>
            </li>
            <li>
              <p class="hora">7:00 - 9:00 pm</p>
            </li>
          </ul>
        </div>

        <div class="card sabado">
          <h3>Sabado</h3>
          <ul>
            <li>
              <p class="hora">6:00 - 7:00 pm</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="precios contenedor">
      <h2>Precios</h2>
      <div class="info-precios seccion">
        <div class="inscripcion price-card">
          <!-- <i class="fas fa-user-plus"></i> -->
          <h3>Inscripcion</h3>
          <p>$200</p>
        </div>

        <div class="mensualidad price-card">
          <!-- <i class="far fa-calendar-alt"></i> -->
          <h3>Mensualidad</h3>
          <p>$350</p>
        </div>

        <div class="uniforme price-card">
          <!-- <i class="far fa-calendar-alt"></i> -->
          <h3>Uniforme</h3>
          <p>$250</p>
        </div>

      </div>
    </section>

    <section class="parallax">
      <div>
        <p>¿Interesado?</p>
        <p>Conoce <span>más</span> sobre nosotros</p>
      </div>
      <a href="nosotros.php" class="boton btn-18 btn-primary-red">Nosotros</a>
    </section>

    <div class="slide-show contenedor">
      <!-- Slider main container -->
      <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide"><img src="img/slide1.jpg" alt="Imagen1"></div>
              <div class="swiper-slide"><img src="img/slide2.jpg" alt="Imagen2"></div>
              <div class="swiper-slide"><img src="img/slide3.jpg" alt="Imagen3"></div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
      </div>
    </div>

    <div class="ubicacion">
      <div class="seccion">
        <h2>Ubicacion</h2>
        <div class="ubicacion-info">
          <p>Encuentranos en:</p>
          <p>Avenida Luis Hidalgo Monroy <span>#555</span> Barrio San Miguel Iztapalapa</p>
        </div>

        <div class="enlace-maps">
          <a class="enlace" href="https://www.google.com/maps/search/?api=1&query=Kyeongju+Leones+Blancos+Taekwondo"
            target="_blank">Ver en Google
            Maps <i class="fas fa-external-link-alt"></i></a>
          
        </div>
        <div id="map" class="map"></div>
      </div>
    </div>

  </main>

  <?php include 'includes/templates/footer.php'; ?>