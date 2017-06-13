cloneDoor = function(productId, templateId){
  //var must be named 'product' in order to work properly with supplied formulas. 
  var product = Products.findOne({_id: productId});
  var orderId = product.orderId;
  var order = Orders.findOne({_id: orderId});
  console.log("CloneDoor Entered");
  
  Components.find({productId: productId, type: 'Door'}).forEach(function(c) {
    
    //Var must be named "cpmponent" in order to work with supplied formulas.
    var component = c;
    console.log(c.name);

    //Finds all parts associated with the Door Style Template
    Parts.find({componentId: order.doorStyle}).forEach(function(p) {
      
      console.log("Entered CloneDoor Parts");

      var partWidth = eval(p.widthFormula);
      var partLength = eval(p.lengthFormula);
      var partDepth = eval(p.depthFormula); 
      var partMaterial = '';
      //var material = eval(p.materialFormula);
      console.log("Material Type =", p.materialType);
      if(p.materialType === "Door Frame")
      {
        partMaterial = order.doorFrameMaterial;
      }  
      else if(p.materialType === "Door Panel")
      {
        partMaterial = order.doorPanelMaterial;
      }
      else if(p.materialType === 'Hinge'){
        partMaterial = order.hinges;
      }
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

      console.log("Part Material = ", partMaterial);

        Meteor.call('partInsert', newPart, function(error, resultId) {
        if (error){
          throwError(error.reason);
        } 
          console.log("clone door part 1")
        });

    });



  });
}