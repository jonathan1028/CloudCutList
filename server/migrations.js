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
  Migrations.migrateTo('0');
  console.log("Migrations Run");
});*/
