Template.processSubmit.helpers({
 

});

AutoForm.hooks({
  processSubmit: {
    onSuccess: function(update, result) {

      Router.go('processesList');
    }
  }
});