

<footer class="contenedor">
    <div class="footer-container">
      <div class="footer-contacto footer-section">
        <h3>Contacto</h3>
        <ul>
          <li class="footer-lst-element">
            <div class="footer-icon">
              <i class="fab fa-whatsapp"></i>
            </div> 
            55-18-71-15-23
          </li>
          <li class="footer-lst-element">
            <div class="footer-icon">
              <i class="fab fa-facebook-f"></i>
            </div> 
            <a href="https://www.facebook.com/Kyeongju-Leones-Blancos-Taekwondo-340236622763271/" class="enlace-footer">Kyeongju "Leones Blancos" TaeKwonDo</a>
          </li>
          <li class="footer-lst-element">
            <div class="footer-icon">
              <i class="far fa-envelope"></i>
            </div> 
            arqleotkd@hotmail.com
          </li>
        </ul>
      </div>
      <div class="footer-enlaces footer-section">
        <h3>Enlaces</h3>
        <nav>
          <a href="index.php" class="enlace-footer footer-lst-element">Inicio</a>
          <a href="nosotros.php" class="enlace-footer footer-lst-element">Nosotros</a>
          <a href="eventos.php" class="enlace-footer footer-lst-element">Eventos</a>
          
        </nav>
      </div>
    </div>
    <hr>
    <div class="copyright">
      <p>Design <a href="#" class="enlace">Paulette Villegas</a> | Development <a href="#" class="enlace">Allan Flores</a></p>
    </div>
  </footer>

  <script src="js/vendor/modernizr-3.8.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.4.1.min.js"><\/script>')</script>
  <script src="js/plugins.js"></script>

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>

  <?php 
  $paginaActual = obtenerPaginaActual();
  if($paginaActual == 'index'): ?>
    <script src="js/leaflet.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <?php elseif ($paginaActual === 'registro'):?>
    <script src="js/registro.js"></script>
    <script src="https://unpkg.com/imask"></script>
    <script src="node_modules/cleave.js/dist/cleave.min.js"></script>
    <script src="node_modules/cleave.js/dist/addons/cleave-phone.mx.js"></script>
  <?php elseif ($paginaActual === 'perfil'): ?>
    <script src="js/perfil.js"></script>
    <script src="js/registro.js"></script>
    <script src="js/datosUsuario.js"></script>
    <script src="node_modules/cleave.js/dist/cleave.min.js"></script>
    <script src="node_modules/cleave.js/dist/addons/cleave-phone.mx.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
  <?php endif; ?>
  <script src="node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
  
</body>

</html>