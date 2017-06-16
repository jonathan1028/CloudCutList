Template.orderItemArchived.helpers({
  customerName: function() {
    //var buildTime = 0;

    name = Customers.findOne({_id: this.customerId}).name;
    
    return name;
  },
});

Template.orderItemArchived.events({ 
  'click .makeActive': function(e) { e.preventDefault();
        Orders.update(this._id, {
          $set: {status: "Won"}
        });
        Router.go('ordersList'); 
    }
});