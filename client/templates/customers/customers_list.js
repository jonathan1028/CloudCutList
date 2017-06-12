Template.customersList.helpers({
  customers: function() {
    return Customers.find();
  }
});

Template.customersList.events({
  'click .tableRow': function(e) {
    Router.go('customerPage', {_id: this._id});
   
  },
 
});