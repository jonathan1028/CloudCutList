S_WallDoubleDoor = function(cabinet, orderId, cabinetId){
	      ///////////Face Frame Stile
        width = cabinet.height;
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

        ///////////Face Frame Rail
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

        ///////////Door Stiles
        width = cabinet.height - .125; // 1/16" offset from top and bottom
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
        width = (cabinet.width - 7.125)/2; // Subtract 8" for width of 4 stiles, add 1" for the 4 tongues, subtract .125 for 1/16" offset on sides
        height = cabinet.height - 3.625;   // Subtract 4" for width of 2 stiles, add .5" for the tongues, subract .125 for 1/16" offest from top/bottom
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

        ///////////Bottom Panel//////////////////////////////////////////////
        width = cabinet.width - 1.125;
        height = cabinet.depth - .75;
        qty = ((width * height)/144)/32;

        var bottomPanel = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'bottompanel',
          description: 'Bottom/Top Panel',
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

        Meteor.call('partInsert', bottomPanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Back Panel
        width = cabinet.width - 1.125;
        height = cabinet.height - 2; //Sub 1.25" for space between bottom/top panel and end of cabinet, sub 1.25" for thickness of bottom/top panel, add back .5" for tongues into dados.
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

        ///////////Nail Plate
        width = cabinet.width - 1.75;
        height = 4;
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

        Meteor.call('partInsert', nailplate, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Shelf
        width = cabinet.width - 1.75;
        height = cabinet.depth - 1.625;   //Sub .75 for thickness of face frame, .625" for offset of dado from back, and .25" for thickness of back panel
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

        if(cabinet.height > 8){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        if(cabinet.height > 16){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        if(cabinet.height > 24){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        
       

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