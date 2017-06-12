Template.customerPage.helpers({
  orders: function() {
    return Orders.find({customerId: this._id});
  },
});
