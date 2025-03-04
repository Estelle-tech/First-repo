
// Function to handle the order now button click
function orderNow(product) {
    const phoneNumber = '1234567890';  // Replace with your actual WhatsApp number
    const message = `Hello, I would like to order the ${product}.`;

    // Encode the URL for WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(url, '_blank');}


