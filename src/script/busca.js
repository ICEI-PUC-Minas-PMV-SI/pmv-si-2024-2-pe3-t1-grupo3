const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('.product');

function filterProducts() {
    const activeFilters = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id.replace('filtro-', 'categoria-'));
  
    products.forEach(product => {
      const productClasses = product.querySelector('.produto').classList;
  
      if (activeFilters.length === 0) {
        product.style.display = 'block';
      } else {
        const matches = activeFilters.every(filter => productClasses.contains(filter));
        product.style.display = matches ? 'block' : 'none';
      }
    });
  }

checkboxes.forEach(checkbox => checkbox.addEventListener('click', filterProducts));