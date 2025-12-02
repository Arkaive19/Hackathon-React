document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutationsList) => {
    const el = document.querySelector("#sponsers");
    if (el) {
      observer.disconnect(); // Stop observing once #sponsers is found
      console.log("yo");
      [...el.children].forEach((c, i) => {
        c.classList.add("scroll-elem");
        c.classList.add("s" + String(i).padStart(2, "0"));
      });
    }
  });

  // Start observing the body for added nodes, only after the DOM is fully loaded
  observer.observe(document.body, { childList: true, subtree: true });
});
