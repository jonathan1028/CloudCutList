Template.componentTemplateItem.helpers({
  

});

Template.componentTemplateItem.events({ 
'click .deleteComponentTemplate': function(e) { e.preventDefault();
    if (confirm("Delete this component template?")) { 
      
       Components.remove(this._id);
       Router.go('componentTemplatesList');
    } 
    
  }
});