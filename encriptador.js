document.getElementById('encrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = encryptText(inputText);
    document.getElementById('output-text').innerText = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = decryptText(inputText);
    document.getElementById('output-text').innerText = decryptedText;
});

function encryptText(text) {
    let passphrase = "your-secret-key"; // Llave secreta para encriptar y desencriptar
    let encryptedText = CryptoJS.AES.encrypt(text, passphrase).toString();
    return encryptedText;
}

function decryptText(text) {
    let passphrase = "your-secret-key"; // Debe ser la misma llave secreta
    let bytes = CryptoJS.AES.decrypt(text, passphrase);
    let decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
