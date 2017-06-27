Template.processesList.helpers({
  processes: function() {
    return Processes.find({template: true}, {sort: {name: 1}});
  }
});

Template.processesList.events({
  'click .tableRow': function(e) {
    Router.go('processPage', {_id: this._id});
   
  },
 
});