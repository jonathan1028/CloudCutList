Template.schedulesPage.helpers({
  setOrderId: function(order){
    return Session.set("orderId", order._id);
  },
  setMaterialName: function(materialName){
    return Session.set("materialName", materialName);
  },
  getMaterialName: function(materialName){
    return Session.get("materialName");
  },
  componentTypes: function(description) {
     //return Components.find({orderId: Session.get("orderId")});
    components = [];
    var count = 0;
    
    Components.find({orderId: Session.get("orderId")}).forEach(function(c) {
      if(components.includes(c.type))
      {
        
      }
      else
      {
        components.push(c.type);
        //changed c.name to c.type
      }  
      
    });
    
    return components;
     
  },
  components: function(type) {
    return Components.find({orderId: Session.get("orderId"), type: type});
    //Changed name: name to type: type  
  },
  productName: function(productId) {
     
     var name = Products.findOne({_id: productId}).name;
     console.log(name);
     return name;
     
     //filter3 = filter2.find({description: description});
     //return Parts.find({orderId: Session.get("orderId")});
     //return filter2;
  },

  parts: function(description) {
	   material = Session.get("materialName");
     return Parts.find({ $and: [{orderId: Session.get("orderId")}, {material: description}]}, {sort: {name: 1, productName: -1}});
     
     //filter3 = filter2.find({description: description});
     //return Parts.find({orderId: Session.get("orderId")});
     //return filter2;
  },
  findParts: function(model) {
    //return Parts.find({$and: [{orderId: this._id},{material: model}]}, {sort: {material: -1, description: -1}}); 
    //return model;
    return Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
  },
  materials: function(model) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    materials = [];
    var count = 0;
    
    Parts.find({orderId: Session.get("orderId")}, {sort: {material: -1, description: -1}}).forEach(function(part) {
      if(materials.includes(part.material))
      {
        
      }
      else
      {
        materials.push(part.material);
      }  
      
    });
    
    return materials;
  },

  descriptions: function(material) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    descriptions = [];
    var test = [1,2,3];
    
    Parts.find({orderId: Session.get("orderId"), material: material},{sort: {material: -1, description: -1}}).forEach(function(part) {
      if(descriptions.includes(part.description))
      {
        
      }
      else
      {
        descriptions.push(part.description);
      }  
      
    });
    
    return descriptions;
  },


  /*sidewalls: function(model) {
	return Parts.find({orderId: model._id, material: '5/8" 1SUV Birch', name: 'sidewall'}); 
  },
  bottompanels: function(model) {
	return Parts.find({orderId: model._id, material: '5/8" 1SUV Birch', name: 'bottompanel'}); 
  },
  shelves: function(model) {
	return Parts.find({orderId: model._id, material: '3/4" 2SUV Birch', name: 'shelf'}); 
  },
  nailplates: function(model) {
	return Parts.find({orderId: model._id, material: '5/8" 1SUV Birch', name: 'nailplate'}); 
  },
  toekicks: function(model) {
	return Parts.find({orderId: model._id, material: '5/8" 1SUV Birch', name: 'toekick'}); 
  },
  stretchers: function(model) {
	return Parts.find({orderId: model._id, material: '5/8" 1SUV Birch', name: 'stretcher'}); 
  },
  drawerfaces: function(model) {
	return Parts.find({orderId: model._id, material: '3/4" Raw Birch', name: 'drawerface'}); 
  },
  drawersides: function(model) {
  return Parts.find({orderId: model._id, material: '5/8" Baltic Birch', name: 'drawerside'}); 
  },
  drawerends: function(model) {
  return Parts.find({orderId: model._id, material: '5/8" Baltic Birch', name: 'drawerend'}); 
  },
  backpanels: function(model) {
  return Parts.find({orderId: model._id, material: '1/4" 1SUV Birch', name: 'backpanel'}); 
  },
  drawerbottoms: function(model) {
  return Parts.find({orderId: model._id, material: '1/4" 1SUV Birch', name: 'drawerbottom'}); 
  },
  doorpanels: function(model) {
  return Parts.find({orderId: model._id, material: '1/4" Raw Birch', name: 'doorpanel'}); 
  },
  faceframestiles: function(model) {
  return Parts.find({orderId: this._id, material: '1.5" Poplar', name: 'faceframestile'}); 
  },
  faceframefillerstiles: function(model) {
  return Parts.find({orderId: model._id, material: '5.5" Poplar', name: 'faceframefillerstile'}); 
  },
  faceframerails: function(model) {
  return Parts.find({orderId: model._id, material: '1.5" Poplar', name: 'faceframerail'}); 
  },
  faceframeshortrails: function(model) {
  return Parts.find({orderId: model._id, material: '1.5" Poplar', name: 'faceframeshortrail'}); 
  },
  doorstiles: function(model) {
  return Parts.find({orderId: model._id, material: '2" Poplar', name: 'doorstile'}); 
  },
  doorrails: function(model) {
  return Parts.find({orderId: model._id, material: '2" Poplar', name: 'doorrail'}); 
  },
  lazysusans: function(model) {
  return Parts.find({orderId: model._id, name: 'lazysusan'}); 
  },
  drawerrunners: function(model) {
  return Parts.find({orderId: model._id, name: 'drawerrunners'}); 
  },
  ldrawerlocks: function(model) {
  return Parts.find({orderId: model._id, name: 'ldrawerlock'}); 
  },
  rdrawerlocks: function(model) {
  return Parts.find({orderId: model._id, name: 'rdrawerlock'}); 
  },
  softclosehinges: function(model) {
  return Parts.find({orderId: model._id, name: 'softclosehinge'}); 
  },
  oneseventyhinges: function(model) {
  return Parts.find({orderId: model._id, name: 'oneseventyhinge'}); 
  },
  bifoldhinges: function(model) {
  return Parts.find({orderId: model._id, name: 'bifoldhinge'}); 
  },*/
  

});




