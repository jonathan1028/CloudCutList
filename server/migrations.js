/*Migrations.add({
    version: 1,
    name: 'Adds 1 to customers name',
    up: function() {
    	Customers.find().forEach(function (i) {
	    	Customers.update(i._id, {$set: {name: i.name + '1'}});
	    });
    },
    down: function() {
    	Customers.find().forEach(function (i) {
    		var str = i.name;
			str = str.substring(0, str.length - 1);
	    	Customers.update(i._id, {$set: {name: str}});
	    });
    }
});


Meteor.startup(() => {
  Migrations.migrateTo('latest');
  console.log("Migrations Run");
});*/

Migrations.add({
    version: 1,
    name: 'Adds productCategory to Components and initializes existing Components to productCategory of Face Frame Cabinets',
    up: function() {
        Components.find({category: null}).forEach(function (i) {
            Components.update(i._id, {$set: {category: 'Face Frame Cabinets'}});
        });
    },
    down: function() {
        Components.find({category: 'Face Frame Cabinets'}).forEach(function (i) {
            Components.update(i._id, {$set: {category: null}});
        });
    }
});

Migrations.add({
  version: 2,
  name: 'Adds productCategory to Products and initializes existing Products to productCategory of Face Frame Cabinets',
  up: function() {
    Products.find({category: 'Cabinets'}).forEach(function (i) {
            Products.update(i._id, {$set: {category: 'Face Frame Cabinets'}});
    });
  },
  down: function() {
    Products.find({category: 'Face Frame Cabinets'}).forEach(function (i) {
        Products.update(i._id, {$set: {category: 'Cabinets'}});
    });
  }
});

/*Meteor.startup(() => {
  Migrations.migrateTo('2');
  console.log("Migrations Run");
});*/