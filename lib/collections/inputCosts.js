InputCosts = new Mongo.Collection('inputCosts');

InputCosts.allow({
  insert: function(userId, inputCost) { return true;},
  update: function(userId, inputCost) { return true;}, 
  remove: function(userId, inputCost) { return true;}
});

InputCosts.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  type: {
    type: String,
    label: "Type",
    optional: true,
    autoform: {
         options: [
            {
               label: "Labor",
               value: "Labor"
            },
            {
               label: "Sheet Good",
               value: "Sheet Good"
            },
            {
               label: "Rough Lumber",
               value: "Rough Lumber"
            },
            /*{
               label: "Hardware",
               value: "Hardware"
            },*/
          
         ]
      },
  },
  cost: {
    type: Number,
    decimal: true,
    label: "Cost",
    optional: true,
  },
  width: {
    type: Number,
    decimal: true,
    label: "Width",
    optional: true,
  },
  length: {
    type: Number,
    decimal: true,
    label: "Length",
    optional: true,
  },
  depth: {
    type: Number,
    decimal: true,
    label: "Depth",
    optional: true,
  },
  unit: {
    type: String,
    label: "Unit",
    optional: true,
    autoform: {
         options: [
            {
               label: "Board Foot",
               value: "BF"
            },
            {
               label: "Square Foot",
               value: "SF"
            },
            {
               label: "Each",
               value: "Ea"
            },
         ]
      },
  },
  
    
})); 

Meteor.methods({
  inputCostInsert: function(inputCostAttributes) {
    check(this.userId, String);
    check(inputCostAttributes, InputCosts.simpleSchema());

    var user = Meteor.user();
    inputCost = _.extend(inpuctCostAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });  

    return InputCosts.insert(inputCost);
  }
});


