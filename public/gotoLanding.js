document.addEventListener("DOMContentLoaded", () => {
  // Remove any anchors, queries, or index.html
  const { origin, pathname } = window.location;
  const cleanPath = pathname.replace(/index\.html$/, "");
  const cleanURL = `${origin}${cleanPath}`;

  if (window.location.href !== cleanURL) {
    window.history.replaceState({}, "", cleanURL);
  }

  // Always scroll to top immediately and lock briefly to prevent jumps
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 300);

  // Force scroll to top again after styles load
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 600);
});
