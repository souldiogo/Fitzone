// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const menuEspaco = document.querySelector('.menu-espaco');

hamburger.addEventListener('click', () => {
    menuEspaco.classList.toggle('open');
});

const purchaseDialog = document.querySelector('.purchase-dialog');
const purchaseProduct = document.querySelector('.purchase-product');

document.querySelectorAll('.products .buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.products');
        const name = product.querySelector('p:not(.price)').textContent;
        const price = product.querySelector('.price').textContent;

        purchaseProduct.textContent = `${name} — ${price}`;
        purchaseDialog.showModal();
    });
});