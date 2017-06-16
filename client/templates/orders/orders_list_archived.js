Template.ordersListArchived.helpers({
  orders: function() {
    return Orders.find({status: {$not: "Archive"}}, {sort: {jobName: 1}});
  }
});
