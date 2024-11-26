// Function to update the modal with item details
var orderModal = document.getElementById('orderModal');
orderModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var item = button.getAttribute('data-item');
    var price = button.getAttribute('data-price');

    var modalTitle = orderModal.querySelector('.modal-title');
    var modalBodyItem = orderModal.querySelector('#orderItem');
    var modalBodyPrice = orderModal.querySelector('#orderPrice');

    modalTitle.textContent = 'Add ' + item + ' to Cart';
    modalBodyItem.textContent = 'Item: ' + item;
    modalBodyPrice.textContent = 'Price: ' + price;
});

// Handle add to cart button click
document.getElementById('addToCartButton').addEventListener('click', function () {
    alert('Item added to cart!');
    // You can extend this to actually add the item to a cart
    // and persist the data (e.g., using localStorage or sessionStorage)
});
// Function to show slides
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    // Add "active" class to current dot
    dots[slideIndex - 1].className += " active";

    // Set a delay for the next slide (2 seconds)
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Initial call to start the slideshow
