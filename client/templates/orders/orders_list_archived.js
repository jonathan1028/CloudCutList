Template.ordersListArchived.helpers({
  orders: function() {
    return Orders.find({status: {$not: "Active"}}, {sort: {jobName: 1}});
  }
});
