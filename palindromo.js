const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, "");  
    const longitud = texto.length;

    for (let i = 0; i < longitud / 2; i++) {
        if (texto[i] !== texto[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}

const verificarPalindromo = () => {
    const texto = document.getElementById("texto").value;
    const resultado = esPalindromo(texto) ? "Es un palíndromo" : "No es un palíndromo";
    document.getElementById("resultado").innerText = resultado;
}
