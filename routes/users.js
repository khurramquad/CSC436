var express = require('express');
var router = express.Router();

const User = require('../models/User');



router.use(function(req, res, next) {
        console.log(req.header("Authorization"))
        if (req.header("Authorization")) {
            try {
                req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
                console.log(req.payload)
            } catch(error) {
                return res.status(401).json({"error": error.message});
            }
        } else {
            return res.status(401).json({"error": "Unauthorized"});
        }
        next()
    })
  
    router.get('/', function(req, res) {
        User.find({}, function(err, users) {
          var userMap = {};
      
          users.forEach(function(user) {
            userMap[user._id] = user;
          });
      
          res.send(userMap);  
        });
      });

  router.use('/:id', function (req, res, next){
    console.log('Request URL', req.originalUrl)
    next()
})

router.get('/user/id', function(re,res,next){
    res.send('USER')
})

router.get('/user/:id',function(req,res,next){
    if(req.params.id === '0')next('route')
    else next()
}, function(req,res,next){
    res.send('regular')
})

module.exports = router;

