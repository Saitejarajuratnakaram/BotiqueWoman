
function filterProducts(category) {
    var cards = document.getElementsByClassName('product-card');
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains(category) || category === 'all') {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }
    }
}