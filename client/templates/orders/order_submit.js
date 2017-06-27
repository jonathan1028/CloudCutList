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
  roughLumberAndSheetGoods: function () {
    sheetGoods = [];
    sheetGoods = InputCosts.find({type: 'Sheet Good'}, {sort: {name: 1}}).map(function (c){
      return {label: c.name, value: c._id};
    });
    roughLumber = [];
    roughLumber = InputCosts.find({type: 'Rough Lumber'}, {sort: {name: 1}}).map(function (c){
      return {label: c.name, value: c._id};
    });

    return [
      {
        optgroup: "Sheet Goods",
        options: sheetGoods,
      },
      {
        optgroup: "Rough Lumber",
        options: roughLumber,
      }
    ];
  },
  sheetGoods: function () {
    sheetGoods = [];
    sheetGoods = InputCosts.find({type: 'Sheet Good'}, {sort: {name: 1}}).map(function (c){
      return {label: c.name, value: c._id};
    });
    return [
      {
        optgroup: "Sheet Goods",
        options: sheetGoods,
      },
    ];
  },
  roughLumber: function () {
    roughLumber = [];
    roughLumber = InputCosts.find({type: 'Rough Lumber'}, {sort: {name: 1}}).map(function (c){
      return {label: c.name, value: c._id};
    });

    return [
      {
        optgroup: "Rough Lumber",
        options: roughLumber,
      }
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
  
  doorFrameMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  doorPanelMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFaceFrameMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFacePanelMaterialOptions: function(){
    return InputCosts.find({$or: [{type: 'Sheet Good'}, {type: 'Rough Lumber'}]}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxSideMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxBottomMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  ffMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  caseMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  shelfMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
   toeKickMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  endPanelMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  crownMaterialOptions: function(){
    return InputCosts.find({type: 'Sheet Good'}).map(function (c){
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

