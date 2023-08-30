import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Obtém o caminho do diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, "./dist");

app.use('/', express.static(distPath));
app.use('/contacts', express.static(distPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("App is running!");
});