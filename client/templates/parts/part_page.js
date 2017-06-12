

Template.partPage.helpers({
  comments: function() {
    return Comments.find({plateId: this._id});
  }, 
  reviews: function() {
    return Reviews.find({plateId: this._id});
  }
});



/*Template.restaurantPage.helpers({
  comments: function() {
    return Comments.find({restaurantId: this._id});
  }
});*/