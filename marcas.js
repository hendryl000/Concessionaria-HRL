const marcaContainer = document.getElementById('marcaContainer');
const marcaButtons = document.querySelectorAll('.marcaButton');
const carListItems = document.querySelectorAll('.car-list li[data-marca]');

marcaButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedMarca = button.dataset.marca;

    marcaButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    carListItems.forEach(item => {
      const itemMarca = item.dataset.marca;

      if (selectedMarca === itemMarca || selectedMarca === 'Todos') {
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  });
});