Template.customerSubmit.helpers({
 

});

AutoForm.hooks({
  customerSubmit: {
    onSuccess: function(update, result) {

      Router.go('customersList');
    }
  }
});