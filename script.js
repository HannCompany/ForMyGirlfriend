function sendMessageToWhatsApp() {
    const message = document.getElementById('loveMessage').value;  // Ambil pesan dari textarea
    const encodedMessage = encodeURIComponent(message); // Encode pesan agar bisa dibaca WhatsApp

    // Ganti dengan nomor WhatsApp tujuan yang benar (misal: 6281234567890)
    const phoneNumber = "62895333819279"; // Pastikan nomor WhatsApp tidak diawali dengan '+'

    // Membuat link WhatsApp dengan pesan yang telah dienkode
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Membuka WhatsApp dengan pesan yang sudah dikirim
    window.open(whatsappLink, "_blank");

    // Menghapus pesan setelah dikirim
    document.getElementById('loveMessage').value = ''; 
}
