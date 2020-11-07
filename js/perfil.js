function hideElement(element, action) {
  element.style.opacity = '0';
  if (action === 'display') {
    setTimeout(() => {
      element.style.display = 'none';
    }, 100);
  } else {
    setTimeout(() => {
      element.style.visibility = 'hidden';
    }, 100);
  }
}

function showElement(element, action) {
  if (action === 'display') {
    element.style.display = 'inline-block';
  } else {
    element.style.visibility = 'visible';
  }
  setTimeout(() => {
    element.style.opacity = '1';
  }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.screen.width;
  const logoimg = document.querySelector('.logo img');
  const pushMenu = document.querySelector('.push-menu');
  const sidebar = document.querySelector('.sidebar');
  const nombreSidebar = document.querySelector('.user-info h3');
  const navlinkText = document.querySelectorAll('.nav-link p');

  function setMobileSidebar() {
    windowWidth = window.screen.width;

    if (windowWidth < 768) {
      if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.remove('sidebar-collapse');
        sidebar.classList.add('sidebar-mobile-closed');
      }
    } else if (!sidebar.classList.contains('sidebar-collapse')) {
      sidebar.classList.remove('sidebar-mobile-closed');
      sidebar.classList.remove('sidebar-mobile-open');
      sidebar.classList.add('sidebar-open');
    }
  }

  setMobileSidebar();

  window.addEventListener('resize', setMobileSidebar);

  pushMenu.addEventListener('click', () => {
    if (windowWidth < 768) {
      if (sidebar.classList.contains('sidebar-mobile-closed')) {
        sidebar.classList.remove('sidebar-mobile-closed');
        sidebar.classList.add('sidebar-mobile-open');
      } else {
        sidebar.classList.remove('sidebar-mobile-open');
        sidebar.classList.add('sidebar-mobile-closed');
      }
    } else if (sidebar.classList.contains('sidebar-open')) {
      sidebar.classList.remove('sidebar-open');
      sidebar.classList.add('sidebar-collapse');
      logoimg.style.width = '55px';
      hideElement(nombreSidebar, 'visibility');
    } else if (sidebar.classList.contains('sidebar-collapse')) {
      sidebar.classList.remove('sidebar-collapse');
      sidebar.classList.add('sidebar-open');
      logoimg.style.width = '';
      showElement(nombreSidebar, 'visibility');
    }
  });

  if (windowWidth >= 768) {
    if (document.querySelector('.sidebar-open')) {
      setTimeout(() => {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-collapse');
        logoimg.style.width = '55px';
        hideElement(nombreSidebar);
      }, 1500);
    }
  }

  let moveX = 0;
  let x = 0;
  let open = false;

  window.addEventListener('touchstart', (e) => {
    x = e.touches[0].clientX;
    // console.log(`Start: ${x}`);
  });

  window.addEventListener('touchmove', (e) => {
    let move;

    if (!open) {
      moveX = e.touches[0].clientX - x;

      if (moveX > 40) {
        if (moveX <= 200) {
          move = moveX;
        } else {
          move = 200;
        }
      } else {
        move = 0;
      }

      anime({
        targets: '.sidebar.sidebar-mobile-closed',
        translateX: `${move}px`,
        duration: 500,
        easing: 'easeOutQuint',
      });
    } else if (open) {
      moveX = x - e.touches[0].clientX;

      if (moveX > 0) {
        if (moveX <= 200) {
          move = 200 - moveX;
        } else {
          move = 200;
        }
      } else {
        move = 200;
      }

      anime({
        targets: '.sidebar.sidebar-mobile-closed',
        translateX: `${move}px`,
        duration: 500,
        easing: 'easeOutQuint',
      });
    }
  });

  window.addEventListener('touchend', () => {
    x = 0;
    // console.log(`End: ${moveX}`);

    if (!open) {
      if (moveX >= 100) {
        anime({
          targets: '.sidebar.sidebar-mobile-closed',
          translateX: '200px',
          duration: 500,
          easing: 'easeOutQuint',
        });
        open = true;
      } else if (moveX > 40 && moveX < 100) {
        anime({
          targets: '.sidebar.sidebar-mobile-closed',
          translateX: '0px',
          duration: 500,
          easing: 'easeOutQuint',
        });
        open = false;
      }
    } else if (open) {
      if (moveX >= 100) {
        anime({
          targets: '.sidebar.sidebar-mobile-closed',
          translateX: '0px',
          duration: 500,
          easing: 'easeOutQuint',
        });
        open = false;
      } else if (moveX > 0 && moveX < 100) {
        anime({
          targets: '.sidebar.sidebar-mobile-closed',
          translateX: '200px',
          duration: 500,
          easing: 'easeOutQuint',
        });
        open = true;
      }
    }
    moveX = 0;
    // console.log(open);
  });
});
