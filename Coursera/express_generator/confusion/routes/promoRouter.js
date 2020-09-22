const express = require('express');
const bodyparser = require('body-parser');
const promoRouter = express.Router();


promoRouter.use(bodyparser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statuscode = 200;
        res.setHeader('content-type', 'text/plain');
        next();

    })

    .get((req, res, next) => {
        res.end("Will send all the Promoters to you!");
    })

    .post((req, res, next) => {
        res.end('We will send the Promoter : ' + req.body.name + 'with details : ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation is not supportes on /promotions');
    })

    .delete((re, res, next) => {
        res.end('Deleting all the promotions !!!!');
    });

    promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statuscode = 200;
        res.setHeader('content-type', 'text/plain');
        next();

    })
    .get((req,res,next) =>{

         res.end("We will send the dish : " + req.params.promoId + 'to you !!!');
    })

    .post((req,res,next)=>{

          res.statusCode = 200;
          res.end('POST operation is not supported on /promotions/' + req.params.promoId);
    })
    .put((req,res,next)=>{

        res.write('Updating the promotion : ' + req.params.promoId + '\n');
        res.end('Will update the promotion : ' + req.body.name + 'with details' + req.body.description);
    })
    .delete((req,res,next) =>{

        res.end('Deleting dish : ' + req.params.promoId);
    });


module.exports = promoRouter;