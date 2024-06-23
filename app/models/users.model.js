module.exports = mongoose => {
  var schema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    birthdate:{type:Date},
    weight:{type:Number, required:true},
    height:{type:Number, required:true},
    bornGender:{type:String, required:true},
    photo:{type:String},
    physicalHealthBackground:{
      diabetes:{type:Boolean},
      hypertension:{type:Boolean},
      cancer:{type:Boolean},
      obesity:{type:Boolean},
    },
    mentalHealthBackground:{
      sleepDisorders:{type:Boolean},
      majorDepression:{type:Boolean},
      bipolarDisorder:{type:Boolean},
      anxietyDisorders:{type:Boolean},
    },    
    grades:[{
      date:{type:Date},
      feelings:{type:Number},
      lifestyle:{type:Number},	
      body:{type:Number},	
      movement:{type:Number},	
      nutrition:{type:Number},	
      smoking:{type:Number},	
      obesity:{type:Number},	
      sleep:{type:Number},	
      wellness:{type:Number},	
      stress:{type:Number},	
      depression:{type:Number},	
      confidenceLower:{type:Number},	
      confidenceUpper:{type:Number},	
      uncertainty:{type:Number},	
      indulgences:{type:Number},	
      mindfulness:{type:Number},      
      averageScore:{type:Number},
    }],
    comments:[{
      date:{type:Date},
      comment:{type:String},
    }]
  });

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Users = mongoose.model("users", schema);
  return Users;
};
