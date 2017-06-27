Components = new Mongo.Collection('components');

Components.allow({
  insert: function(userId, component) { return true; }, 
  update: function(userId, component) { return true; }, 
  remove: function(userId, component) { return true; }
});

Components.attachSchema(new SimpleSchema({
  orderId: {
    type: String,
    label: "OrderId",
    optional: true,
  },
  productId: {
    type: String,
    label: "ProductId",
    optional: true,
  },
  template: {
    type: Number,
    decimal: true,
    label: "Template",
    optional: true,
  },
  category: {
    type: String,
    label: "Category",
    optional: true,
    autoform: {
     options: [
        {
           label: "Frameless Cabinets",
           value: "Frameless Cabinets"
        },
        {
           label: "Face Frame Cabinets",
           value: "Face Frame Cabinets"
        },
        {
           label: "Furniture",
           value: "Furniture"
        },
     ]
    },
   custom: function () {
      var shouldBeRequired = this.field('template').value == 1;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productTemplateSubmit').addInvalidKeys([{name: 'type', type: 'required'}]);
            return "required";
              
          }
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    },
  },
  name: {
    type: String,
    label: "Name",
    //optional: true,
  },
  type: {
    type: String,
    label: "Type",
    autoform: {
      options: [
            {
               label: "Door",
               value: "Door"
            },
            {
               label: "Drawer Face",
               value: "Drawer Face"
            },
            {
               label: "Case",
               value: "Case"
            },
            {
               label: "Face Frame",
               value: "Face Frame"
            },
            {
               label: "Drawer Box",
               value: "Drawer Box"
            },
            {
               label: "Shelf",
               value: "Shelf"
            },
            {
               label: "Trim",
               value: "Trim"
            },
         ]
    },
  },
  width: {
    type: Number,
    decimal: true,
    label: "Width",
    optional: true,
  },
  height: {
    type: Number,
    decimal: true,
    label: "Height",
    optional: true,
  },
  depth: {
    type: Number,
    decimal: true,
    label: "Depth",
    optional: true,
  },
  widthFormula: {
    type: String,
    label: "Width Formula",
  },
  heightFormula: {
    type: String,
    label: "Height Formula",
  },
  depthFormula: {
    type: String,
    label: "Depth Formula",
  },
  buildTime: {
    type: Number,
    decimal: true,
    label: "Build Time",
  },
  material: {
    type: String,
    label: "Material",
    optional: true,
  },
  processes: {
    type: [String],
    label: "Processes",
    optional: true,
  },
  /*processes: {
    type: [String],
    label: "Processes",
  },
  "processes.$.id": {
    type: String,
  },
  "processes.$.name": {
    type: String,
  },*/
}));


Meteor.methods({
  componentInsert: function(docAttributes) {
    check(this.userId, String);
    check(docAttributes, Components.simpleSchema());

    var user = Meteor.user();

    component = _.extend(docAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    return Components.insert(component);
  },
  componentUpdate: function(docAttributes){
    check(this.userId, String);
    check(docAttributes, Components.simpleSchema());
    
    console.log("Reached componentUpdate");

    Components.update(docAttributes, function(error) { 
    
    });  
  }
});


