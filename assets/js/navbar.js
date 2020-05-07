fetch('../../navbar.html')
  .then(response => response.text())
  .then(text => {
      let nabvar = document.getElementById('sectionsNav');

      nabvar.innerHTML = text;
  })