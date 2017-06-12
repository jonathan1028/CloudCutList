S_BaseLazySusan = function(cabinet, orderId, cabinetId){
	      ///////////Face Frame Stile
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


        ///////////Face Frame Inset Rails
        width = 11.25; //12" - 1.5" for faceframe stiles, +.75" for setting behind other rail
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

        ///////////Face Frame Outset Rails
        width = 10.5; //12" - 1.5" for faceframe stiles
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
        width = cabinet.height - 10.75;  //-4.5" for toe kick, -.125" for 1/8" offset from top of cab, -6" for drawer, -.125" for offset from drawer
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
        width = 12 - 4.375;  // Subtract 4" for width of 2 stiles, add .50 for the tongues, subtract .125 for 1/16" offset on sides, -.75" for corner offset
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
        width = 12 - 4.375; //-4" for width of 2 stiles, + .50" for the tongues, - .125" for 1/16" offset on sides, -.75" for corner offset
        height = cabinet.height - 14.25; //-4.5" for toe kick, -.125" for 1/8" offset from top of cab, -6" for drawer, -.125" for offset from drawer, -4" for stile widths, +.5" for tongues
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

        ///////////Bottom Panel
        width = 36 - 1.125;
        height = 36 - 1.125;
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

        ///////////Top Panel
        width = 36 - 1.125;
        height = 36 - 1.125;
        qty = ((width * height)/144)/32;

        var topPanel = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'toppanel',
          description: 'Bottom Panel',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.625,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', topPanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Nail Plate /////////////////////////////////////////////////////////////
        width = 36 - 1.75;
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

        Meteor.call('partInsert', nailplate, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Stretcher
        width = 36 - 1.75;
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

        Meteor.call('partInsert', stretcher, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Toe Kick Inset
        width = 12 - 1;
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

        ///////////Toe Kick Outset
        width = 12 - 1.75;
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

        ///////////Back Panel Inset
        width = 36 - .875;
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

        ///////////Back Panel Outset
        width = 36 - 1.125;
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

        ///////////Lazy Susan Hardware
        qty = 1;

        var lazysusan = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'lazysusan',
          description: 'Lazy Susan Hardware Kit',
          material: 'Lazy Susan',
          //width: width,
          //height: 2,
          //depth: 21,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', lazysusan, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        
        ///////////170 Degree Hinge
        qty = 1;

        var oneseventyhinge = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'oneseventyhinge',
          description: '170 Degree Hinge',
          material: '170 Degree Hinge',
          //width: width,
          //height: 2,
          //depth: 21,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', oneseventyhinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', oneseventyhinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        ///////////Bi-Fold Hinge
        qty = 1;

        var bifoldhinge = {
          orderId: orderId,
          cabinetId: cabinetId,
          cabinetName: cabinet.name,
          name: 'bifoldhinge',
          description: 'Bi-Fold Hinge',
          material: 'Bi-Fold Hinge',
          //width: width,
          //height: 2,
          //depth: 21,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', bifoldhinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        Meteor.call('partInsert', bifoldhinge, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });


}