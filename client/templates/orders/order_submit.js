Template.orderSubmit.onCreated(function() {
  Session.set('orderSubmitErrors', {});
});

Template.orderSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('orderSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('orderSubmitErrors')[field] ? 'has-error' : '';
  },
  cabinetStyle: function(){
    x = [
          {
            name: 'Shaker', 
            label: 'Shaker', 
          },
          {
            name: 'FlushFace', 
            label:'Flush Face', 
          },
          
          
        ]
   
    return x;
  },
  styles: function () {
    
    return [
      {
        options: [
          {label: "2014", value: 2014},
          {label: "2013", value: 2013},
          {label: "2012", value: 2012}
        ]
      },
    
    ];
  },
  optionsHelper: function () {
   return Customers.find().map(function (c){
      return {label: c.name, value: c._id};
    });
  },

});

Template.orderSubmit.rendered=function() {
  $('#my-datepicker').datepicker();
}

AutoForm.hooks({
  orderSubmit: {
    before: {
      insert: function(doc) {
        doc.status = "Active";
        this.result(doc);
      }
    }
  }
});

AutoForm.hooks({
  orderSubmit: {
    
    onSuccess: function(update, result) {
      Router.go('orderPage', {_id: this.docId});
    }
  }
});

