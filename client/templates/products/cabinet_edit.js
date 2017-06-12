Template.cabinetEdit.events({ 'submit form': function(e) {
    e.preventDefault();

  var currentPlateId = this._id;
  var currentRestaurantId = this.restaurantId;

  var plateProperties = { 
      name: $(e.target).find('[name=name]').val(), 
      description: $(e.target).find('[name=description]').val()
  }

  Plates.update(currentPlateId, {$set: plateProperties}, function(error) { 
    if (error) {
        // display the error to the user
        alert(error.reason); 
      } else {
        Router.go('platePage', {_id: currentPlateId});
      }
  }); 
},

'click .delete': function(e) { e.preventDefault();

    if (confirm("Delete this plate?")) { 
      var currentPlateId = this._id; 


      Plates.remove(currentPlateId); 
      Router.go('restaurantsList');
    } 
  }
});