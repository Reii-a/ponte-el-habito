// Importa Express
const express = require('express');

// Crea una aplicación Express
const app = express();

// Define el puerto
const port = 3000;

// Define la ruta raíz y envía una respuesta
app.get('/', (req, res) => {
  res.send("public/index.html");
});

app.get('/Jorge', (res) => {
  res.send("Hola Jorge")
});

// Sirve los archivos estáticos de la carpeta 'public'
app.use(express.static('public'));


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
