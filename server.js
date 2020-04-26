const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const axios = require('axios')
// const routes = require('./routes/index')

const app = express()
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname , '/public')));
console.log(path.join(__dirname , '/public'))
//app.use('/', routes)

app.get('/',(req, res) => {
    console.log('home page')
    let data;
    async function makeGetRequest() {
        
        let result = await axios.get('http://covid19api.xapix.io/v2/locations');
      
        data = result.data;

        res.render('pages/index',{data: {
            locations: data.locations   
        }})
        
    }
  
    makeGetRequest();
    
    
});


app.use((req, res, next) => {
    let err = new Error('Not found');
    err.status = 404;
    next(err);

})

app.use((err, req, res, next) => {
    console.log('500')
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})