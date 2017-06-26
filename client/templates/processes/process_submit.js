Template.processSubmit.helpers({
 

});

AutoForm.hooks({
  processSubmit: {
    before: {
      insert: function(doc) {
        doc.template = true;
        
        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  processSubmit: {
    onSuccess: function(update, result) {

      Router.go('processesList');
    }
  }
});