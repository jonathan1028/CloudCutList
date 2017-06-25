Processes = new Mongo.Collection('processes');

Lists = new Mongo.Collection(null);

/*orders.allow({
  // only allow posting if you are logged in
  insert: function(userId, doc) { return !! userId;}
});*/

Processes.allow({
  insert: function(userId, order) { return true; }, 
  update: function(userId, order) { return true; }, 
  remove: function(userId, order) { return true; },
});

Processes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  time: {
    type: String,
    label: "Hours to Complete",
  },
  completed: {
    type: Date,
    label: "Completed At",
    optional: true,
  },
}));  



