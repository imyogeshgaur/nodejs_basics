const mongoose = require('mongoose');

const SchemaObj  = mongoose.Schema;

const Client  = new SchemaObj({
      name:{
          type:String,
          default:"Unmaned"
      },
      age:{
          type:Number,
          default:0,
      },
      experience:{
          type:String,
          default:"fresher"
      },
      coding:{
          languages:String,
          frameworks:{
              type:String,
              default:"Bootstrap"
          }
      }
});

module.exports  = mongoose.model('clientsdata',Client)