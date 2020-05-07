fetch('../../footer.html')
  .then(response => response.text())
  .then(text => {
      let footer = document.getElementById('footer');

      footer.innerHTML = text;
  })