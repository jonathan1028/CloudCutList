Template.productSubmit.onCreated(function() {
  //this.state = new ReactiveDict();
  Session.set("displayAllSettings", true);

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
    trim = Products.find({subcategory: 'Trim', template: 1}, {sort: {name: 1}}).map(function (i){
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
      Session.set("displayAllSettings", false);
      Session.set("copyPreviousSettings", true);
      return true; 
    }
    else{
      Session.set("displayAllSettings", true);
      return false; 
    }      
  },
  displayAllSettings: function(){
    if(Session.get("displayAllSettings"))
      return true; 
    else
      return false;
  },
  isChecked: function(){
      var isChecked = Session.get("copyPreviousSettings");
      if(isChecked){
          return true;
      } else {
          return false;
      }
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
        if(Session.get('copyPreviousSettings') === true){
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
      Session.set("copyPreviousSettings", true);
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
  'click [name=copyPreviousSettings]': function(event){
    var x = event.target.checked;
    Session.set('copyPreviousSettings', event.target.checked);
    Session.set('displayAllSettings', !event.target.checked);
  },
});