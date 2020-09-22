const mongo = require('mongodb').MongoClient;
const dboper = require('./opertations');

const url = 'mongodb://localhost:27017';
const dbname = 'ConFusion';

mongo.connect(url).then((client)=>{

    console.log(`Connected Sucessfully`);
    const db = client.db(dbname);
    dboper.insertDocument(db,{name:"Yogesh",description:"Test"},'dishes').then((result)=>{
         console.log(`Inserted the document \n ${result.ops}`);
         return dboper.findDocument(db,'dishes')

    })
  .then((docs)=>{
        console.log(`Found  the document \n ${docs}`);
        dboper.updateDocument(db,{name:"Yogesh",description:"Test Updated"},'dishes')
    })
 .then((result)=>{
     
      console.log(`Updated the document \n ${result.result}`);
      dboper.findDocument(db,'dishes')
   })
   .then((docs)=>{
       console.log(`Found the document \n  ${docs}`);
       db.dropCollection('dishes')
   })
   .then(console.log("Thank You"))
.then((result)=>{
    console.log(`Dropped Collection : ${result}`);
    client.close();
            })
            .catch((err)=>console.log(`The Error Recived in dropTable is : ${err}`));
 })
 .catch((err)=>console.log(`The Error Recived is : ${err}`));
