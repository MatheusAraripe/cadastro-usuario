import express from 'express';

const app = express();


app.use('/', express.static(
    express.resolve(
        __dirname,
        "./dist"
    )
))

app.use('/contacts', express.static(
    express.resolve(
        __dirname,
        "./dist"
    )
))


app.listen(process.env.PORT || 3000, (err) => {
    if(err){return console.log(err)}

    console.log("App is runing!");
})