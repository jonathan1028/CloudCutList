Template.productsList.onCreated(function() {
  Session.set("currentCategory", null);
});

Template.productsList.helpers({
  category: function() {
    return [
      {
        label: 'Frameless Cabinets', 
        value: 'Frameless Cabinets', 
      },
      {
        label: 'Face Frame Cabinets', 
        value: 'Face Frame Cabinets', 
      },
      {
        label: 'Furniture', 
        value: 'Furniture', 
      },
    ]
  },
  baseCabinets: function() {
    var category = Session.get("currentCategory");
    return Products.find({category: category, template: 1, subcategory: 'Base Cabinets'});
  },
  wallCabinets: function() {
    var category = Session.get("currentCategory");
    return Products.find({category: category, template: 1, subcategory: 'Wall Cabinets'});
  },
  tallCabinets: function() {
    var category = Session.get("currentCategory");
    return Products.find({category: category, template: 1, subcategory: 'Tall Cabinets'});
  },
  trim: function() {
    var category = Session.get("currentCategory");
    //is not filtered by category
    return Products.find({template: 1, subcategory: 'Trim'});
  },
});

Template.productsList.events({
  'change #category': function(event) {
    var category = event.target.value
    Session.set("currentCategory", category);
    console.log(category);
  }, 
});