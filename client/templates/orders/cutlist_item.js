Template.cutlistItem.helpers({
  productName: function(part) {
    product = Products.findOne({_id: part.productId}); 
    return product.name;
  },
  materialName: function(id) {
    return InputCosts.findOne({_id: id}).name;
  },
  /*cost: function(model) {
    material = Materials.findOne({name: model.material}); 
    partCost = material.cost * model.qty;
    partCost = accounting.formatMoney(partCost, "$", 2);
    return partCost;
  },*/
  productNotes: function(part) {
    product = Products.findOne({_id: part.productId}); 
    return product.notes;
  },
});