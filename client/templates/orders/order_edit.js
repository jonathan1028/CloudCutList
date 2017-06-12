Template.orderEdit.helpers({
   optionsHelper: function () {
   return Customers.find().map(function (c){
      return {label: c.name, value: c._id};
    });
  },
});

AutoForm.hooks({
  orderEdit: {
    onSuccess: function(update, result) {
      //var productId = Components.findOne({_id: this.docId}).productId;
      Router.go('orderPage', {_id: this.docId});
    }
  }
});

Template.orderEdit.events({ 
  'click .deleteOrder': function(e) { e.preventDefault();

      if (confirm("Delete this order and all of its products?")) { 
        var currentorderId = this._id;
        
        Products.find({orderId: this._id}).forEach(function(p) {
          Products.remove(p._id);
        });

        Components.find({orderId: this._id}).forEach(function(c) {
          Components.remove(c._id);
        });

        Parts.find({orderId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });
        
        Orders.remove(currentorderId); 
        Router.go('ordersList');
      } 
    }
});