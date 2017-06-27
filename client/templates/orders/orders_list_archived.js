Template.ordersListArchived.helpers({
  orders: function() {
    return Orders.find({status: "Archive"}, {sort: {jobName: 1}});
  }
});
