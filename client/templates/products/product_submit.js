Template.productSubmit.onCreated(function() {
  //this.state = new ReactiveDict();
  Session.set("copySettingsState", true);
  //Session.set('cabinetSubmitErrors', {});
  //Session.set('cabinetModel','Test');
  Session.set('FinishType', null);
});


Template.productSubmit.helpers({
  baseCabinets: function(){
    return Products.find({subcategory: 'Base Cabinets', template: 1});
  },
  wallCabinets: function(){
    return Products.find({subcategory: 'Wall Cabinets', template: 1});
  },
  tallCabinets: function(){
    return Products.find({subcategory: 'Tall Cabinets', template: 1});
  },
  trim: function(){
    return Products.find({type: 'Trim'});
  },
  defaultHeight: function(){
    if(Session.get('currentModel')){
      var test = Session.get('currentModel');
      var height = Products.findOne({model: test, template: 1}).height;
      return height;
    }
    else
      return null;
  },
  defaultDepth: function(){
    if(Session.get('currentModel')){
      var model = Session.get('currentModel');
      var depth = Products.findOne({model: model, template: 1}).depth;
      return depth;
    }
    else
      return null;
    
  },
  hasToeKick: function(){

    if(Session.get('currentModel')){
      var model = Session.get('currentModel');
      var subcategory = Products.findOne({template: 1, model: model}).subcategory;
      if(subcategory === 'Wall Cabinets'){
        return false;
      }
    }
    
    return true;

  },
  multipleProducts: function(orderId){
    if(Products.find({orderId: orderId}).count() > 0){
      return true; 
    }
    else{
      Session.set("copySettingsState", false);
      return false; 
    }

         
  },
  displaySettings: function(){
    if(Session.get("copySettingsState") === false)
      return true; 
    else
      return false;
  },
  doorOptionsHelper: function(){
    return Components.find({template: 2}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFaceOptionsHelper: function(){
    return Components.find({template: 3}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  caseMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  doorFrameMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  doorPanelMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  //drawer material helpers
  drawerFaceFrameMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerFacePanelMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxSideMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Drawer Box Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  drawerBoxBottomMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },

  ffMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Hardwood Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  shelfMaterialOptionsHelper: function(){
    return InputCosts.find({type: 'Case Material'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  runnersOptionsHelper: function(){
    return InputCosts.find({type: 'Drawer Runner'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
  hingesOptionsHelper: function(){
    return InputCosts.find({type: 'Hinge'}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },

 
});

AutoForm.hooks({
  productSubmit: {
    before: {
      insert: function(doc) {
        var orderId = this.template.data.orderId;
        doc.orderId = orderId;
        doc.model = Session.get('currentModel');

        //Looks up template to be clonsed
        var productTemplate = Products.findOne({model: doc.model, template: 1});
        
        //Creates a more user friendly name
        doc.name = doc.width + '" ' + productTemplate.name; 

        //Sets product organizational info
        doc.category = productTemplate.category;
        doc.subcategory = productTemplate.subcategory;
        
        //Used to determine which product was the last submitted product
        doc.submitted = new Date();

        //Sets the toe kick height and depth for wall cabinets to 0
        if(doc.subcategory === 'Wall Cabinets'){
          doc.toeKickHeight = 0;
          console.log("Toe Kick Height", doc.toeKickHeight);
          doc.toeKickDepth = 0;
          console.log("Toe Kick Depth", doc.toeKickDepth);
        }

        
        //Copy settings of previous product
        if(Session.get('copySettingsState') === true){
          var lastProduct = Products.findOne({orderId: orderId}, {sort: {submitted: -1, limit: 1}});

          doc.finishType = lastProduct.finishType;
          doc.finishColor = lastProduct.finishColor;
          
          doc.doorStyle = lastProduct.doorStyle;
          doc.drawerFaceStyle = lastProduct.drawerFaceStyle;
          doc.topOffset = lastProduct.topOffset;
          doc.bottomOffset = lastProduct.bottomOffset;
          doc.leftOffset = lastProduct.leftOffset;
          doc.rightOffset = lastProduct.rightOffset;
          doc.centerOffset = lastProduct.centerOffset;
          doc.drawerOffset = lastProduct.drawerOffset;

          doc.caseMaterial = lastProduct.caseMaterial;
          doc.caseBackMaterial = lastProduct.caseBackMaterial;
          doc.doorFrameMaterial = lastProduct.doorFrameMaterial;
          doc.doorPanelMaterial = lastProduct.doorPanelMaterial;
          doc.drawerFaceFrameMaterial = lastProduct.drawerFaceFrameMaterial;
          doc.drawerFacePanelMaterial = lastProduct.drawerFacePanelMaterial;
          doc.drawerBoxSideMaterial = lastProduct.drawerBoxSideMaterial;
          doc.drawerBoxBottomMaterial = lastProduct.drawerBoxBottomMaterial;
          doc.ffMaterial = lastProduct.ffMaterial;
          doc.shelfMaterial = lastProduct.shelfMaterial;
          
          doc.runners = lastProduct.runners;
          doc.hinges = lastProduct.hinges;
          //doc.pulls = Session.get('pulls');
        }
       
        
        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  productSubmit: {
    onSuccess: function(update, resultId) {
     
      var productTemplateId = Products.findOne({model: Session.get('currentModel'), template: 1})._id;
      //console.log(productTemplateId);
      //var orderId = this.template.data.orderId;
      //var productTemplateId = Products.findOne({model: doc.model, template: 1})._id;
      //cloneComponents
      cloneProduct(resultId, productTemplateId);
      cloneDoor(resultId, productTemplateId);
      cloneDrawerFace(resultId, productTemplateId);
    }
  }
});

Template.productSubmit.events({
  'change #model': function(event) {
    var model = event.target.value
    Session.set("currentModel", model);
    var test3 = Session.get("currentModel");

  }, 
  'click [name=copySettings]': function(event) {
    //var x = $(event.target).is(":checked").val()
    var x = event.target.checked;
    Session.set('copySettingsState', event.target.checked);
  },
});