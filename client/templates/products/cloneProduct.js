cloneProduct = function(productId, templateId){
  //var must be named 'product' in order to work properly with supplied formulas. 
  var product = Products.findOne({_id: productId});
  var orderId = product.orderId;
  var order = Orders.findOne({_id: orderId});
  
  
  Components.find({productId: templateId}).forEach(function(c) {
    //var must be named 'component' in order to work properly with supplied formulas. 
    //var component = c;
    var width = eval(c.widthFormula);
    var height = eval(c.heightFormula);
    var depth = eval(c.depthFormula);  
    var componentName = c.name;
    var clonedProcessList = [];
    console.log(c.processes);
    
    if(c.processes){
      c.processes.forEach(i => {
      var currentProcess = Processes.findOne(i);
      console.log("Processes", currentProcess);
      var newProcess = {
        orderId: orderId,
        name: currentProcess.name,
        time: currentProcess.time,
      }

      //
      var clonedProcess = Processes.insert(newProcess);

     
      console.log("Result", clonedProcess);

      clonedProcessList.push(clonedProcess);
      });
    }
    

    console.log("Cloned Process List", clonedProcessList);
    


    if(c.type === 'Door'){
      var doorTemplateName = Components.findOne({_id: order.doorStyle}).name;
      componentName = doorTemplateName;
    
    }
    if(c.type === 'Drawer Face'){
      var doorTemplateName = Components.findOne({_id: order.drawerFaceStyle}).name;
      componentName = doorTemplateName;

    }

    
   
    var newComponent = {
          orderId: orderId,
          productId: productId,
          name: componentName,
          type: c.type,
          width: width,
          height: height,
          depth: depth,
          widthFormula: c.widthFormula,
          heightFormula: c.heightFormula,
          depthFormula: c.depthFormula,
          buildTime: c.buildTime,
          processes: clonedProcessList,
    };

    //console.log("List Processes:", processes);
    
    Parts.find({componentId: c._id}).forEach(function(p) {
      var component = newComponent;
      var partWidth = eval(p.widthFormula);
      var partLength = eval(p.lengthFormula);
      var partDepth = eval(p.depthFormula); 
      var partMaterial = eval(p.materialFormula);
      
      if(p.materialType === "Case")
      {
        partMaterial = order.caseMaterial;
      }
      if(p.materialType === "Door Frame")
      {
        partMaterial = order.doorFrameMaterial;
      }  
      if(p.materialType === "Door Panel")
      {
        partMaterial = order.doorPanelMaterial;
      } 
      if(p.materialType === "Drawer Face Frame")
      {
        partMaterial = order.drawerFaceFrameMaterial;
      } 
      if(p.materialType === "Drawer Face Panel")
      {
        partMaterial = order.drawerFacePanelMaterial;
      } 
      if(p.materialType === "Drawer Box Side")
      {
        partMaterial = order.drawerBoxSideMaterial;
      } 
      if(p.materialType === "Drawer Box Bottom")
      {
        partMaterial = order.drawerBoxBottomMaterial;
      } 
      if(p.materialType === "Face Frame")
      {
        partMaterial = order.ffMaterial;
      } 
      if(p.materialType === "Shelf")
      {
        partMaterial = order.shelfMaterial;
      } 
      if(p.materialType === "End Panel")
      {
        partMaterial = order.endPanelMaterial;
      } 
      if(p.materialType === "Toe Kick")
      {
        partMaterial = order.toeKickMaterial;
      } 
      if(p.materialType === "Crown")
      {
        partMaterial = order.crownMaterial;
      } 
     /* if(p.materialType === "Runner")
      {
        partMaterial = order.runners;
      } 
      if(p.materialType === "Hinge")
      {
        partMaterial = order.hinges;
      } 
      if(p.materialType === "Pull")
      {
        partMaterial = order.pulls;
      } */

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
          material: partMaterial,
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
      });

      if(product.subcategory === 'Wall Cabinets' && product.height > 24 && c.type === 'Shelf')
      {
        Meteor.call('partInsert', newPart, function(error, resultId) {
          if (error){
            throwError(error.reason);
          }  
        });
      }

      if(product.subcategory === 'Wall Cabinets' && product.height > 36 && c.type === 'Shelf')
      {
        Meteor.call('partInsert', newPart, function(error, resultId) {
          if (error){
            throwError(error.reason);
          }  
        });
      }
    
    });

    
    Meteor.call('componentInsert', newComponent, function(error, resultId) {
      if (error){
        throwError(error.reason);
      } 
    });

   
  });

}







