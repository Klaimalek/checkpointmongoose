const mongoose=require('mongoose');
const schema=mongoose.Schema
const personSchema= new schema({
    
  nom: { type: String,
         required:true,
  },
  age:{ type:Number,
           required:true

  },
  favoriteFoods:{ type:String,
          required: true,
  }
});
module.exports=Person=mongoose.model("Persons",personSchema)
