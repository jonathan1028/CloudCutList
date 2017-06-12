Template.componentItem.events({ 
'click .delete': function(e) { e.preventDefault();
    if (confirm("Delete this component?")) { 
       var productId = Products.find({_id: this.productId})._selectorId;
       Parts.find({componentId: this._id}).forEach(function(p) {
       	Parts.remove(p._id);
       });
       Components.remove(this._id);

    } 
    
  }
});