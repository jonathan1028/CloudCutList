Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [
      Meteor.subscribe('orders'), 
      Meteor.subscribe('cabinets'),
      Meteor.subscribe('parts'),
      Meteor.subscribe('inputCosts'),
      Meteor.subscribe('products'),
      Meteor.subscribe('customers'),
      Meteor.subscribe('components'),
      Meteor.subscribe('processes'),
    
      ]; 
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin);
Router.onBeforeAction('dataNotFound', {only: 'restaurantPage'});



////////////////////////////Routes for Customers
Router.route('/customers', {name: 'customersList'});

Router.route('/customerSubmit', {name: 'customerSubmit'});

Router.route('/customers/:_id/', {
  name: 'customerPage',
  data: function() { return Customers.findOne(this.params._id); }
});

Router.route('/customers/:_id/edit', {
name: 'customerEdit',
data: function() { return Customers.findOne(this.params._id); }
});


////////////////////////////Routes for Bids
Router.route('/bids', {name: 'bidsList'});

Router.route('/archivedBids/', {
  name: 'bidsListArchived',
});

Router.route('/bids/:_id', {
  name: 'bidPage',
  data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/bids/:_id/edit', {
name: 'bidEdit',
data: function() { return Orders.findOne(this.params._id); }
});

////////////////////////////Routes for Orders
Router.route('/', {name: 'ordersList'});

Router.route('/archivedOrders/', {
  name: 'ordersListArchived',
});

Router.route('/orders/:_id', {
  name: 'orderPage',
  data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/orders/:_id/cutlist', {
  name: 'cutlistPage',
  data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/orders/:_id/schedules', {
  name: 'schedulesPage',
  data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/orders/:_id/estimate', {
  name: 'estimatePage',
  data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/takeoffs/:_id/', {
  name: 'takeoffPage',
  data: function() { 
    var currentTest = 65;
    return Orders.findOne(this.params._id); }
});

Router.route('/orderSubmit', {name: 'orderSubmit'});

Router.route('/orders/:_id/edit', {
name: 'orderEdit',
data: function() { return Orders.findOne(this.params._id); }
});

Router.route('/queue', {name: 'ordersQueue'});

////////////////////////////Routes for Products
Router.route('/products/:_id/', {
  name: 'productPage',
  data: function() { return Products.findOne(this.params._id); }
});

Router.route('/productTemplates/:_id/', {
  name: 'productTemplatePage',
  data: function() { return Products.findOne(this.params._id); }
});

Router.route('/productTemplates/:_id/edit', {
name: 'productTemplateEdit',
data: function() { return Products.findOne(this.params._id); }
});

Router.route('/products/', {
  name: 'productsList',
});

Router.route('/productTemplateSubmit', {name: 'productTemplateSubmit'});

////////////////////////////////Routes for Components
Router.route('/components/:_id/', {
  name: 'componentPage',
  data: function() { return Components.findOne(this.params._id); }
});

Router.route('/componentTemplate/:_id/', {
  name: 'componentTemplatePage',
  data: function() { return Components.findOne(this.params._id); }
});

Router.route('/componentTemplates/', {
  name: 'componentTemplatesList',
});

Router.route('/componentTemplateSubmit', {name: 'componentTemplateSubmit'});
Router.route('/componentDoorTemplateSubmit', {name: 'componentDoorTemplateSubmit'});
Router.route('/componentDrawerFaceTemplateSubmit', {name: 'componentDrawerFaceTemplateSubmit'});

Router.route('/components/:_id/edit', {
name: 'componentEdit',
data: function() { return Components.findOne(this.params._id); }
});

Router.route('/componentTemplates/:_id/edit', {
name: 'componentTemplateEdit',
data: function() { return Components.findOne(this.params._id); }
});

////////////////////////////////Routes for Parts
Router.route('/parts/:_id/edit', {
name: 'templatePartEdit',
data: function() { return Parts.findOne(this.params._id); }
});

////////////////////////////////Routes for InputCosts
Router.route('/inputCostsList', {
  name: 'inputCostsList',
});

Router.route('/inputCostSubmit', {name: 'inputCostSubmit'});

Router.route('/inputCosts/:_id/edit', {
name: 'inputCostEdit',
data: function() { return InputCosts.findOne(this.params._id); }
});

////////////////////////////Routes for Processes

//*Templated routes CRUD code
var i = 'process';
var pluralized = 'processes';
var cursor = 'Processes';

Router.route('/' + pluralized, {name: pluralized + 'List'});

Router.route('/' + i + 'Submit', {name: i + 'Submit'});

Router.route('/' + pluralized + '/:_id/', {
  name: i + 'Page',
  data: function() { return eval(cursor + '.findOne(this.params._id);')}
});

Router.route('/' + pluralized + '/:_id/edit', {
name: i + 'Edit',
data: function() { return eval(cursor + '.findOne(this.params._id);')}
});






