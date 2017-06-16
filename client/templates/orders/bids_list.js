Template.bidsList.helpers({
  orders: function() {
    return Orders.find({$or: [{status: "1 - Opportunity"}, {status: "2 - Plans Received"}, {status: "3 - Design Submitted"}, 
    	{status: "4 - Design Approved"}, {status: "5 - Bid Submitted"}, {status: "Active"}]}, {sort: {status: 1}});
  }
});


