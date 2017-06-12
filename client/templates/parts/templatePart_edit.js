Template.templatePartEdit.helpers({
   costInputOptionsHelper: function(){
    return InputCosts.find({type: "Material"}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
});

AutoForm.hooks({
  templatePartEdit: {
    onSuccess: function(update, result) {
      
      Router.go('componentTemplatePage', {_id: this.docId});

      var componentId = Parts.findOne({_id: this.docId}).componentId;
      Router.go('componentTemplatePage', {_id: componentId});
      
    }
  }
});