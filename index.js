// Zoom in animation when the section is in the viewport
const projects = document.querySelectorAll('.project');

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add the class when the element is in view
    } else {
      entry.target.classList.remove('in-view'); // Remove the class when the element is out of view
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1 // Trigger when 30% of the element is visible
});

projects.forEach(project => {
  observer.observe(project);
});
