// Models for the Tea Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'There was an error when attempting to connect to the server.' });
    } else  {
        console.log('Your request to connect to the server was successful!');
    }
});

// SCHEMA: Define the collection's schema.
const teaSchema = mongoose.Schema({
	product:    { type: String, required: true },
	quantity:     { type: Number, required: true },
	expiration: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "teas".
const teas = mongoose.model('Tea', teaSchema);


// CREATE model *****************************************
const createTea = async (product, quantity, expiration) => {
    const tea = new teas({ 
        product: product, 
        quantity: quantity, 
        expiration: expiration 
    });
    return tea.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveTeas = async () => {
    const query = teas.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTeaByID = async (_id) => {
    const query = teas.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTeaById = async (_id) => {
    const result = await teas.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTea = async (_id, product, quantity, expiration) => {
    const result = await teas.replaceOne({_id: _id }, {
        product: product,
        quantity: quantity,
        expiration: expiration
    });
    return { 
        _id: _id, 
        product: product,
        quantity: quantity,
        expiration: expiration
    }
}

// EXPORT the variables for use in the controller file.
export { createTea, retrieveTeas, retrieveTeaByID, updateTea, deleteTeaById }