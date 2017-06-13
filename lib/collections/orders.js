Orders = new Mongo.Collection('orders');

/*orders.allow({
  // only allow posting if you are logged in
  insert: function(userId, doc) { return !! userId;}
});*/

Orders.allow({
  insert: function(userId, order) { return true; }, 
  update: function(userId, order) { return true; }, 
  remove: function(userId, order) { return true; },
});

Orders.attachSchema(new SimpleSchema({
  customerId: {
    type: String,
    label: "Customer ID",
    optional: true,
  },
  status: {
    type: String,
    label: "Status",
    optional: true,
    autoform:{
      defaultValue: "Active",
    }
  },
  jobName: {
    type: String,
    label: "Job Name",
  },
  dueDate: {
    type: Date,
    label: "Due Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker"
    },
  },
  doorStyle: {
    type: String,
    label: "Door Style",
    /*autoform: {
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
    },*/
  },
  drawerFaceStyle: {
    type: String,
    label: "Drawer Face Style",
    /*autoform: {
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
    },*/
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
  },
  finishColor: {
    type: String,
    label: "Color",
    optional: true,
  },
  caseMaterial: {
    type: String,
    label: "Case Material",
  },
  doorFrameMaterial: {
    type: String,
    label: "Door Frame Material",
  },
  doorPanelMaterial: {
    type: String,
    label: "Door Panel Material",
  },
  drawerFaceFrameMaterial: {
    type: String,
    label: "Drawer Face Frame Material",
  },
  drawerFacePanelMaterial: {
    type: String,
    label: "Drawer Face Panel Material",
  },
  drawerBoxSideMaterial: {
    type: String,
    label: "Drawer Box Side Material",
  },
  drawerBoxBottomMaterial: {
    type: String,
    label: "Drawer Box Bottom Material",
  },
  ffMaterial: {
    type: String,
    label: "Face Frame Material",
  },
  shelfMaterial: {
    type: String,
    label: "Shelf Material",
  },
  runners: {
    type: String,
    label: "Drawer Runners",
  },
  hinges: {
    type: String,
    label: "Hinges",
  },

}));  

Meteor.methods({
  orderInsert: function(orderAttributes) {
    check(this.userId, String);
    check(orderAttributes, Orders.simpleSchema());

    var user = Meteor.user();
    var order = _.extend(orderAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    var orderId = Orders.insert(order);

    return {
      _id: orderId
    }; 
  }
});

