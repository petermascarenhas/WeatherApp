var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://peter:peter@ds251287.mlab.com:51287/subscribers', ['subscribers']);


router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/user/:id', function(req, res, next){
    db.subscribers.findOne({'email':req.params.id},function(err, sub){
        if(err){
            res.send(err);
        }
        console.log('req',sub);
        res.json(sub);
    });
});

router.get('/user', function(req, res, next){
    db.subscribers.find(function(err, sub){
            if(err){
                res.send(err);
            }
            res.json(sub);
        });
});

router.post('/user', function(req, res, next){
    console.log('req',req.body);
    var subscriber= req.body;
    if(!subscriber.email ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });


    }else{
        db.subscribers.save(subscriber,function(err,subscriber){
            if(err){

                    res.send(err);
            }
            res.json(subscriber);
        });
    }
});


module.exports = router;