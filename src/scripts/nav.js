document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-navLink]');

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === window.location.pathname) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const navLinksContainer = document.getElementById('navLinksContainer');

  // Function to generate navigation links dynamically
  function generateNavLinks(data) {
    const links = data.map((item) => {
      const link = document.createElement('a');
      link.textContent = item.name;
      link.href = item.path;
      link.classList.add('text-primary');
      return link;
    });
    return links;
  }

  // Populate navigation links
  const navigationData = getNavigationData(); // Assuming a function getNavigationData() retrieves the navData
  const links = generateNavLinks(navigationData);
  links.forEach((link) => {
    navLinksContainer.appendChild(link);
  });

  // Add event listener for menu toggle
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('hidden');
    menuIcon.classList.toggle('transform');
  });
});
