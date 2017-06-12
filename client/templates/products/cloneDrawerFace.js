cloneDrawerFace = function(productId, templateId){
  //var must be named 'product' in order to work properly with supplied formulas. 
  var product = Products.findOne({_id: productId});
  var orderId = product.orderId;
  console.log("CloneDrawer Entered");
  
  Components.find({productId: productId, type: 'Drawer Face'}).forEach(function(c) {
    
    //Var must be named "cpmponent" in order to work with supplied formulas.
    var component = c;
    console.log(c.name);

    //Finds all parts associated with the Door Style Template
    Parts.find({componentId: product.drawerFaceStyle}).forEach(function(p) {
      
      console.log("Entered CloneDrawer Parts");

      var partWidth = eval(p.widthFormula);
      var partLength = eval(p.lengthFormula);
      var partDepth = eval(p.depthFormula); 
      //var material = eval(p.materialFormula);
      var partMaterial = '';

      if(p.materialType === "Drawer Face Frame")
      {
        partMaterial = product.drawerFaceFrameMaterial;
      }  
      else if(p.materialType === "Drawer Face Panel")
      {
        partMaterial = product.drawerFacePanelMaterial;
      }
      else if(p.materialType === 'Runner'){
      //Sets componement material to inherit from product
        partMaterial = product.runners;
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

        Meteor.call('partInsert', newPart, function(error, resultId) {
        if (error){
          throwError(error.reason);
        } 
          console.log("clone drawer face part 1")
        });

    });



  });
}