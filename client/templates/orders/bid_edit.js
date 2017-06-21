Template.bidEdit.helpers({
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
  roughLumberAndSheetGoods: function () {
    sheetGoods = [];
    sheetGoods = InputCosts.find({type: 'Sheet Good'}).map(function (c){
      return {label: c.name, value: c._id};
    });
    roughLumber = [];
    roughLumber = InputCosts.find({type: 'Rough Lumber'}).map(function (c){
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
    sheetGoods = InputCosts.find({type: 'Sheet Good'}).map(function (c){
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
    roughLumber = InputCosts.find({type: 'Rough Lumber'}).map(function (c){
      return {label: c.name, value: c._id};
    });

    return [
      {
        optgroup: "Rough Lumber",
        options: roughLumber,
      }
    ];
  },
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

AutoForm.hooks({
  bidEdit: {
    onSuccess: function(update, result) {
      Router.go('bidPage', {_id: this.docId});
    }
  }
});

Template.bidEdit.events({ 
  'click .deleteOrder': function(e) { e.preventDefault();

      if (confirm("Delete this order and all of its products?")) { 
        var currentorderId = this._id;
        
        Products.find({orderId: this._id}).forEach(function(p) {
          Products.remove(p._id);
        });

        Components.find({orderId: this._id}).forEach(function(c) {
          Components.remove(c._id);
        });

        Parts.find({orderId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });
        
        Orders.remove(currentorderId); 
        Router.go('ordersList');
      } 
    }
});