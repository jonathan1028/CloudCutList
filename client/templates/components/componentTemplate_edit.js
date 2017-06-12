Template.componentTemplateEdit.onCreated(function() {
  //var productId = template.data._id;
  //Session.set('productId', productId);
  //console.log("ProductId =");
  //console.log(productId);
});



AutoForm.hooks({
  componentTemplateEdit: {
    onSuccess: function(update, result) {
      //var productId = Components.findOne({_id: this.docId}).productId;
      Router.go('componentTemplatePage', {_id: this.docId});
    }
  }
});