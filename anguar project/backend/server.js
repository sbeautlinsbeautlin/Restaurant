const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
const dbName = 'food';

// Middleware to connect to MongoDB
async function connectToDB(req, res, next) {
    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        req.dbClient = client;
        req.db = client.db(dbName);
        next();
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Route to fetch documents from the 'cart' collection
app.get('/cart', connectToDB, async (req, res) => {
    try {
        const collection = req.db.collection('cart');
        const docs = await collection.find({}).toArray();
        res.json(docs);
    } catch (error) {
        console.error('Failed to fetch documents:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        req.dbClient.close();
    }
});

// Endpoint to handle the POST request
app.post('/add', connectToDB, async (req, res) => {
    const id = req.body.id;
    console.log(id)
    try {
        const collection = req.db.collection('cart');
        const result = await collection.updateOne({ id: id }, { $set: { isEnable: true } });
        console.log('Document updated successfully');
        res.status(200).send('Document updated successfully');
    } catch (error) {
        console.error('Failed to update document:', error);
        res.status(500).send('Failed to update document');
    }
});
app.post('/remove', connectToDB, async (req, res) => {
    const id = req.body.id;
    console.log(id)
    try {
        const collection = req.db.collection('cart');
        const result = await collection.updateOne({ id: id }, { $set: { isEnable: false } });
        console.log('Document updated successfully');
        res.status(200).send('Document updated successfully');
    } catch (error) {
        console.error('Failed to update document:', error);
        res.status(500).send('Failed to update document');
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
