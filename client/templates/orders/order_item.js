Template.orderItem.helpers({
 productCount: function() {
    return Products.find({orderId: this._id}).count();
  },
 materialCost: function() {
    var totalCost = 0; 
    var partCost = 0;

    Parts.find({orderId: this._id}).forEach(function(part) {
     
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

    Components.find({orderId: this._id}).forEach(function(c) {

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
    Parts.find({orderId: this._id}).forEach(function(part) {
     
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
    Components.find({orderId: this._id}).forEach(function(c) {

      totalTime = totalTime + c.buildTime;

    });
    totalLaborCost = totalTime * laborRate;

    totalCost = totalMaterialCost + totalLaborCost;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },
  buildTime: function() {
    var buildTime = 0;

    Components.find({orderId: this._id}).forEach(function(c){
      buildTime = buildTime + c.buildTime;
    });
    
    buildTime = buildTime.toFixed(2);
 
    return buildTime;
  },
  customerName: function() {
    //var buildTime = 0;

    name = Customers.findOne({_id: this.customerId}).name;
    
    return name;
  },
});

Template.orderItem.events({ 
  'click .archive': function(e) { e.preventDefault();
        Orders.update(this._id, {
          $set: {status: "Archive"}
        }); 
    }
});