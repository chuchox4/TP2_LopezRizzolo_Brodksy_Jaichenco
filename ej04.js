import * as fs from 'fs';

export function copiar(archivoOrigen, archivoDestino) {
  fs.readFile(archivoOrigen, function(error, datos) {
    if (error) throw error;
    fs.writeFile(archivoDestino, datos, function(error) {
      if (error) throw error;
      console.log(`El archivo ${archivoOrigen} ha sido copiado como ${archivoDestino}.`);
    });
  });
}