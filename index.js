document.addEventListener('DOMContentLoaded', () => {
  // Function to load content from an external HTML file into a target element
  const loadContent = (file, targetId) => {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then(html => {
        const target = document.querySelector(`#${targetId}`);
        if (target) {
          target.innerHTML = html;
        } else {
          console.error(`Target #${targetId} not found`);
        }
      })
      .catch(error => console.error(error));
  };

  // Load the content for each section
  loadContent('./src/home/home.html', 'home');
  loadContent('./src/about/about.html', 'about');
});
