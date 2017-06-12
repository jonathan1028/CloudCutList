Template.productTemplatePartItem.helpers({
  isWood: function(cabinet) {
    material = Materials.findOne({name: cabinet.material});
    if(material.type != 'hardware'){
    	return true;
	}
	else
		return false;
  }, 
 

});
Template.productTemplatePartItem.events({ 
'click .delete': function(e) { e.preventDefault();

    if (confirm("Delete this part?")) { 
      
       Parts.remove(this._id);

    } 
  }
});