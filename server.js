const express = require('express'); // Importar o módulo 'express' corretamente

const app = express();

const path = require('path'); // Importar o módulo 'path' para manipulação de caminhos

const distPath = path.resolve(__dirname, "./dist"); // Caminho absoluto para a pasta "./dist"

app.use('/', express.static(distPath)); // Servir arquivos estáticos a partir do caminho distPath

app.use('/contacts', express.static(distPath)); // Servir arquivos estáticos a partir do mesmo caminho para a rota '/contacts'

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("App is running!"); // Corrigir o log de sucesso
});