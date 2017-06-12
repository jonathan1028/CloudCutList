Template.orderPage.helpers({
  orders: function() {
    return Orders.find();
  },
  products: function() {
  	
    return Products.find({orderId: this._id}); 
  },
});




