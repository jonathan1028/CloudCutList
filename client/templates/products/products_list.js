Template.productsList.helpers({
  baseCabinets: function() {
    return Products.find({template: 1, subcategory: 'Base Cabinets'});
  },
  wallCabinets: function() {
    return Products.find({template: 1, subcategory: 'Wall Cabinets'});
  },
  tallCabinets: function() {
    return Products.find({template: 1, subcategory: 'Tall Cabinets'});
  },
});
