S_BaseDoubleDoor = function(cabinet, orderId, cabinetId){
	      ///////////Face Frame stile
        width = cabinet.height - 4.5;
        height = 1.5;
        qty = (width)/12;

        var faceframestile = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'faceframestile',
          description: 'Face Frame Stile',
          material: '1.5" Poplar',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', faceframestile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', faceframestile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Face Frame Center Stile
        width = cabinet.height - 14;  //-4.5" for toe kick, -4.5" for thickness of 3 face frame rails, -5" for drawer
        height = 2;
        qty = (width)/12;

        var faceframeshortrail = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'faceframecenterstile',
          description: 'Face Frame Center Stile',
          material: '2" Poplar',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', faceframeshortrail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Face Frame Rails
        width = cabinet.width - 3;
        height = 1.5;
        qty = (width)/12;

        var faceframerail = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'faceframerail',
          description: 'Face Frame Rail',
          material: '1.5" Poplar',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', faceframerail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', faceframerail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', faceframerail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Door Stiles
        width = cabinet.height - 10.75; //-4.5" for toe kick, -.125" for 1/8" offset from top of cab, -6" for drawer, -.125" for 1/8" offset from drawer
        height = 2;
        qty = (width)/12;

        var doorstile = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'doorstile',
          description: 'Door Stile',
          material: '2" Poplar',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', doorstile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorstile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorstile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorstile, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Door Rails
        width = (cabinet.width - 7.125)/2;  // Subtract 8" for width of 4 stiles, add 1" for the tongues, subtract .125 for 1/16" offset on sides
        height = 2;
        qty = (width)/12;

        var doorrail = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'doorrail',
          description: 'Door Rail',
          material: '2" Poplar',
          width: width,
          height: 2,
          depth: 0.75,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', doorrail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorrail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorrail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorrail, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Door Panel
        width = (cabinet.width - 7.125)/2; // -8" for width of 4 stiles, +1" for the 4 tongues, -.125" for 1/16" offset on sides
        height = cabinet.height- 14.25; //-4.5" for toe kick, -.125" for 1/8" offset from top of cab, -6" for drawer, -.125" for offset from drawer, -4" for stile widths, +.5" for tongues
        qty = ((width * height)/144)/32;

        var doorpanel = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'doorpanel',
          description: 'Door Panel',
          material: '1/4" Raw Birch',
          width: width,
          height: height,
          depth: 0.25,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', doorpanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', doorpanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Drawer Panel
        width = cabinet.width - .125; //-.125" for 1/16" offset from sides
        height = 6;
        qty = ((width * height)/144)/32;

        var drawerface = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'drawerface',
          description: 'Drawer Face',
          material: '3/4" Raw Birch',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .25,
        };

        Meteor.call('partInsert', drawerface, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Side Wall
        width = cabinet.depth - .75;
        height = cabinet.height;
        qty = ((width * height)/144)/32;

        var SideWall = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'sidewall',
          description: 'Side Wall',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .25,
        };

        Meteor.call('partInsert', SideWall, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', SideWall, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Bottom Panel
        width = cabinet.width - 1.125;
        height = cabinet.depth - .75;
        qty = ((width * height)/144)/32;

        var bottomPanel = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'bottompanel',
          description: 'Bottom Panel',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', bottomPanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });        

        ///////////Nail Plate
        width = cabinet.width - 1.75;
        height = 7;
        qty = ((width * height)/144)/32;

        var nailplate = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'nailplate',
          description: 'Nail Plate',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', nailplate, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Stretcher
        width = cabinet.width - 1.75;
        height = 3;
        qty = ((width * height)/144)/32;

        var stretcher = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'stretcher',
          description: 'Stretcher',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', stretcher, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Toe Kick
        width = cabinet.width - 1.75;
        height = 3;
        qty = ((width * height)/144)/32;

        var toekick = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'toekick',
          description: 'Toe Kick',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', toekick, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Back Panel
        width = cabinet.width - 1.125;
        height = cabinet.height - 5.75; //-4.5" for toe kick, -.625" for offset of bottom panel from toekick, -.625" for thickness of bottom panel
        qty = ((width * height)/144)/32;

        var backpanel = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'backpanel',
          description: 'Back Panel',
          material: '1/4" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.25,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', backpanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Shelf
        width = cabinet.width - 1.75;
        height = 10.375; //Matches thickness of typical wall cabinet shelf
        qty = ((width * height)/144)/32;

        var shelf = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'shelf',
          description: 'Shelf',
          material: '3/4" 2SUV Birch',
          width: width,
          height: height,
          depth: 0.75,
          qty: qty,
          hrs: .2,
        };

        Meteor.call('partInsert', shelf, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Drawer Sides
        width = cabinet.depth - 3;
        height = 4;
        qty = ((width * height)/144)/25;

        var drawerside = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'drawerside',
          description: 'Drawer Side',
          material: '5/8" Baltic Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .25,
        };

        Meteor.call('partInsert', drawerside, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', drawerside, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Drawer Ends
        width = cabinet.width - 4.75;   //-3" for thickness of faceframe, -1.25" for thickness of drawer sides, -.5" to give 1/4" of space between drawer and face frame
        height = 4;
        qty = ((width * height)/144)/25;

        var drawerend = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'drawerend',
          description: 'Drawer End',
          material: '5/8" Baltic Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .25,
        };

        Meteor.call('partInsert', drawerend, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', drawerend, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });        

        ///////////Drawer Bottom
        width = cabinet.width - 4.25; //-3" for thickness of faceframe, -1.25" for thickness of drawer sides, -.5" to give 1/4" of space between drawer and face frame, +.5" to account for tongues
        height = cabinet.depth - 3.75;  //-3" for space at back of cab, -1.25" for thickness of drawer ends, +.5" to account for tongues 
        qty = ((width * height)/144)/32;

        var drawerbottom = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'drawerbottom',
          description: 'Drawer Bottom',
          material: '1/4" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.25,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', drawerbottom, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Drawer Runner Set
        qty = 1;

        var drawerrunners = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'drawerrunners',
          description: 'Drawer Runner Set',
          material: '21" Soft-Close Draw Runner',
          //width: width,
          //height: 2,
          //depth: 21,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', drawerrunners, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });


        ///////////Soft-Close Hinge
        qty = 1;

        var softclosehinge = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'softclosehinge',
          description: 'Soft-Close Hinge',
          material: '5/8" Overlay Hinge',
          //width: width,
          //height: 2,
          //depth: 21,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', softclosehinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', softclosehinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', softclosehinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', softclosehinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });


}