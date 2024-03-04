import React from 'react'
import {MongoClient} from 'mongodb'

const newmeetup = async (req,res) => {
 if(req.method=='POST'){

    const data=req.body;
    const client=await MongoClient.connect('mongodb+srv://juliantoppo95:juliantoppo95@cluster0.fpxf1yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    const db=await client.db();
    const collection= db.collection('meetups')
    const result= await collection.insertOne(data);
    console.log(result)
    client.close()

    res.status(201).json({message:'Meetup Inserted'})
 }
}

export default newmeetup