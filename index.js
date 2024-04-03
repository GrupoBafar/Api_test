const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const estres = require('./app.js');
const path = require('path')

const app = express();
const upload = multer({ dest: 'uploads/' }); // Directorio donde se almacenarán temporalmente los archivos

// Ruta para mostrar el formulario HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./index.html')));

// Ruta para manejar la subida de archivos
app.post('/upload/:seg', upload.single('archivo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha seleccionado ningún archivo.');
    }
    // Leer el archivo Excel
    
    try{
        const workbook = xlsx.readFile(req.file.path);
        const sheet_name_list = workbook.SheetNames;
        const datos = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        estres(datos,req.params.seg)
        .then(data => {
            console.log();
            res.send(data);
        })
        .catch(err => {
            return res.status(400).send('Error.');
            console.log(data);
        });

    }catch(err){
        return res.status(400).send('No se ha seleccionado un archivo de excel.');
    }
    
    // Envía una respuesta al cliente
   /// res.send('Archivo subido y procesado correctamente.');
});

const PORT = process.env.PORT || 4322;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});