function rellenarConCeros(numeros, longitud) {
    // Convertimos el número en una cadena
    let cadenaNumeros = numeros.toString();
    
    // Mientras la longitud de la cadena sea menor a la longitud deseada
    while (cadenaNumeros.length < longitud) {
        // Añadimos ceros al inicio
        cadenaNumeros = '0' + cadenaNumeros;
    }

    return cadenaNumeros;
}