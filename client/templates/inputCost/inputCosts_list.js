Template.inputCostsList.helpers({
  laborItem: function() {
    return InputCosts.find({type: 'Labor'}, {sort: {name: 1}});
  },
  sheetGoods: function() {
    return InputCosts.find({type: "Sheet Good"}, {sort: {name: 1}});
  },
  roughLumber: function() {
    return InputCosts.find({type: "Rough Lumber"}, {sort: {name: 1}});
  },
});
