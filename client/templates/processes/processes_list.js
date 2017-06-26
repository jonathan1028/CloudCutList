Template.processesList.helpers({
  processes: function() {
    return Processes.find({template: true});
  }
});

Template.processesList.events({
  'click .tableRow': function(e) {
    Router.go('processPage', {_id: this._id});
   
  },
 
});