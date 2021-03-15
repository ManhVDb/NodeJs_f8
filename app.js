const express =require('express');
const morgan= require('morgan');
const path= require('path')
const handlebars= require('express-handlebars');
const mongoose= require('mongoose');
methodOverride = require('method-override')
const app= express();

//lấy được dữ liệu từ body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))


//static file
app.use(express.static(path.join(__dirname,'resources/public')));
console.log(__dirname);

//http logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs', //config lại handlebars
    helpers:{
        sum:(a,b)=> a+b,
    }
})
);


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


const homeRouter =require('./router/homeRouter');
const meRouter =require('./router/me');
app.use('/',homeRouter);
app.use('/:slug',homeRouter);
app.use('/me',meRouter);
app.use('/course',homeRouter);


// app.get('/',(req,res)=>{
//     res.render('home');
// });



// app.post('/search',(req,res)=>{
//     res.send(req.body.bkav)
//     console.log(req.body.bkav);
// });

app.get('/search',(req,res)=>{
    res.render('search')
});

//connect to DB
const db =require('./config/db');
db.connect();

app.listen(3000);
