const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'food';

// Collection Name
const collectionName = 'cart';

async function getAllDataFromMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    console.log(`Database '${dbName}' selected`);

    const collection = database.collection(collectionName);

    // Retrieve all documents from the collection
    const cursor = collection.find({});

    // Iterate over the cursor and print each document
    await cursor.forEach(document => {
      console.log(document);
    });
  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the function to retrieve all data from MongoDB
getAllDataFromMongoDB();
