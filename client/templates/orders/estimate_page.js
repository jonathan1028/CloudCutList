Template.estimatePage.onCreated(function() {
  Session.set('markUp', 2);
});

Template.estimatePage.helpers({
  orders: function() {
    return Orders.find();
  },
  locations: function() {
    var list = [];
    
    //Finds all processes for the order
    Products.find({orderId: this._id}).forEach(function(i) { 

      if(i.location){
        console.log(i.location);
        if(!list.find( function( ele ) { return ele.value === i.location;} ) )
          list.push({value: i.location, label: i.location});
      }
    });
    list.push({value: null, label: "No Location Set"});
    console.log("List",list);
    
    return list;
  },
  products: function(orderId, location) {
    console.log(orderId);
    return Products.find({orderId: orderId, location: location}); 
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
  productCost: function() {
    var markUp = Session.get("markUp");
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

    totalCost = (totalMaterialCost + totalLaborCost) * markUp;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },
  orderCost: function() {
    var markUp = Session.get("markUp");
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
  markUp: function() {
    var markUp = Session.get("markUp") - 1;
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

    totalCost = (totalMaterialCost + totalLaborCost) * markUp;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },
  customerCost: function() {
    //Push to database
    var markUp = Session.get("markUp");
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

    totalCost = (totalMaterialCost + totalLaborCost) * markUp;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },
});


Template.estimatePage.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var markUp = parseFloat($(e.target).find('[name=markUp]').val());
    markUp = markUp/100 + 1;
    Session.set("markUp", markUp);
    console.log(markUp);     

  }
});