Template.productPage.helpers({
  orders: function() {
    return Orders.find();
  },
  parts: function(model) {
	return Parts.find({productId: model._id}); 
  },
});
