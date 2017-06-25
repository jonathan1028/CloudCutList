Template.componentSubmit.onCreated(function() {

});

Template.componentSubmit.helpers({
  optionsHelper: function(productId) {
    var productCategory = Products.findOne({_id: productId}).category;
    console.log(productCategory);
    return Components.find({category: productCategory, template: 1}, {sort: {type: 1}}).map(function (c){
      console.log(c.name, c.template);
      return {label: c.name, value: c._id};
    });
  }
});


AutoForm.hooks({
  componentSubmit: {
    before: {
      insert: function(doc) {
        var productId = this.template.data.productId;
        doc.productId = productId;
        doc.template = 0;
        //transforms value for name from _id to name. Initially used c._id in case of components with the same name
        var template = Components.findOne({_id: doc.name});
        var name = template.name;
        doc.name = name;
        doc.type = template.type;
        doc.widthFormula = template.widthFormula;
        doc.heightFormula = template.heightFormula;
        doc.depthFormula = template.depthFormula;
        doc.buildTime = template.buildTime;
        doc.processes = template.processes;
        //console.log(doname);
        //asynchronous
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  componentSubmit: {
    onSuccess: function(update, resultId) {
      var component = Components.findOne({_id: resultId});
      console.log(component);
      var template = Components.findOne({name: component.name, template: 1});
      console.log(template);

      //Need to make component name uniqueness a requirement
      //var templateId = Components.findOne({model: Session.get('currentModel'), template: 1})._id;
      cloneComponent(component, template._id);
      
      //Router.go('componentTemplates');
    }
  }
});




