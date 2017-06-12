Template.takeoffPage.helpers({
  materials: function() {
    return Materials.find({ $or : [{ type: 'wood'}, { type: 'hardware'}] }); 
  },
  exactQuantity: function(material) {
    var totalQuantity = sumQuantity(material);

    totalQuantity = accounting.formatMoney(totalQuantity, "", 2);
    return totalQuantity;
  },
  orderQuantity: function(material) {
    var totalQuantity = 0;
    //var test = 7;
    //test = material.type;
    //test = Materials.findOne({name: name}).name;

    if(material.type === 'wood'){
      rawQuantity = sumQuantity(material);

      rawQuantity = rawQuantity * 1.2;
      totalQuantity = Math.round(rawQuantity);
      testRounding = rawQuantity - totalQuantity;

      if (testRounding > 0){
        totalQuantity++;
      }

      
    }

    if(material.type === 'hardware'){
      Parts.find({orderId: Router.current().params._id, material: material.name}).forEach(function(part) {
      
        totalQuantity = totalQuantity + part.qty;
        
      });
    }

    totalQuantity = accounting.formatMoney(totalQuantity, "", 0);
    return totalQuantity;
  },
  
  

});

sumQuantity = function(material){
    var totalQuantity = 0;

    Parts.find({orderId: Router.current().params._id, material: material.name}).forEach(function(part) {
    
      totalQuantity = totalQuantity + part.qty;
      
    });

    return totalQuantity;
}




