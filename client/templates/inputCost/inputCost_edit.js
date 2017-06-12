Template.inputCostEdit.helpers({
   
});

AutoForm.hooks({
  inputCostEdit: {
    onSuccess: function(update, result) {

      Router.go('inputCostsList');
    }
  }
});

Template.inputCostEdit.events({ 
  'click .delete': function(e) { e.preventDefault();

      if (confirm("Delete this input cost item?")) { 
        var objectId = this._id;
        
        InputCosts.remove(objectId); 
        Router.go('inputCostsList');
      } 
    }
});