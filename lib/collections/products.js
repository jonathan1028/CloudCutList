Products = new Mongo.Collection('products');

var Schemas = {};

Products.allow({
  insert: function(userId, doc) { return true; },
  update: function(userId, doc) { return true; }, 
  remove: function(userId, doc) { return true; }
});


Products.attachSchema(new SimpleSchema({
  orderId: {
    type: String,
    label: "OrderId",
    optional: true,
  },
  submitted:{
    type: Date,
    label: "Submitted",
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
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('template').value == 1;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productTemplateSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    }
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
    }
  },
  subcategory: {
    type: String,
    label: "Subcategory",
    optional: true,
    autoform: {
         options: [
            {
               label: "Base Cabinets",
               value: "Base Cabinets"
            },
            {
               label: "Wall Cabinets",
               value: "Wall Cabinets"
            },
            {
               label: "Tall Cabinets",
               value: "Tall Cabinets"
            },
            {
               label: "Trim",
               value: "Trim"
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
    }
  },
  model: {
    type: String,
    label: "Model",
    optional: true,
  },
  location: {
    type: String,
    label: "Location",
    optional: true,
  },

  width: {
    type: Number,
    decimal: true,
    label: "Width",
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'model', type: 'required'}]);
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
    }
  },
  height: {
    type: Number,
    decimal: true,
    label: "Height",
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'model', type: 'required'}]);
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
    }
  },
  depth: {
    type: Number,
    decimal: true,
    label: "Depth",
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'model', type: 'required'}]);
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
    }
  },
  toeKickHeight: {
    type: Number,
    decimal: true,
    label: "Toe Kick Height",
    optional: true,
    autoform:{
      defaultValue: 4.5,
    }
  },
  toeKickDepth: {
    type: Number,
    decimal: true,
    label: "Toe Kick Depth",
    optional: true,
    autoform:{
      defaultValue: 3,
    }
  },
  notes: {
    type: String,
    label: "Notes",
    optional: true,
  },
  finishType: {
    type: String,
    label: "Type",
    optional: true,
    autoform: {
       options: [
          {
             label: "Painted",
             value: "Painted"
          },
          {
             label: "Stained",
             value: "Stained"
          },
          {
             label: "Unfinished",
             value: "Unfinished"
          },
       ], 
    },
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  finishColor: {
    type: String,
    label: "Color",
    optional: true,
  },
  caseMaterial: {
    type: String,
    label: "Case Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
    
  },
  doorFrameMaterial: {
    type: String,
    label: "Door Frame Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  doorPanelMaterial: {
    type: String,
    label: "Door Panel Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  drawerFaceFrameMaterial: {
    type: String,
    label: "Drawer Face Frame Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  drawerFacePanelMaterial: {
    type: String,
    label: "Drawer Face Panel Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  drawerBoxSideMaterial: {
    type: String,
    label: "Drawer Box Side Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  drawerBoxBottomMaterial: {
    type: String,
    label: "Drawer Box Bottom Material",
    optional: true,
   /* custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  ffMaterial: {
    type: String,
    label: "Face Frame Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  shelfMaterial: {
    type: String,
    label: "Shelf Material",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  runners: {
    type: String,
    label: "Drawer Runners",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  hinges: {
    type: String,
    label: "Hinges",
    optional: true,
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  pulls: {
    type: String,
    label: "Pulls",
    optional: true,
  },
  doorStyle: {
    type: String,
    label: "Door Style",
    optional: true,
    autoform: {
       options: [
          {
             label: "Shaker",
             value: "Shaker"
          },
          {
             label: "Slab",
             value: "Slab"
          },
          {
             label: "Raised Panel",
             value: "Raised Panel"
          },
       ]
    },
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  drawerFaceStyle: {
    type: String,
    label: "Drawer Face Style",
    optional: true,
    autoform: {
       options: [
          {
             label: "Shaker",
             value: "Shaker"
          },
          {
             label: "Slab",
             value: "Slab"
          },
          {
             label: "Raised Panel",
             value: "Raised Panel"
          },
       ]
    },
    /*custom: function () {
      var shouldBeRequired = this.field('template').value == null;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") {
            //myContext.addInvalidKeys([{name: "password", type: "wrongPassword"}]);
            Products.simpleSchema().namedContext('productSubmit').addInvalidKeys([{name: 'name', type: 'required'}]);
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
    },*/
  },
  topOffset: {
    type: Number,
    decimal: true,
    label: "Top Offset",
    optional: true,
    autoform:{
      defaultValue: 0.25,
    }
  },
  bottomOffset: {
    type: Number,
    decimal: true,
    label: "Bottom Offset",
    optional: true,
    autoform:{
      defaultValue: 0,
    }
  },
  leftOffset: {
    type: Number,
    decimal: true,
    label: "Left Offset",
    optional: true,
    autoform:{
      defaultValue: 0.25,
    }
  },
  rightOffset: {
    type: Number,
    decimal: true,
    label: "Right Offset",
    optional: true,
    autoform:{
      defaultValue: 0.25,
    }
  },
  centerOffset: {
    type: Number,
    decimal: true,
    label: "Center Offset",
    optional: true,
    autoform:{
      defaultValue: 0.09375,
    }
  },
  drawerOffset: {
    type: Number,
    decimal: true,
    label: "Drawer Offset",
    optional: true,
    autoform:{
      defaultValue: 0.25,
    }
  },
  
}));


//Sample of adding separate schema for separate products
/*Schemas.Book = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        optional: true,
        max: 200,
        defaultValue: "Test",
    },
});

Meteor.methods({
    'attachCabinetSchema': function(){
        //For some reason this attachSchema function gets called everytime without the if statement
        if(true)
          Products.attachSchema(Schemas.Book);
    }
});*/




/*Meteor.methods({
  productInsert: function(productAttributes) {
    check(this.userId, String);
    check(productAttributes, Products.simpleSchema());


    var user = Meteor.user();

    product = _.extend(productAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    //Plates.update(comment.plateId, {$inc: {commentsCount: 1}});

    var productId = Products.insert(user, product);

    return {
      _id: productId
    }; 

  },
 
});*/


