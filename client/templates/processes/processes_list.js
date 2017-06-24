Template.processesList.helpers({
  processes: function() {
    return Processes.find();
  }
});

Template.processesList.events({
  'click .tableRow': function(e) {
    Router.go('processPage', {_id: this._id});
   
  },
 
});