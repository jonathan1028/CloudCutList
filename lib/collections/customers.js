Customers = new Mongo.Collection('customers');

/*orders.allow({
  // only allow posting if you are logged in
  insert: function(userId, doc) { return !! userId;}
});*/

Customers.allow({
  insert: function(userId, customer) { return true; }, 
  update: function(userId, customer) { return true; }, 
  remove: function(userId, customer) { return true; },
});

Customers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  mPhone: {
    type: String,
    label: "Mobile Phone",
    optional: true,
  },
  oPhone: {
    type: String,
    label: "Office Phone",
    optional: true,
  },
  email: {
    type: String,
    label: "Email",
    optional: true,
  },
  
    
}));  

Meteor.methods({
  customerInsert: function(customerAttributes) {
    check(this.userId, String);
    check(customerAttributes, Customers.simpleSchema());

    var user = Meteor.user();
    var object = _.extend(customerAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    var objectId = Customers.insert(object);

    return {
      _id: objectId
    }; 
  }
});

