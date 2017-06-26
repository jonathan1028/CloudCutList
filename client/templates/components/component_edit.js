Template.componentEdit.onCreated(function() {
  //var productId = template.data._id;
  //Session.set('productId', productId);
  //console.log("ProductId =");
  //console.log(productId);
});

Template.componentEdit.helpers({
  processesOptions: function () {
    processes = [];
    processes = Processes.find().map(function (c){
      //console.log(c.name);
      return {label: c.name, value: c._id};

    });
    return processes;
      
  },

});



AutoForm.hooks({
  componentEdit: {
    onSuccess: function(update, result) {
      var productId = Components.findOne({_id: this.docId}).productId;
      Router.go('productTemplatePage', {_id: productId});
    }
  }
});