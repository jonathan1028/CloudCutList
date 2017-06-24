Template.processEdit.helpers({
   
});

AutoForm.hooks({
  processEdit: {
    onSuccess: function(update, result) {

      Router.go('processesList');
    }
  }
});

Template.processEdit.events({ 
  'click .delete': function(e) { e.preventDefault();

      if (confirm("Delete this process?")) { 
        var i = this._id;
        
        Processes.remove(i); 
        Router.go('processesList');
      } 
    }
});