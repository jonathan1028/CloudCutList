Template.productTemplateEdit.onCreated(function() {
  //var productId = template.data._id;
  //Session.set('productId', productId);
  //console.log("ProductId =");
  //console.log(productId);
});



AutoForm.hooks({
  productTemplateEdit: {
    onSuccess: function(update, result) {
      //var productId = Components.findOne({_id: this.docId}).productId;
      Router.go('productTemplatePage', {_id: this.docId});
    }
  }
});