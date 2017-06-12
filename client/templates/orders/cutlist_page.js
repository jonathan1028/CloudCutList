Template.cutlistPage.helpers({
  materialName: function(id) {
    return InputCosts.findOne({_id: id}).name;
  },
  setOrderId: function(order){
    return Session.set("orderId", order._id);
  },
  setMaterialName: function(material){
    console.log("Set Material", material);
    return Session.set("materialName", material);
  },
  getMaterialName: function(materialName){
    return Session.get("materialName");
  },
  partsList: function(partName, material) {
	   //material = Session.get("materialName");
     console.log("Count");
     Parts.find({orderId: Session.get("orderId"), name: partName, material: material}).forEach(function(part) {
      console.log("Name", part.name)
      
    });

    return Parts.find({orderId: Session.get("orderId"), name: partName, material: material});
     //filter3 = filter2.find({description: description});
     //return Parts.find({orderId: Session.get("orderId")});
     //return filter2;
  },
  
  materials: function(model) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    var materials = [];
    var count = 0;
    
    Parts.find({orderId: Session.get("orderId")}, {sort: {material: -1, description: -1}}).forEach(function(part) {
      if(materials.includes(part.material))
      {
        
      }
      else
      {
        materials.push(part.material);
        console.log("MaterialList", part.material);
      }  
      
    });
    
    return materials;
  },

  partNames: function(material) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    descriptions = [];
    var test = [1,2,3];
    
    Parts.find({orderId: Session.get("orderId"), material: material},{sort: {material: -1}}).forEach(function(part) {
      if(descriptions.includes(part.name))
      {
        
      }
      else
      {
        descriptions.push(part.name);
      }  
      
    });
    
    return descriptions;
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
      }  
      
    });
    
    return components;
     
  },
  parts: function(componentType) {
    //parts = Parts.find({orderId: this._id}, {sort: {material: -1, description: -1}}); 
    parts = [];
    var test = [1,2,3];

    //Components.find({orderId: Session.get("orderId"), name: componentName})
    
    return Parts.find({orderId: Session.get("orderId"), componentType: componentType}, {sort: {name: 1, productName: -1}});
  },
  /*convertToFraction: function(num) {
    var frac = num;
    if(num % 1 != 0)
      frac = fraction(num);
    console.log(num);
    console.log(frac);
    return frac;
  },*/

  

});




