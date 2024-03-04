import React from "react";
import { MongoClient } from "mongodb";

const getmeetups = async (req, res) => {
    console.log("inside getup")
  if (req.method == "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = await client.db();
    const collection = db.collection("meetups");
    console.log("insideeee")
    const result = await collection.find().toArray();

    console.log(result);
    res.status(200).json({ message: result });
    client.close()
  }
};

export default getmeetups;
