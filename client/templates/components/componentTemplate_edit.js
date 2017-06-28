Template.componentTemplateEdit.onCreated(function() {
  //var productId = template.data._id;
  //Session.set('productId', productId);
  //console.log("ProductId =");
  //console.log(productId);
});

Template.componentTemplateEdit.helpers({
  processesOptions: function () {
    processes = [];
    processes = Processes.find({template: true}, {sort: {name: 1}}).map(function (c){
      //console.log(c.name);
      return {label: c.name, value: c._id};

    });
    return processes;
      
  },

});


AutoForm.hooks({
  componentTemplateEdit: {
    onSuccess: function(update, result) {
      //var productId = Components.findOne({_id: this.docId}).productId;
      Router.go('componentTemplatePage', {_id: this.docId});
    }
  }
});