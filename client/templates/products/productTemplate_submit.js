Template.productTemplateSubmit.onCreated(function() {
  //Session.set('productTemplateSubmitErrors', {});
});

Template.productTemplateSubmit.helpers({
  
});

AutoForm.hooks({
  productTemplateSubmit: {
    before: {
      insert: function(doc) {
        //declares this document to be a product template
        doc.template = 1;
        console.log(doc.name);

        if(doc.subcategory === 'Base Cabinets'){
          console.log(doc.subcategory);
          Meteor.call('attachCabinetSchema');  
        }
        



        //asynchronous submission
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  productTemplateSubmit: {
    onSuccess: function(update, result) {

      Router.go('productTemplatePage', {_id: this.docId});
    }
  }
});

/*Template.productTemplateSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    
    var width = 0;
    var height = 0;
    var depth = 0;

    if($(e.target).find('[name=width]').val())
      width = parseFloat($(e.target).find('[name=width]').val());

    if($(e.target).find('[name=height]').val())
      height = parseFloat($(e.target).find('[name=height]').val()); 
      
    if($(e.target).find('[name=depth]').val())
      depth = parseFloat($(e.target).find('[name=depth]').val());
    
    
    var productTemplate = {
      template: 1,
      name: $(e.target).find('[name=name]').val(),
      category: $(e.target).find('[name=category]').val(),
      subcategory: $(e.target).find('[name=subcategory]').val(),
      model: $(e.target).find('[name=model]').val(),
      width: width,
      height: height,
      depth: depth,
      //type: $(e.target).find('[name=type]').val(),
    };


    var errors = {};
    

    Meteor.call('productInsert', productTemplate, function(error, result) {
      if (error){
        throwError(error.reason);
      }
      else
        Router.go('productsList');       
    });
       
  //event.target.reset();
  },
  
});*/