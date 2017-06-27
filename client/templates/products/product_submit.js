Template.productSubmit.onCreated(function() {
  //this.state = new ReactiveDict();
  Session.set("copySettingsState", true);
  //Session.set('cabinetSubmitErrors', {});
  //Session.set('cabinetModel','Test');
  Session.set('FinishType', null);
});


Template.productSubmit.helpers({
  modelOptions: function () {
    
    var orderId = this.orderId;
    console.log(orderId);
    var orderCategory = Orders.findOne({_id: orderId}).category;

    baseCabinets = [];
    baseCabinets = Products.find({category: orderCategory, subcategory: 'Base Cabinets', template: 1}, {sort: {name: 1}}).map(function (i){
      return {label: i.name, value: i._id};
    });

    wallCabinets = [];
    wallCabinets = Products.find({category: orderCategory, subcategory: 'Wall Cabinets', template: 1}, {sort: {name: 1}}).map(function (i){
      return {label: i.name, value: i._id};
    });

    tallCabinets = [];
    tallCabinets = Products.find({category: orderCategory, subcategory: 'Tall Cabinets', template: 1}, {sort: {name: 1}}).map(function (i){
      return {label: i.name, value: i._id};
    });

    trim = [];
    trim = Products.find({category: orderCategory, subcategory: 'Trim', template: 1}, {sort: {name: 1}}).map(function (i){
      return {label: i.name, value: i._id};
    });
    

    return [
      {
        optgroup: "Base Cabinets",
        options: baseCabinets,
      },
      {
        optgroup: "Wall Cabinets",
        options: wallCabinets,
      },
      {
        optgroup: "Tall Cabinets",
        options: tallCabinets,
      },
      {
        optgroup: "Trim",
        options: trim,
      },
    ];
  },
  defaultHeight: function(){
    if(Session.get('currentModel')){
      var modelId = Session.get('currentModel');
      var height = Products.findOne({_id: modelId, template: 1}).height;
      return height;
    }
    else
      return null;
  },
  defaultDepth: function(){
    if(Session.get('currentModel')){
      var modelId = Session.get('currentModel');
      var depth = Products.findOne({_id: modelId, template: 1}).depth;
      return depth;
    }
    else
      return null; 
  },
  hasToeKick: function(){
    if(Session.get('currentModel')){
      var modelId = Session.get('currentModel');
      var subcategory = Products.findOne({_id: modelId, template: 1}).subcategory;
      if(subcategory === 'Wall Cabinets' || subcategory === 'Trim'){
        return false;
      }
    }
    
    return true;
  },
  notTrim: function(){
    if(Session.get('currentModel')){
      var modelId = Session.get('currentModel');
      var subcategory = Products.findOne({_id: modelId, template: 1}).subcategory;
      if(subcategory === 'Trim'){
        return false;
      }
    }
    
    return true;
  },
  multipleProducts: function(){
    if(Products.find({orderId: this.orderId}).count() > 0){
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
});

AutoForm.hooks({
  productSubmit: {
    before: {
      insert: function(doc) {
        var orderId = this.template.data.orderId;
        doc.orderId = orderId;

        //Looks up template to be clonsed
        var productTemplate = Products.findOne({_id: doc.model});
        
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
          doc.toeKickDepth = 0;
        }

        
        //Copy settings of previous product
        if(Session.get('copySettingsState') === true){
          var lastProduct = Products.findOne({orderId: orderId}, {sort: {submitted: -1, limit: 1}});

          doc.height = lastProduct.height;
          doc.depth = lastProduct.depth;
          doc.toeKickHeight = lastProduct.toeKickHeight;
          doc.toeKickDepth = lastProduct.toeKickDepth;

          doc.leftOffset = lastProduct.leftOffset;
          doc.rightOffset = lastProduct.rightOffset;
          doc.topOffset = lastProduct.topOffset;
          doc.bottomOffset = lastProduct.bottomOffset;
          doc.centerOffset = lastProduct.centerOffset;
          doc.drawerOffset = lastProduct.drawerOffset;
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
      var productTemplateId = Products.findOne({_id: resultId}).model;
     
      cloneProduct(resultId, productTemplateId);
      cloneDoor(resultId, productTemplateId);
      cloneDrawerFace(resultId, productTemplateId);
    }
  }
});

Template.productSubmit.events({
  'change [name=model]': function(event) {
    var model = event.target.value
    Session.set("currentModel", model);
    var test3 = Session.get("currentModel");
    console.log(test3);

  }, 
  'click [name=copySettings]': function(event) {
    //var x = $(event.target).is(":checked").val()
    var x = event.target.checked;
    Session.set('copySettingsState', event.target.checked);
  },
});