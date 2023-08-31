// Controllers for the Tea Collection

import 'dotenv/config';
import express from 'express';
import * as teas from './teas-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/teas', (req,res) => { 
    teas.createTea(
        req.body.product, 
        req.body.quantity, 
        req.body.expiration
        )
        .then(tea => {
            res.status(201).json(tea);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Uh oh! The server cannot process this bad request.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/teas', (req, res) => {
    teas.retrieveTeas()
        .then(tea => { 
            if (tea !== null) {
                res.json(tea);
            } else {
                res.status(404).json({ Error: 'Uh oh! The requested resource Tea was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Uh oh! The server cannot process this bad request.' });
        });
});


// RETRIEVE by ID controller
app.get('/teas/:_id', (req, res) => {
    teas.retrieveTeaByID(req.params._id)
    .then(tea => { 
        if (tea !== null) {
            res.json(tea);
        } else {
            res.status(404).json({ Error: 'Uh oh! The requested Tea was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Uh oh! The server cannot process this bad request.' });
    });

});


// UPDATE controller ************************************
app.put('/teas/:_id', (req, res) => {
    teas.updateTea(
        req.params._id, 
        req.body.product, 
        req.body.quantity, 
        req.body.expiration
    )
    .then(tea => {
        res.json(tea);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Uh oh! The server cannot process this bad request.' });
    });
});


// DELETE Controller ******************************
app.delete('/teas/:_id', (req, res) => {
    teas.deleteTeaById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send({ Success: 'Your request to delete the Tea was successful.' });
            } else {
                res.status(404).json({ Error: 'Uh oh! The requested Tea was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Sorry, there was an error attempting to send your request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});