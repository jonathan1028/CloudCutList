Template.cutlistItem.helpers({
  cost: function(model) {
    material = Materials.findOne({name: model.material}); 
    partCost = material.cost * model.qty;
    partCost = accounting.formatMoney(partCost, "$", 2);
    return partCost;
  },
});