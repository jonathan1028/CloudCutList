Template.customerEdit.helpers({
   
});

AutoForm.hooks({
  customerEdit: {
    onSuccess: function(update, result) {

      Router.go('customersList');
    }
  }
});

Template.customerEdit.events({ 
  'click .delete': function(e) { e.preventDefault();

      if (confirm("Delete this customer and all of its orders?")) { 
        var customerId = this._id;
        
        Customers.remove(customerId); 
        Router.go('customersList');
      } 
    }
});