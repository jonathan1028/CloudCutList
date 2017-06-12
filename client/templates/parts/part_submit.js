Template.partSubmit.onCreated(function() {
  
});

Template.partSubmit.helpers({
  costInputOptionsHelper: function(){
    return InputCosts.find({type: "Material"}).map(function (c){
      return {label: c.name, value: c._id};
    });
  },
});

AutoForm.hooks({
  partSubmit: {
    before: {
      insert: function(doc) {
        var componentId = this.template.data.componentId;
        doc.componentId = componentId;
        //declares this document to be a template
        //doc.template = 1;
        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  partSubmit: {
    onSuccess: function(update, result) {
      //Router.go('componentTemplatePage', {_id: this.docId});
    }
  }
});

/*Template.partSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var productId = this._id;
    var material = event.target.material.value;

    var part = {
          productId: productId,
          name: $(e.target).find('[id=name]').val(),
          widthFormula: $(e.target).find('[id=widthFormula]').val(),
          lengthFormula: $(e.target).find('[id=lengthFormula]').val(),
          depthFormula: $(e.target).find('[id=depthFormula]').val(),
          material: material,
          //material: $(e.target).find('[id=material]').val(),
        };


        Meteor.call('partInsert', part, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        event.target.reset();

  }
});*/