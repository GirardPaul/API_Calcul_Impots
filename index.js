var express = require('express');
var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')


var calcul = require('./calculImpots');

const { authSchema } = require('./validation_schema')



app.use(bodyParser.json())
app.use(cors())



app.post('/calcul', function (req, res) {


    const response = authSchema.validate(req.body);


    if(!response.error){

        var result = calcul.checkNbPartsSalaire(req.body.salaire, req.body.nbParts)
   
        res.json({
            "Impots": result.result,
            "Salaire": result.salaire,
            "Imposable": result.imposable,
            "montantTranche": result.montantTranche,
            "tmi": result.tmi
        })
    }
    else{
        res.send(response.error.details[0])
    }
    
        

  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});