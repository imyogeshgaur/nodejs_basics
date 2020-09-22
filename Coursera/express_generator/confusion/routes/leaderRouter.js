const express = require('express');
const bodyparser = require('body-parser');
const leaderRouter = express.Router();


leaderRouter.use(bodyparser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statuscode = 200;
        res.setHeader('content-type', 'text/plain');
        next();

    })

    .get((req, res, next) => {
        res.end("Will send all the leaders to you!");
    })

    .post((req, res, next) => {
        res.end('We will send the leader : ' + req.body.name + 'with details : ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation is not supportes on /leaders');
    })

    .delete((re, res, next) => {
        res.end('Deleting all the leaders !!!!');
    });


    leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statuscode = 200;
        res.setHeader('content-type', 'text/plain');
        next();

    })
    .get((req,res,next) =>{

         res.end("We will send the leader : " + req.params.leaderId + 'to you !!');
    })

    .post((req,res,next)=>{

          res.statusCode = 200;
          res.end('POST operation is not supported on /leaders/' + req.params.leaderId);
    })
    .put((req,res,next)=>{

        res.write('Updating the leader : ' + req.params.leaderId + '\n');
        res.end('Will update the leader : ' + req.body.name + 'with details' + req.body.description);
    })
    .delete((req,res,next) =>{

        res.end('Deleting dish : ' + req.params.leaderId);
    });


module.exports = leaderRouter;