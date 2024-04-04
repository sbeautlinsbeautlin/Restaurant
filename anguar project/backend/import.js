const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'food';

// Collection Name
const collectionName = 'cart';

// JSON data to be inserted
const jsonData = {
    "pizza1":
       {
          "id":"1",
          "name":"chicken Fajita",
          "quantity":1,
          "price":150,
          "img":"../../assets/chicken Fajita.png",
          "isEnable":false
       },
    "pizza2":   
       {
          "id":"2",
          "name":"Pork-Trouble pizza",
          "quantity":1,
          "price":100,
          "img":"../../assets/Pork Trouble pizza.png",
          "isEnable":false
       },
    "pizza3": 
       {
          "id":"3",
          "name":"Mutton Pizza",
          "quantity":1,
          "price":200,
          "img":"../../assets/Mutton Pizza.png",
          "isEnable":false
       },
       "pizza4": 
       {
          "id":"4",
          "name":"Mushroom Pizza",
          "quantity":1,
          "price":300,
          "img":"../../assets/mus.png",
          "isEnable":false
       },
       "pizza5": 
       {
          "id":"5",
          "name":"veg corn pizza",
          "quantity":1,
          "price":375,
          "img":"../../assets/veg corn pizza.png",
          "isEnable":false
       },
       "pizza6": 
       {
          "id":"6",
          "name":"Avocado Pizza",
          "quantity":1,
          "price":400,
          "img":"../../assets/am.png",
          "isEnable":false
       }
    ,
    "burger1":
       {
          "id":"7",
          "name":"chicken Burger",
          "quantity":1,
          "price":350,
          "img":"../../assets/b22.png",
          "isEnable":false
       },
       "burger2":
       {
          "id":"8",
          "name":"Pork-Trouble Burger",
          "quantity":1,
          "price":300,
          "img":"../../assets/b3.png",
          "isEnable":false
       },
       "burger3":
       {
          "id":"9",
          "name":"2 layer Burger crunch",
          "quantity":1,
          "price":600,
          "img":"../../assets/b444.png",
          "isEnable":false
       },
       "burger4":
       {
          "id":"10",
          "name":"beef Burger",
          "quantity":1,
          "price":500,
          "img":"../../assets/bbb.png",
          "isEnable":false
       },
       "burger5":
       {
        
          "id":"11",
          "name":"veg classic burger",
          "quantity":1,
          "price":275,
          "img":"../../assets/b11.png",
          "isEnable":false
       },
       "burger6":
       {
          "id":"12",
          "name":"spinach Burger",
          "quantity":1,
          "price":400,
          "img":"../../assets/b222.png",
          "isEnable":false
       }
    ,
    "pasta1":
       {
          "id":"13",
          "name":"Mac and cheese",
          "quantity":1,
          "price":450,
          "img":"../../assets/p111111.png",
          "isEnable":false
       },
       "pasta2":
       {
          "id":"14",
          "name":"chilli pasta",
          "quantity":1,
          "price":400,
          "img":"../../assets/n7.png",
          "isEnable":false
       },
       "pasta3":
       {
          "id":"15",
          "name":"Tomatoes Crisp",
          "quantity":1,
          "price":500,
          "img":"../../assets/n88.png",
          "isEnable":false
       },
       "pasta4":
       {
          "id":"16",
          "name":"Egg classic pasta",
          "quantity":1,
          "price":400,
          "img":"../../assets/n999.png",
          "isEnable":false
       },
       "pasta5":
       {
          "id":"17",
          "name":"fried red pasta",
          "quantity":1,
          "price":375,
          "img":"../../assets/n1010.png",
          "isEnable":false
       },
       "pasta6":
       {
          "id":"18",
          "name":"2 in one pasta",
          "quantity":1,
          "price":400,
          "img":"../../assets/n20220.png",
          "isEnable":false
       }
    ,
    "noodles1":
       {
          "id":"19",
          "name":"Pepper Burst Noodles",
          "quantity":1,
          "price":450,
          "img":"../../assets/n111.png",
          "isEnable":false
       },
    "noodles2":
       {
          "id":"20",
          "name":"chinese Garlic noodles",
          "quantity":1,
          "price":400,
          "img":"../../assets/n22.png",
          "isEnable":false
       },
    "noodles3":
       {
          "id":"21",
          "name":"Paneer Noodles",
          "quantity":1,
          "price":500,
          "img":"../../assets/n33.png",
          "isEnable":false
       },
    "noodles4":  
       {
          "id":"22",
          "name":"spagetti",
          "quantity":1,
          "price":400,
          "img":"../../assets/n44.png",
          "isEnable":false
       },
    "noodles5":
       {
          "id":"23",
          "name":"fried bellpepper noodles",
          "quantity":1,
          "price":375,
          "img":"../../assets/n55.png",
          "isEnable":false
       },
    "noodles6":   
       {
          "id":"24",
          "name":"veg-noodles",
          "quantity":1,
          "price":400,
          "img":"../../assets/n6666.png",
          "isEnable":false
       }
    ,
    "tacos1":
       {
          "id":"25",
          "name":"Brisket",
          "quantity":1,
          "price":450,
          "img":"../../assets/t111.png",
          "isEnable":false
       },
    "tacos2":  
       {
          "id":"26",
          "name":"AI pastor",
          "quantity":1,
          "price":400,
          "img":"../../assets/t22.png",
          "isEnable":false
       },
    "tacos3":   
       {
          "id":"27",
          "name":"chicken Fajita",
          "quantity":1,
          "price":500,
          "img":"../../assets/t3.png",
          "isEnable":false
       },
    "tacos4":
       {
          "id":"28",
          "name":"Tripita",
          "quantity":1,
          "price":400,
          "img":"../../assets/t11.png",
          "isEnable":false
       },
    "tacos5":
       {
          "id":"29",
          "name":"Ternera",
          "quantity":1,
          "price":375,
          "img":"../../assets/t44.png",
          "isEnable":false
       },
    "tacos6":   
       {
          "id":"30",
          "name":"Molleja",
          "quantity":1,
          "price":"400",
          "img":"../../assets/t5.png",
          "isEnable":false
       }
    ,
    "fries1":
       {
          "id":"31",
          "name":"French Fries",
          "quantity":1,
          "price":450,
          "img":"../../assets/f111.png",
          "isEnable":false
       },
    "fries2":
       {
          "id":"32",
          "name":"French Nugets",
          "quantity":1,
          "price":400,
          "img":"../../assets/f1111.png",
          "isEnable":false
       },
    "fries3":
  
       {
          "id":"33",
          "name":"Chicken cheese balls",
          "quantity":1,
          "price":500,
          "img":"../../assets/f222.png",
          "isEnable":false
       },
    "fries4":
       {
          "id":"34",
          "name":"paneer fries",
          "quantity":1,
          "price":400,
          "img":"../../assets/f3333.png",
          "isEnable":false
       },
    "fries5":
       {
          "id":"35",
          "name":"potato cheese fries",
          "quantity":1,
          "price":375,
          "img":"../../assets/f44.png",
          "isEnable":false
       },
    "fries6":   
       {
          "id":"36",
          "name":"onion fries",
          "quantity":1,
          "price":400,
          "img":"../../assets/f55.png",
          "isEnable":false
       }
    ,
    "drinks1":
       {
          "id":"37",
          "name":"Tequila",
          "quantity":1,
          "price":450,
          "img":"../../assets/d99.png",
          "isEnable":false
       },
    "drinks2":
       {
          "id":"38",
          "name":"Grapefruit soda",
          "quantity":1,
          "price":400,
          "img":"../../assets/d111.png",
          "isEnable":false
       },
    "drinks3":   
       {
          "id":"39",
          "name":"lime juice",
          "quantity":1,
          "price":500,
          "img":"../../assets/d222.png",
          "isEnable":false
       },
    "drinks4": 
       {
          "id":"40",
          "name":"cranberries",
          "quantity":1,
          "price":400,
          "img":"../../assets/d333.png",
          "isEnable":false
       },
    "drinks5":    
       {
          "id":"41",
          "name":"salted rim",
          "quantity":1,
          "price":375,
          "img":"../../assets/d444.png",
          "isEnable":false
       },
    "drinks6": 
       {
          "id":"42",
          "name":"triple sec margarita",
          "quantity":1,
          "price":400,
          "img":"../../assets/d777.png",
          "isEnable":false
       }
    ,
    "desserts1":
       {
          "id":"43",
          "name":"Chocolate Ecstasy",
          "quantity":1,
          "price":450,
          "img":"../../assets/de2.jpg",
          "isEnable":false
       },
    "desserts2":
       {
          "id":"44",
          "name":"Strawberry pudding",
          "quantity":1,
          "price":400,
          "img":"../../assets/de333.jpg",
          "isEnable":false
       },
    "desserts3":
       {
          "id":"45",
          "name":"Ice-Creams",
          "quantity":1,
          "price":500,
          "img":"../../assets/de444.jpg",
          "isEnable":false
       },
    "desserts4":
  
       {
          "id":"46",
          "name":"Fruit Delight",
          "quantity":1,
          "price":400,
          "img":"../../assets/de5.png",
          "isEnable":false
       },
    "desserts5":
       {
          "id":"47",
          "name":"classic cake",
          "quantity":1,
          "price":375,
          "img":"../../assets/de66.jpg",
          "isEnable":false
       },
  
    "desserts6":
       {
          "id":"48",
          "name":"chocolate brownie",
          "quantity":1,
          "price":400,
          "img":"../../assets/de77.jpg",
          "isEnable":false
       }
    
  };

async function insertDataToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    console.log(`Database '${dbName}' selected`);

    const collection = database.collection(collectionName);

    // Insert JSON data into the collection
    const result = await collection.insertMany(Object.values(jsonData));
    console.log(`${result.insertedCount} documents inserted into the '${collectionName}' collection`);
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the function to insert data into MongoDB
insertDataToMongoDB();
