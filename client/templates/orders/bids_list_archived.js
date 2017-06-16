Template.bidsListArchived.helpers({
  orders: function() {
    return Orders.find(/*{status: "Lost"}, {sort: {jobName: 1}}*/);
  }
});


//"Lost"