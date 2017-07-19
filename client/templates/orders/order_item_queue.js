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
          thisProcess = Processes.findOne({_id: i});
          //if process is unique add it to the list array
          if(!list.find( function( ele ) { return ele.name === thisProcess.name;} ) )
          {
            list.push({id: i, count: 1, name: thisProcess.name, time: thisProcess.time});
          }
          //if process has already been added to the list, increase it's count
          else
          {
            x = list.find( function( ele ) { return ele.name === thisProcess.name;});
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
    var completed = Processes.findOne({_id: processId}).completed;
    if(completed)
      return moment(completed).format('MM/DD/YYYY');
    else
      return null;
  },
  getTime: (processId, count) => {
    time = Processes.findOne({_id: processId}).time;
    totalTime = time * count;
    totalTime = accounting.formatMoney(totalTime, "", 2);
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
      var thisProcess = Processes.findOne({_id: i.id});
      if(thisProcess.completed === null){
        time = parseFloat(thisProcess.time * i.count);
        totalTime = totalTime + time;
      }
      
    });  
    totalTime = accounting.formatMoney(totalTime, "", 2);
    return totalTime;
  },
  percentComplete: (processesList) => {
    time = 0;
    totalTime = 0;
    completedTotalTime = 0;
    completedTime = 0;
    percentComplete = 0;

    processesList.forEach(function (i){
      var thisProcess = Processes.findOne({_id: i.id});
      
      time = parseFloat(thisProcess.time * i.count);
      totalTime = totalTime + time;

      if(thisProcess.completed === null){
        completedTime = parseFloat(thisProcess.time * i.count);
        completedTotalTime = completedTotalTime + completedTime;
      } 
    });  

    //percentComplete = completedTotalTime/totalTime;
    percentComplete = (totalTime - completedTotalTime)/totalTime * 100;

    percentComplete = accounting.formatMoney(percentComplete, "", 2);
    return percentComplete;
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
    var checkedProcess = Processes.findOne({_id: this.id});
    

    if(checkedProcess.completed){

      Components.find({orderId: checkedProcess.orderId}).forEach(i => {
        
        var processList = i.processes
        processList.forEach(p=>{
          var thisProcess = Processes.findOne({_id: p});
          if(thisProcess.name === checkedProcess.name)
          {
              //Sets all processes in the order with the same name to null
              Processes.update({ _id: thisProcess._id }, {$set: { completed: null }});
              

          }
        });
      });
        
    } 
    else {
      var timeCompleted = new Date();
      
      Components.find({orderId: checkedProcess.orderId}).forEach(i => {
      
        var processList = i.processes
        processList.forEach(p=>{
          var thisProcess = Processes.findOne({_id: p});
          if(thisProcess.name === checkedProcess.name)
          {
              //Sets all processes in the order with the same name to the current date
              Processes.update({ _id: p }, {$set: { completed: timeCompleted }});
          }
        });
      });

    }
  }
 
});





