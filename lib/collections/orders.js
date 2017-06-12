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

