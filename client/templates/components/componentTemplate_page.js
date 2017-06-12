Template.componentTemplatePage.helpers({
  orders: function() {
    return Orders.find();
  },
  parts: function(model) {
	 return Parts.find({componentId: model._id}); 
    //
  },
});

Template.componentTemplatePage.events({ 

  'click .delete': function(e) { e.preventDefault();

    if (confirm("Delete this component template?")) { 
      var currentObjectId = this._id; 

      Parts.find({componentId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });

      
      Components.remove(currentObjectId); 
      Router.go('componentTemplatesList');
    } 
  }
});