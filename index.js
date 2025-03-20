
 // Open WhatsApp
    window.open(url, '_blank');
    document.getElementById('orderNow').addEventListener('click', function() {
        const phoneNumber = '09036161722'; // Replace with your phone number including country code
        const message = 'Hello, I would like to place an order!'; // Optional message
        const whatsappURL = `https://wa.me/23409036161722?text=Hello%2CI%20would%20like%20to%20order%20the%20%24%5Bproduct%5D`;
        window.open(whatsappURL, '_blank');
    });
    
   


