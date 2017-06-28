Template.componentTemplatesList.helpers({
  productCategories: function() {
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
  cases: function() {
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Case'});
  },
  fFrames: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Face Frame' });
  },
  doors: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Door' });
  },
  drawerFaces: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Drawer Face' });
  },
  drawerBoxes: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Drawer Box' });
  },
  shelves: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    var productCategory = Session.get("currentProductCategory");
    return Components.find({category: productCategory, template: 1, type: 'Shelf' });
  },
  trim: function() {
    //trim is not filtered by category
    return Components.find({template: 1, type: 'Trim' });
  },
  doorComponents: function() {
    var productCategory = Session.get("currentProductCategory");
    return Components.find({template: 2});
  },
  drawerFaceComponents: function() {
    var productCategory = Session.get("currentProductCategory");
    return Components.find({template: 3});
  },
});

Template.componentTemplatesList.events({
  'change #productCategory': function(event) {
    var productCategory = event.target.value
    Session.set("currentProductCategory", productCategory);
    console.log(productCategory);
  }, 
});