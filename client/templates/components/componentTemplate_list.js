Template.componentTemplatesList.helpers({
  cases: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Case' });
  },
  fFrames: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Face Frame' });
  },
  doors: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Door' });
  },
  drawerFaces: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Drawer Face' });
  },
  drawerBoxes: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Drawer Box' });
  },
  shelves: function() {
    //return Components.find({template: 1, type: {$ne: 'Door'}, type: {$ne: 'Drawer Face'}});
    return Components.find({template: 1, type: 'Shelf' });
  },
  doorComponents: function() {
    return Components.find({template: 2});
  },
  drawerFaceComponents: function() {
    return Components.find({template: 3});
  },
});
