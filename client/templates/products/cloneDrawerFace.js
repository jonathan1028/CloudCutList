cloneDrawerFace = function(productId, templateId){
  //var must be named 'product' in order to work properly with supplied formulas. 
  var product = Products.findOne({_id: productId});
  var orderId = product.orderId;
  var order = Orders.findOne({_id: orderId});
  console.log("CloneDrawer Entered");
  
  Components.find({productId: productId, type: 'Drawer Face'}).forEach(function(c) {
    
    //Grabs processList from Component
    var newProcessList = c.processes;
    
    //clones all drawer face processes from the component drawer face template
    Components.find({_id: order.drawerFaceStyle}).forEach(function(t) {
      
      console.log(t.processes);
      
      //copies template processes
      if(t.processes){
        t.processes.forEach(i => {
          var currentProcess = Processes.findOne(i);
          console.log("Processes", currentProcess);
          var newProcess = {
            orderId: orderId,
            name: currentProcess.name,
            time: currentProcess.time,
          }
          //creation of cloned process
          var clonedProcess = Processes.insert(newProcess);
          //Adds process to nonTemplate Components already existing processList
          newProcessList.push(clonedProcess);
        });
      }
      
      console.log("New Drawer Face Process List", newProcessList);

    });

    var componentProperties = {
      processes: newProcessList,
    }
    
    //Overwrites existing processlist with newly created one
    Components.update(c._id, {$set: componentProperties}, function(error) { 
      if (error) {
        throwError(error.reason);
      } 
    });

    //Var must be named "cpmponent" in order to work with supplied formulas.
    var component = c;

    //Finds all parts associated with the Door Style Template
    Parts.find({componentId: order.drawerFaceStyle}).forEach(function(p) {
      
      var partWidth = eval(p.widthFormula);
      var partLength = eval(p.lengthFormula);
      var partDepth = eval(p.depthFormula); 
      //var material = eval(p.materialFormula);
      var partMaterial = '';

      if(p.materialType === "Drawer Face Frame")
      {
        partMaterial = order.drawerFaceFrameMaterial;
      }  
      else if(p.materialType === "Drawer Face Panel")
      {
        partMaterial = order.drawerFacePanelMaterial;
      }
      /*else if(p.materialType === 'Runner'){
      //Sets componement material to inherit from product
        partMaterial = order.runners;
      }*/
      else
      {
        partMaterial = 'Error assigning inputCostId';
      }

      var newPart = {
          orderId: orderId,
          productId: productId,
          name: p.name,
          productName: product.name,
          componentName: c.name,
          componentType: c.type,
          materialType: p.materialType,
          width: partWidth,
          length: partLength,
          depth: partDepth,
          widthFormula: p.widthFormula,
          lengthFormula: p.lengthFormula,
          depthFormula: p.depthFormula,
          materialFormula: p.materialFormula,
          inputCostId: partMaterial,

      };

        Meteor.call('partInsert', newPart, function(error, resultId) {
        if (error){
          throwError(error.reason);
        } 
          console.log("clone drawer face part 1")
        });

    });



  });
}