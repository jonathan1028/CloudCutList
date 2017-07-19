Template.customerPage.helpers({
  orders: function() {
    return Orders.find({customerId: this._id});
  },
});

Template.customerPage.events({ 
  'click .delete': function(e) { e.preventDefault();

      if (confirm("Delete this customer and all of its orders?")) { 
        var customerId = this._id;
        
        Customers.remove(customerId); 
        Router.go('customersList');
      } 
    }
});