Parts = new Mongo.Collection('parts');

Parts.allow({
  insert: function(userId, part) { return true; }, 
  update: function(userId, part) { return true; }, 
  remove: function(userId, part) { return true; }
});

Parts.attachSchema(new SimpleSchema({
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
  componentId: {
    type: String,
    label: "ComponentId",
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
  },
  materialType: {
    type: String,
    label: "Material Type",
    autoform: {
         options: [
            {
               label: "Case",
               value: "Case"
            },
            {
               label: "Door Frame",
               value: "Door Frame"
            },
            {
               label: "Door Panel",
               value: "Door Panel"
            },
            {
               label: "Drawer Face Frame",
               value: "Drawer Face Frame"
            },
            {
               label: "Drawer Face Panel",
               value: "Drawer Face Panel"
            },
            {
               label: "Drawer Box Side",
               value: "Drawer Box Side"
            },
            {
               label: "Drawer Box Bottom",
               value: "Drawer Box Bottom"
            },
            {
               label: "Face Frame",
               value: "Face Frame"
            },
            {
               label: "Shelf",
               value: "Shelf"
            },
            {
               label: "End Panel",
               value: "End Panel"
            },
            {
               label: "Toe Kick",
               value: "Toe Kick"
            },
            {
               label: "Crown",
               value: "Crown"
            },



            /*{
               label: "Runner",
               value: "Runner"
            },
            {
               label: "Hinge",
               value: "Hinge"
            },
            {
               label: "Pull",
               value: "Pull"
            },*/
         ]
      },
  },
  productName: {
    type: String,
    label: "Product Name",
    optional: true,
  },
  componentName: {
    type: String,
    label: "Component Name",
    optional: true,
  },
  componentType: {
    type: String,
    label: "Component Type",
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
  material: {
    type: String,
    label: "Material",
    optional: true,
  },
  widthFormula: {
    type: String,
    label: "Width Formula",
  },
  lengthFormula: {
    type: String,
    label: "Length Formula",
  },
  depthFormula: {
    type: String,
    label: "Depth Formula",
  },
  materialFormula: {
    type: String,
    label: "Material Formula",
    optional: true,
  },
  inputCostId: {
    type: String,
    label: "Stock Item",
    optional: true,
  },
}));





Meteor.methods({
  partInsert: function(partAttributes) {
    check(this.userId, String);
    check(partAttributes, Parts.simpleSchema());

    var user = Meteor.user();
    //var order = Orders.findOne(partAttributes.orderId);

   /* if (!plate)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');*/

    part = _.extend(partAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    //Plates.update(comment.plateId, {$inc: {commentsCount: 1}});

    return Parts.insert(part);
  }
});


