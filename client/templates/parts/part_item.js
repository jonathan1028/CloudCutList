Template.partItem.helpers({
  materialName: function(id) {
    return InputCosts.findOne({_id: id}).name;
  },
 

});