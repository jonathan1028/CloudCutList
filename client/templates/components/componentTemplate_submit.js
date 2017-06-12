Template.componentTemplateSubmit.onCreated(function() {
 
});

Template.componentTemplateSubmit.helpers({
  
});

AutoForm.hooks({
  componentTemplateSubmit: {
    before: {
      insert: function(doc) {
        //declares this document to be a template
        doc.template = 1;
        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  componentTemplateSubmit: {
    onSuccess: function(update, result) {

      Router.go('componentTemplatePage', {_id: this.docId});
    }
  }
});

