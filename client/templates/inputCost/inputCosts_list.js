Template.inputCostsList.helpers({
  laborItem: function() {
    return InputCosts.find({type: 'Labor'});
  },
  materialItem: function() {
    return InputCosts.find();
  },
});
