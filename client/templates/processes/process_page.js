Template.processPage.helpers({
  
});

Template.processPage.events({ 
  'click .delete': function(e) { e.preventDefault();

      if (confirm("Delete this process?")) { 
        var i = this._id;
        
        Processes.remove(i); 
        Router.go('processesList');
      } 
    }
});