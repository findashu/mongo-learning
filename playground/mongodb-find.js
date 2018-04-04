//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return  console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5ac37a84d8454f2b9f0497d3')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) =>{
    //     console.log('Unable to fetch data', err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count ${count}`);
        
    }, (err) =>{
        console.log('Unable to fetch data', err);
    });
    //db.close();
});