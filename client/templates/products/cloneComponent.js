cloneComponent = function(component, templateId){
  //var must be named 'product' in order to work properly with supplied formulas. 
  //var product = Products.findOne({_id: productId});
  //var orderId = product.orderId;
  var componentId = component._id;


  Parts.find({componentId: templateId}).forEach(function(p) {
    
    //var width = eval(c.widthFormula);
    //var height = eval(c.heightFormula);
    //var depth = eval(c.depthFormula);
  

    var newPart = {
          //orderId: orderId,
          productId: component.productId,
          componentId: componentId,
          name: p.name,
          widthFormula: p.widthFormula,
          lengthFormula: p.lengthFormula,
          depthFormula: p.depthFormula,
          materialType: p.materialType,
          materialFormula: p.materialFormula,
          inputCostId: p.inputCostId,
    };

    Meteor.call('partInsert', newPart, function(error, resultId) {
      if (error){
        throwError(error.reason);
      } 
      console.log("clone part worked!")
    });

  });

}