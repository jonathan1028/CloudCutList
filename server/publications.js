Meteor.publish('orders', function() {
  return Orders.find();
});

Meteor.publish('cabinets', function() {
  return Cabinets.find();
});

Meteor.publish('parts', function() {
  return Parts.find();
});

Meteor.publish('inputCosts', function() {
  return InputCosts.find();
});

Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('components', function() {
  return Components.find();
});


