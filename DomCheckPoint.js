const cart = document.getElementById('cart')
const totalPriceElement = document.getElementById('total-price')

function updateTotal() {
  let total = 0;
  const items = cart.querySelectorAll('.cart-item')
  items.forEach(item => {
    const price = parseFloat(item.querySelector('.price').textContent.slice(1))
    const quantity = parseInt(item.querySelector('.quantity-value').textContent)
    total += price * quantity
  });
  totalPriceElement.textContent = total.toFixed(2)
}

cart.addEventListener('click', function(e) {
  if (e.target.classList.contains('plus')) {
    const quantityElement = e.target.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1
  } 

  if (e.target.classList.contains('minus')) {
    const quantityElement = e.target.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1
    }
  }

  updateTotal()
})
cart.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    const item = e.target.closest('.cart-item')
    item.remove()
    updateTotal()
  }
})

cart.addEventListener('click', function(e) {
  if (e.target.classList.contains('like-heart')) {
    if (e.target.style.color === 'red') {
      e.target.style.color = ''
    } else {
      e.target.style.color = 'red'
    }
  }
})
