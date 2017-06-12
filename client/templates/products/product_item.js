Template.productItem.helpers({
  partCount: function() {
    return Parts.find({productId: this._id}).count();
  },
  lookUpMaterialName: function(id) {
    return InputCosts.findOne({_id: id}).name;
  },
  lookUpStyleName: function(id) {
    return Components.findOne({_id: id}).name;
  },
  materialCost: function() {
    var totalCost = 0; 
    var partCost = 0;

    Parts.find({productId: this._id}).forEach(function(part) {
     
      var inputCostItem = InputCosts.findOne({_id: part.inputCostId});
      if(inputCostItem.unit === 'BF')
        partCost = (inputCostItem.cost * part.width * part.length *part.depth)/144 * 1.3;
      if(inputCostItem.unit === 'SF')
        partCost = (inputCostItem.cost * part.width * part.length)/144 * 1.3;
      if(inputCostItem.unit === 'Ea')
        partCost = (inputCostItem.cost * 1);
      //partCost = (inputCostItem.cost * part.height * part.length)/144;
      
      totalCost = totalCost + partCost;
    });

    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },

  laborCost: function() {
    var totalTime = 0; 
    if(InputCosts.findOne({type: 'Labor'}))
      var laborRate = InputCosts.findOne({type: 'Labor'}).cost;
    else
      var laborRate = 25;
    var totalCost = 0;

    Components.find({productId: this._id}).forEach(function(c) {

      totalTime = totalTime + c.buildTime;
    

    });
    totalCost = totalTime * laborRate;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
    
  },

  totalCost: function() {
    var totalMaterialCost = 0; 
    var totalLaborCost = 0; 
    var totalCost = 0;
    var partCost = 0;
    var totalTime = 0; 
    if(InputCosts.findOne({type: 'Labor'}))
      var laborRate = InputCosts.findOne({type: 'Labor'}).cost;
    else
      var laborRate = 25;
    var totalCost = 0;

    //Calculating material cost
    Parts.find({productId: this._id}).forEach(function(part) {
     
      var inputCostItem = InputCosts.findOne({_id: part.inputCostId});
      if(inputCostItem.unit === 'BF')
        partCost = (inputCostItem.cost * part.width * part.length *part.depth)/144 * 1.3;
      if(inputCostItem.unit === 'SF')
        partCost = (inputCostItem.cost * part.width * part.length)/144 * 1.3;
      if(inputCostItem.unit === 'Ea')
        partCost = (inputCostItem.cost * 1);
      //partCost = (inputCostItem.cost * part.height * part.length)/144;
      
      totalMaterialCost = totalMaterialCost + partCost;
    });

    //Calculating labor cost
    Components.find({productId: this._id}).forEach(function(c) {

      totalTime = totalTime + c.buildTime;

    });
    totalLaborCost = totalTime * laborRate;

    totalCost = totalMaterialCost + totalLaborCost;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },

});

Template.productItem.events({ 
'click .deleteProduct': function(e) { e.preventDefault();

    if (confirm("Delete this product and all of its components and parts?")) { 
      var currentProduct = this._id; 
      
      Components.find({productId: this._id}).forEach(function(c) {
          Components.remove(c._id);
          console.log("Remove Component");
      });

      Parts.find({productId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });

      Products.remove(currentProduct);
      Router.go('orderPage', {_id: this.orderId});
    } 
  }
});