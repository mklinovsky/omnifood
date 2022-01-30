(() => {
  'use strict';

  const getHeader = () => document.querySelector('.header');

  const handleMobileNav = () => {
    const header = getHeader();

    document.querySelector('.close-menu').addEventListener('click', () => {
      header.classList.remove('nav-open');
    });

    document.querySelector('.open-menu').addEventListener('click', () => {
      header.classList.add('nav-open');
    });
  };

  const setYear = () => {
    document.querySelector('.year').textContent = new Date().getFullYear();
  };

  const handleScroll = () => {
    const linkClick = (e, href) => {
      e.preventDefault();

      if (href === '#') {
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        const sectionName = href.replace('#', '');
        const section = document.getElementById(sectionName);
        section.scrollIntoView({ behavior: 'smooth' });

        getHeader().classList.remove('nav-open');
      }
    };

    document.querySelectorAll('a:link').forEach(link => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        link.addEventListener('click', e => linkClick(e, href));
      }
    });
  };

  const handleStickyHeader = () => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          document.body.classList.add('sticky');
        }

        if (entry.isIntersecting) {
          document.body.classList.remove('sticky');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    observer.observe(document.querySelector('.section-hero'));
  };

  const init = () => {
    setYear();

    handleMobileNav();
    handleScroll();
    handleStickyHeader();
  };

  init();
})();
