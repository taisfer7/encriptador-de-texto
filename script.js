const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".btn-copiar");
const placeholder = document.getElementById('placeholder-message');
const resultDiv = document.getElementById('result');


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function encriptar(cadenaEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return cadenaEncriptada
}

function desencriptar(cadenaDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])){
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada
}


textArea.addEventListener('input', () => {
    const text = textArea.value.trim();
    
    if (text === '') {
        placeholder.classList.remove('hidden');
        resultDiv.classList.add('hidden');
    } else {
        placeholder.classList.add('hidden');
        resultDiv.classList.remove('hidden');
        mensaje.value = encryptText(text); // Función para encriptar texto
    }
});

function copyText() {
    mensaje.select();
    document.execCommand('copy');
}

