// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "tech-logo"
  const techLogos = document.querySelectorAll(".tech-logo");

  // Check if the browser supports IntersectionObserver
  if ("IntersectionObserver" in window) {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries, observer) => {
        // Loop through each observed element
        entries.forEach((entry) => {
          // If the element is visible in the viewport (at least 20% visible)
          if (entry.isIntersecting) {
            // Add the "visible" class to the element
            entry.target.classList.add("visible");
          } else {
            // Remove the "visible" class when the element goes out of view
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // The element is considered visible if 20% of it is in view
      }
    );

    // Start observing each logo element
    techLogos.forEach((logo) => {
      observer.observe(logo);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver:
    // Just make all logos visible
    techLogos.forEach((logo) => logo.classList.add("visible"));
  }
});
