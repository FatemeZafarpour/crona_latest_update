const express = require('express')
const router = express.Router()
const axios = require('axios')


// middleware that is specific to this router
router.use( (req, res, next) =>{
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.get('/', function (req, res) {
    let data;
    async function makeGetRequest() {
        
        let result = await axios.get('http://covid19api.xapix.io/v2/locations');
      
        data = result.data;
        passData(data, res);
    }
      
    makeGetRequest();
})

function passData(data,res){
    // data.locations.forEach(element => {
    //     console.log(element.country)
    // });
    // console.log(data.locations[0])
    console.log('passing data to ejs')
    res.render('../pages/index')

}

module.exports = router