Template.componentDrawerFaceTemplateSubmit.onCreated(function() {
 
});

Template.componentDrawerFaceTemplateSubmit.helpers({
  
});

AutoForm.hooks({
  componentDrawerFaceTemplateSubmit: {
    before: {
      insert: function(doc) {
        //declares this document to be a door template
        doc.template = 3;
        //Defaults these to 0 to pass validation. Later they will be set to the component door (template =1) values.
        doc.widthFormula = 0;
        doc.heightFormula = 0;
        doc.depthFormula = 0;
        doc.type = 'Drawer Face';
        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  componentDrawerFaceTemplateSubmit: {
    onSuccess: function(update, result) {

      Router.go('componentTemplatesList');
    }
  }
});

