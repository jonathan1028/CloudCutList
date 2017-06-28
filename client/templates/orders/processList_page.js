Template.processListPage.helpers({
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
    return Processes.findOne({_id: processId}).completed;
  },
  getTime: (processId, count) => {
    time = Processes.findOne({_id: processId}).time;
    totalTime = time * count;
    totalTime = accounting.formatMoney(totalTime, "", 2);
    return totalTime;
  },
  materialName: function(id) {
    return InputCosts.findOne({_id: id}).name;
  },
  setOrderId: function(order){
    return Session.set("orderId", order._id);
  },
  setMaterialName: function(material){
    console.log("Set Material", material);
    return Session.set("materialName", material);
  },
  getMaterialName: function(materialName){
    return Session.get("materialName");
  },
  partsList: function(partName, material) {
	   //material = Session.get("materialName");
     console.log("Count");
     Parts.find({orderId: Session.get("orderId"), name: partName, material: material}).forEach(function(part) {
      console.log("Name", part.name)
      
    });

    return Parts.find({orderId: Session.get("orderId"), name: partName, material: material});
     //filter3 = filter2.find({description: description});
     //return Parts.find({orderId: Session.get("orderId")});
     //return filter2;
  },
  
  materials: function(model) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    var materials = [];
    var count = 0;
    
    Parts.find({orderId: Session.get("orderId")}, {sort: {material: -1, description: -1}}).forEach(function(part) {
      if(materials.includes(part.material))
      {
        
      }
      else
      {
        materials.push(part.material);
        console.log("MaterialList", part.material);
      }  
      
    });
    
    return materials;
  },

  partNames: function(material) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    descriptions = [];
    var test = [1,2,3];
    
    Parts.find({orderId: Session.get("orderId"), material: material},{sort: {material: -1}}).forEach(function(part) {
      if(descriptions.includes(part.name))
      {
        
      }
      else
      {
        descriptions.push(part.name);
      }  
      
    });
    
    return descriptions;
  },
  componentTypes: function(description) {
     //return Components.find({orderId: Session.get("orderId")});
    components = [];
    var count = 0;
    
    Components.find({orderId: Session.get("orderId")}).forEach(function(c) {
      if(components.includes(c.type))
      {
        
      }
      else
      {
        components.push(c.type);
      }  
      
    });
    
    return components;
     
  },
  parts: function(componentType) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    parts = [];
    var test = [1,2,3];

    //Components.find({orderId: Session.get("orderId"), name: componentName})
    
    return Parts.find({orderId: Session.get("orderId"), componentType: componentType}, {sort: {name: 1, productName: -1}});
  },
  /*convertToFraction: function(num) {
    var frac = num;
    if(num % 1 != 0)
      frac = fraction(num);
    console.log(num);
    console.log(frac);
    return frac;
  },*/

  

});




