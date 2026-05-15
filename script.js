 /* ===== PREVIEW GAMBAR PORTFOLIO ===== */
    function previewImage(input, imgId, placeholderId) {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.getElementById(imgId);
        const placeholder = document.getElementById(placeholderId);
        img.src = e.target.result;
        img.style.display = 'block';
        placeholder.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }

    /* ===== MOBILE MENU ===== */
    function toggleMenu() {
      const nav = document.getElementById('navLinks');
      const ham = document.getElementById('hamburger');
      nav.classList.toggle('open');
      ham.classList.toggle('active');
    }
    document.getElementById('navLinks').querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');
      });
    });

    /* ===== ACTIVE NAV ===== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    function onScroll() {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
      const btn = document.getElementById('scrollTop');
      if (window.scrollY > 300) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }
    window.addEventListener('scroll', onScroll);

    /* ===== SCROLL TO SECTION ===== */
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    /* ===== INTERSECTION OBSERVER ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width;
          });
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    /* ===== FORM SUBMIT ===== */
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.btn-send');
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = 'linear-gradient(90deg,#28a745,#34d058)';
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }

    /* ===== HAMBURGER ANIMATION ===== */
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', () => {
      const spans = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });