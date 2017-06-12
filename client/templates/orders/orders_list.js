Template.ordersList.helpers({
  orders: function() {
    return Orders.find({status: "Active"}, {sort: {dueDate: 1}});
  }
});
