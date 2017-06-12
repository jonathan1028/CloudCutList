Template.productTemplatePage.helpers({
  orders: function() {
    return Orders.find();
  },
  components: function() {
    return Components.find({productId: this._id}); 
  },
  parts: function(model) {
	return Parts.find({productId: model._id}); 
  },
});

Template.productTemplatePage.events({ 

  'click .deleteProduct': function(e) { e.preventDefault();

    if (confirm("Delete this product?")) { 
      var currentProductId = this._id; 

      Parts.find({productId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });

      
      Products.remove(currentProductId); 
      Router.go('productsList');
    } 
  }
});