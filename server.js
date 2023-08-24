import express from 'express';
import path from 'path';

const app = express();

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
