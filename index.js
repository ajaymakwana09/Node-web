const express =require('express');
const bodyparser=require('body-parser');
const port =3002;
const app=express();
const routes = require('./Routes/routes.js');
const db = require('./Config/db.js');


app.set('view engine','ejs');
// app.use(bodyparser.urlencoded({ extended: false }));
app.use('/',routes);
app.use('/about',routes);
app.use(express.static('public'));




app.listen( port, () =>{
    console.log("Server listening on 3002");
});