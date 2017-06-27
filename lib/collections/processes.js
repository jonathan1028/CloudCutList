Processes = new Mongo.Collection('processes');

Processes.allow({
  insert: function(userId, doc) { return true; }, 
  update: function(userId, doc) { return true; }, 
  remove: function(userId, doc) { return true; },
});

Processes.attachSchema(new SimpleSchema({
  orderId: {
    type: String,
    label: "OrderId",
    optional: true,
  },
  name: {
    type: String,
    label: "Name",
  },
  time: {
    type: String,
    label: "Hours to Complete",
  },
  template: {
    type: Boolean,
    label: "Template",
    optional: true,
  },
  finish: {
    type: Boolean,
    label: "Finish Process",
    optional: true,
  },
  completed: {
    type: Date,
    label: "Completed At",
    optional: true,
  },
}));  

Meteor.methods({
  processInsert: function(doc) {
    check(this.userId, String);
    check(doc, Processes.simpleSchema());

    var user = Meteor.user();

    obj = _.extend(doc, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var id = Processes.insert(doc);

    return id;
  },
});





