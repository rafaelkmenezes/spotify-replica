// Maneira completa para conectar ao banco no MongoDB

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rafaelkmenezes:<db_password>@cluster0.qivaeyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://rafaelkmenezes:oeN9FX2Kv7uPGLCJ@cluster0.qivaeyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const database = client.db("spotify");

const artistsCollection = await database
  .collection("artists")
  .find({})
  .toArray();
const songCollection = await database.collection("songs").find({}).toArray();
// const songCollection1 = database.collection("songs");
// const songCollection2 = songCollection1.find({});
// const songCollection3 = songCollection2.toArray();

// console.log(database);
// console.log(artistsCollection);
// console.log(songCollection);
