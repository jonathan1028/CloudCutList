Template.orderSubmit.onCreated(function() {
  Session.set('orderSubmitErrors', {});
});

Template.orderSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('orderSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('orderSubmitErrors')[field] ? 'has-error' : '';
  },
  cabinetStyle: function(){
    x = [
          {
            name: 'Shaker', 
            label: 'Shaker', 
          },
          {
            name: 'FlushFace', 
            label:'Flush Face', 
          },
          
          
        ]
   
    return x;
  },
  styles: function () {
    
    return [
      {
        options: [
          {label: "2014", value: 2014},
          {label: "2013", value: 2013},
          {label: "2012", value: 2012}
        ]
      },
    
    ];
  },
  optionsHelper: function () {
   return Customers.find().map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  //-------------------- Style ----------------------------------------------------------
  doorStyleOptions: function(){
    return Components.find({template: 2}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFaceStyleOptions: function(){
    return Components.find({template: 3}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  //-------------------- Materials ----------------------------------------------------------
  caseMaterialOptions: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  doorFrameMaterialOptions: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  doorPanelMaterialOptions: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFaceFrameMaterialOptions: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFacePanelMaterialOptions: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxSideMaterialOptions: function(){
    return InputCosts.find({type: 'Drawer Box Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxBottomMaterialOptions: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  ffMaterialOptions: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  shelfMaterialOptions: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
   toeKickMaterialOptions: function(){
    return InputCosts.find({type: 'Toe Kick Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  endPanelMaterialOptions: function(){
    return InputCosts.find({type: 'End Panel Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  crownMaterialOptions: function(){
    return InputCosts.find({type: 'Crown Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  runnerOptions: function(){
    return InputCosts.find({type: 'Drawer Runner'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  hingeOptions: function(){
    return InputCosts.find({type: 'Hinge'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },

});

Template.orderSubmit.rendered=function() {
  $('#my-datepicker').datepicker();
}

AutoForm.hooks({
  orderSubmit: {
    before: {
      insert: function(doc) {
        doc.status = "1 - Opportunity";
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  orderSubmit: {
    
    onSuccess: function(update, result) {
      Router.go('orderPage', {_id: this.docId});
    }
  }
});

