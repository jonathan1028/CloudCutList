Template.inputCostSubmit.helpers({
 

});

AutoForm.hooks({
  inputCostSubmit: {
    onSuccess: function(update, result) {

      Router.go('inputCostsList');
    }
  }
});