Template.orderItemQueue.helpers({
  processesList: function() {
    var processSet = [];
    var list = [];
    var y = 0;
    
    //Finds all processes for the order
    Components.find({orderId: this._id}).forEach(function(i) {
     
      //The processes specific to the current Component
      processSet = i.processes;
      
      if(processSet){
        //iterates through current Component's list of processes
        processSet.forEach(function(i){
          
          //if process is unique add it to the list array
          if(!list.find( function( ele ) { return ele.id === i;} ) )
          {
            list.push({id: i, count: 1});
          }
          //if process has already been added to the list, increase it's count
          else
          {
            x = list.find( function( ele ) { return ele.id === i;});
            y = x.count;
            y++;
            x.count = y;
          }
        });
      }
    });
    
    return list;
  },
  getName: (processId) => {
    return Processes.findOne({_id: processId}).name;
  },
  getProcess: () => {
    return Processes.findOne({_id: this.id});
  },
  getCompleted: (processId) => {
    return Processes.findOne({_id: processId}).completed;
  },
  getTime: (processId, count) => {
    time = Processes.findOne({_id: processId}).time;
    totalTime = time * count;
    return totalTime;
  },
 'checked': function(){
      var isCompleted = Processes.findOne({_id: this.id}).completed;
      if(isCompleted){
          return "checked";
      } else {
          return "";
      }
  },
  hrsRemaining: (processesList) => {
    totalTime = 0;
    time = 0;
      //time = Processes.findOne({_id: processId}).time;
    processesList.forEach(function (i){
      time = parseFloat(Processes.findOne({_id: i.id}).time) * i.count;
      totalTime = totalTime + time;
    });  

    return totalTime;
  },
  productCount: function() {
    return Products.find({orderId: this._id}).count();
  },
  buildTime: function() {
    var buildTime = 0;

    Components.find({orderId: this._id}).forEach(function(c){
      buildTime = buildTime + c.buildTime;
    });
    
    buildTime = buildTime.toFixed(2);
 
    return buildTime;
  },
  customerName: function() {
    //var buildTime = 0;

    name = Customers.findOne({_id: this.customerId}).name;
    
    return name;
  },
});


Template.orderItemQueue.events({
  /*'click [name=completeProcess]': function(event) {
    //var x = $(event.target).is(":checked").val()
    var x = event.target.checked;

    Session.set('copySettingsState', event.target.checked);
  },*/
  'change [name=completedProcess]': function(){
    var docId = this.id;
    console.log(docId);
    var thisProcess = Processes.findOne({_id: this.id});
    

    if(thisProcess.completed){
        Processes.update({ _id: this.id }, {$set: { completed: null }});
        console.log("Task marked as incomplete.");
    } else {
        var timeCompleted = new Date();
        Processes.update({ _id: this.id }, {$set: { completed: timeCompleted }});
        console.log("Task marked as complete.", timeCompleted);
    }
  }
 
});





