Cabinets = new Mongo.Collection('cabinets');

Cabinets.allow({
  update: function(userId, cabinet) { return true; }, 
  remove: function(userId, cabinet) { return true; }
});



/*Meteor.methods({
  cabinetInsert: function(cabinetAttributes) {
    check(this.userId, String);
    check(cabinetAttributes, {
      orderId: String, 
      width: Number,
      height: Number,
      depth: Number,
      name: String,
      model: String,
      type: String,
      style: String,
      notes: String,
      //rating: Number
    });

    var user = Meteor.user();
    var order = Orders.findOne(cabinetAttributes.orderId);

    if (!plate)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    cabinet = _.extend(cabinetAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    //Plates.update(comment.plateId, {$inc: {commentsCount: 1}});

    var cabinetId = Cabinets.insert(cabinet);

    return {
      _id: cabinetId
    }; 

  },
 
});*/


