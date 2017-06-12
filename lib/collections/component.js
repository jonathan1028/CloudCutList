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
}));


Meteor.methods({
  componentInsert: function(componentAttributes) {
    check(this.userId, String);
    check(componentAttributes, Components.simpleSchema());

    var user = Meteor.user();

    component = _.extend(componentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    return Components.insert(component);
  },
  /*componentEdit: function(componentAttributes){
    name: 'componentEdit',
    check(this.userId, String);
    check(componentAttributes, Components.simpleSchema());
    
    var productId = Template.parentdData(1)._id;
    console.log("Test2, test2, test2");
    console.log(productId);
    return Components.insert(component);

    Components.update(componentAttributes, function(error) { 
    
    });  
  }*/
});


