// MathJax configuration for DevOps documentation
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['ams']}
  },
  options: {
    ignoreHtmlClass: ".*|.*",
    processHtmlClass: "arithmatex"
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      console.log('MathJax loaded for DevOps documentation');
    }
  }
};

// Additional JavaScript for enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add click tracking for external links
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
  
  // Add icons to specific link types
  const podcastLinks = document.querySelectorAll('a[href*="anchor.fm"], a[href*="spotify"], a[href*="apple"], a[href*="google"]');
  podcastLinks.forEach(link => {
    link.classList.add('podcast-link');
  });
  
  const youtubeLinks = document.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]');
  youtubeLinks.forEach(link => {
    link.classList.add('youtube-link');
  });
  
  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
