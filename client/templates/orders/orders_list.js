Template.ordersList.helpers({
  orders: function() {
    return Orders.find({status: "Won"}, {sort: {dueDate: 1}});
  }
});
