Template.productListItem.helpers({
  partCount: function() {
    return Parts.find({productId: this._id}).count();
  },
  materialCost: function() {
    var totalCost = 0; 
    var partCost = 0;

    Parts.find({cabinetId: this._id}).forEach(function(part) {
    	
      var material = Materials.findOne({name: part.material});
			partCost = material.cost * part.qty;
			totalCost = totalCost + partCost;
			
	});

    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },

  laborCost: function() {
    var totalCost = 0; 
    var laborRate = Materials.findOne({name: 'Labor Rate'}).cost;
    var laborCost = 0;

    Parts.find({cabinetId: this._id}).forEach(function(part) {
     
      laborCost = laborRate * part.hrs;      
      totalCost = totalCost + laborCost;

    });

    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },

  totalCost: function() {
    var totalLaborCost = 0; 
    var totalMaterialCost = 0;
    var laborRate = Materials.findOne({name: 'Labor Rate'}).cost;
    var totalCost = 0;

    Parts.find({cabinetId: this._id}).forEach(function(part) {
     
      var material = Materials.findOne({name: part.material});
      materialCost = material.cost * part.qty;
      totalMaterialCost = totalMaterialCost + materialCost;

      laborCost = laborRate * part.hrs;
      totalLaborCost = totalLaborCost + laborCost;
      
    });
    totalCost = totalLaborCost + totalMaterialCost;
    totalCost = accounting.formatMoney(totalCost, "$", 2);
    return totalCost;
  },

});

Template.productItem.events({ 
'click .delete': function(e) { e.preventDefault();

    if (confirm("Delete this product?")) { 
      var currentProduct = this._id; 
      
      Parts.find({productId: this._id}).forEach(function(part) {
          Parts.remove(part._id);
        });

      Products.remove(currentProduct);
      Router.go('orderPage', {_id: this.orderId});
    } 
  }
});