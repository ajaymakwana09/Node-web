const express = require('express');
const routes = express();


routes.get('/',(req, res) => {
    
    res.render('index',{title:"Home page"});
})


routes.get('/about',(req, res) => {-

   
    
    res.render('about',{title:"about page"});
})

module.exports = routes;