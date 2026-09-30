// Runs before styles and React so the first paint uses the chosen theme.
;(function () {
  var preference
  try {
    preference = localStorage.getItem('portfolio-theme')
  } catch {
    // Storage can be unavailable in private or restricted browsing.
  }
  var theme = preference === 'light' || preference === 'dark'
    ? preference
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b1120' : '#f8fafc'
})()
