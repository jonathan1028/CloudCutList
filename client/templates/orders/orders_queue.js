Template.ordersQueue.onCreated(function() {
  Session.set("availableLabor", 60);
});

Template.ordersQueue.helpers({
  orders: function() {
    return Orders.find({status: "Won"}, {sort: {dueDate: 1}});
  },
  availableLabor: function() {
    return Session.get("availableLabor");
  },
  timeInQueue: function() {
    var time = 0;
    var totalTime = 0;

    Orders.find({status: "Won"}, {sort: {dueDate: 1}}).forEach(i=>{
    	Processes.find({orderId: i._id}).forEach(p=>{	
	      if(!p.completed){
	    	  time = parseFloat(p.time);
		      totalTime = totalTime + time;	 
		  }   
    	});
    });
    totalTime = accounting.formatMoney(totalTime, "", 2);
    return totalTime;
  },
  percentComplete: function() {
    var time = 0;
    var totalTime = 0;
    var completedTime = 0;
    var totalCompletedTime = 0;
    var percentComplete = 0;

    //Only seems to be accounting for 50% of the processes
    Orders.find({status: "Won"}, {sort: {dueDate: 1}}).forEach(i=>{
    	Processes.find({orderId: i._id}).forEach(p=>{	
	    	if(p.completed){
	    		console.log("Test");
	    		completedTime = parseFloat(p.time);
	    		totalCompletedTime = totalCompletedTime + completedTime;
	    	}

	    	time = parseFloat(p.time);
		    totalTime = totalTime + time;
    	});
    });
    percentComplete = totalCompletedTime/totalTime * 100;
    percentComplete = accounting.formatMoney(percentComplete, "", 2);
    return percentComplete;
  },
  completionDate: function(timeInQueue) {
    var availableLabor = Session.get("availableLabor");
    var completionDate = new Date();
    var days = 0;

    //Formula adds 20% buffer for contingency
    days = (timeInQueue*1.2)/(availableLabor/5);
    //Rounds up
    days = Math.ceil(days);
    
    completionDate = moment(completionDate).format('MM-DD-YYYY');
    console.log("Date", completionDate);
    //Figure out how to add business days only to the calendar
    completionDate = moment(completionDate, 'MM-DD-YYYY').businessAdd(days)._d
    completionDate = moment(completionDate).format('MM/DD/YYYY');
    return completionDate;

    //return moment(completionDate).format('MM/DD/YYYY');
    //return days;
  },
});

Template.ordersQueue.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var availableLabor = parseFloat($(e.target).find('[name=availableLabor]').val());
    Session.set("availableLabor", availableLabor);
    console.log(availableLabor);     

  }
});