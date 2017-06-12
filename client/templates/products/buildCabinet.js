buildCabinet = function(product, orderId, productId){
  console.log("buildproduct worked!")
  buildCase(product, orderId, productId)
  buildFF(product, orderId, productId)
  buildDoors(product, orderId, productId)
  buildDrawer(product, orderId, productId)
  buildShelf(product, orderId, productId)
  attachFF(product, orderId, productId)
  attachDoor(product, orderId, productId)
  attachDrawer(product, orderId, productId)
  stainFF(product, orderId, productId)
  stainDoorFace(product, orderId, productId)
  stainDrawerFace(product, orderId, productId)
  stainEndPanel(product, orderId, productId)
  paintFF(product, orderId, productId)
  paintDoorFace(product, orderId, productId)
  paintDrawerFace(product, orderId, productId)
  paintEndPanel(product, orderId, productId)
}

buildCase = function(product, orderId, productId){
  if (product.model === "B.DD" || product.model === "B.FLD" || product.model === "B.3DB" || product.model === "B.4DB" || product.model === "B.SB.DD" 
      || product.model === "B.SB.FLD" || product.model === "B.BRC.DD" || product.model === "B.BLC.DD" || product.model === "B.BRC.FLD" || product.model === "B.BLC.FLD" 
      || product.model === "B.P" 
      || product.model === "V.DD" || product.model === "V.FLD" || product.model === "V.3DB" || product.model === "V.4DB" || product.model === "V.SB.DD" || product.model === "V.SB.FLD" 
      || product.model === "V.BRC.DD" || product.model === "V.BLC.DD" || product.model === "V.BRC.FLD" || product.model === "V.BLC.FLD"
      || product.model === "V.LC" )
  {  
    console.log("Got to Side Wall");
    ///////////Side Wall
        width = product.depth - .75 - .1875 - .5938;  //(ff, back panel, 5/8" nailer)
        height = product.height;
        qty = ((width * height)/144)/32;

        var SideWall = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'sidewall',
          description: 'Side Panel',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.5938,
          qty: qty,
          hrs: .25,
        };

        console.log(height);

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

        ///////////Deck
        width = product.depth - .75 - .1875 - .5938;  //(ff, back panel, 5/8" nailer)
        height = product.width - .5 - (2*(19/32)) + .5; //(ff offset, 2 side panels, (2)1/4" dados)
        qty = ((width * height)/144)/32;

        var bottomPanel = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'bottompanel',
          description: 'Deck',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.5938,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', bottomPanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        }); 

        if(product.model === "B.P" || product.model === "V.LC")
        {     
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
        }


        ///////////Stretchers
        if(product.model != "B.P" && product.model != "V.LC")
        {
          width = 3;
          height = product.width - .5 - (2*(19/32)); //(ff offset, 2 side panels)
          qty = ((width * height)/144)/32;

          var stretcher = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'stretcher',
            description: 'Stretcher',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
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
        }

        ///////////Toe Kick
        width = 3;
        height = product.width - .5 - (2*(19/32)); //(ff offset, 2 side panels)
        qty = ((width * height)/144)/32;

        var toekick = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'toekick',
          description: 'Toe Kick Suppport',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.5938,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', toekick, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });

        //1/4" Back Panels
        if(product.model != "B.3DB" && product.model != "B.4DB" && product.model != "V.3DB" && product.model != "V.4DB" )
        {
          width = product.width - 0.5;
          height = product.height - 5.25; //-4.5" for toe kick, - .75" for dado offset from toe-kick
          qty = ((width * height)/144)/32;

          var backpanel = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'backpanel',
            description: 'Back Panel',
            material: '1/4" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.1875,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', backpanel, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        //5/8" Back Panels
        if(product.model === "B.3DB" || product.model === "B.4DB" || product.model === "V.3DB" || product.model === "V.4DB" )
        {
          width = product.width - 0.5;
          height = product.height - 5.25; //-4.5" for toe kick, - .75" for dado offset from toe-kick
          qty = ((width * height)/144)/32;

          var backpanel = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'backpanel',
            description: 'Back Panel',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', backpanel, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        //5/8" Nailers
        if(product.model != "B.3DB" && product.model != "B.4DB" && product.model != "V.3DB" && product.model != "V.4DB" )
        {
          width = 6;
          height = product.width - .5; //(ff offset)
          qty = ((width * height)/144)/32;

          var nailplate = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'nailplate',
            description: 'Nailer',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', nailplate, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });

          if(product.model === "B.P" || product.model === "V.LC")
          {
            Meteor.call('partInsert', nailplate, function(error, partId) {
            if (error){
              throwError(error.reason);
              } 
            });
          }


        }

        //1/4" Nailers
        if(product.model === "B.3DB" || product.model === "B.4DB" || product.model === "V.3DB" || product.model === "V.4DB" )
        {
          width = 6;
          height = product.width - .5; //(ff offset)
          qty = ((width * height)/144)/32;

          var nailplate = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'nailplate',
            description: 'Nailer',
            material: '1/4" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.1875,
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
        }

        //Total Time for Case Building = 66 minutes

  }

  //These products do not have toe kick
  if (product.model === "W" || product.model === "W.BRC" || product.model === "W.BLC"
      || product.model === "FV" || product.model === "FV.2DB" || product.model === "FV.3DB" || product.model === "FV.SB" || product.model === "FV.BRC" || product.model === "FV.BLC")
  {
      ///////////Side Wall
        width = product.depth - .75 - .1875 - .5938;  //(ff, back panel, 5/8" nailer)
        height = product.height;
        qty = ((width * height)/144)/32;

        var SideWall = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'sidewall',
          description: 'Side Panel',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.5938,
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

        ///////////Decks
        width = product.depth - .75 - .1875 - .5938;  //(ff, back panel, 5/8" nailer)
        height = product.width - .5 - (2*(19/32)) + .5; //(ff offset, 2 side panels, (2)1/4" dados)
        qty = ((width * height)/144)/32;

        var bottomPanel = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'bottompanel',
          description: 'Deck',
          material: '5/8" 1SUV Birch',
          width: width,
          height: height,
          depth: 0.5938,
          qty: qty,
          hrs: .1,
        };

        Meteor.call('partInsert', bottomPanel, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });   

        if(product.type === "Wall Cabinet")
        {
          Meteor.call('partInsert', bottomPanel, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          }); 
        }

        ///////////Stretchers
        if(product.type === "Floating Vanity Cabinet")
        {
          width = 3;
          height = product.width - .5 - (2*(19/32)); //(ff offset, 2 side panels)
          qty = ((width * height)/144)/32;

          var stretcher = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'stretcher',
            description: 'Stretcher',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
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
        }

        ///////////1/4" Back Panels
        if(product.model != "FV.2DB" && product.model != "FV.3DB")
        {
          width = product.width - 0.5;
          height = product.height - 1.5; // - (2) .75" for dado offset from ff
          qty = ((width * height)/144)/32;

          var backpanel = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'backpanel',
            description: 'Back Panel',
            material: '1/4" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.1875,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', backpanel, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        ///////////5/8" Back Panels
        if(product.model === "FV.2DB" || product.model === "FV.3DB")
        {
          width = product.width - 0.5;
          height = product.height - 1.5; // - (2) .75" for dado offset from ff
          qty = ((width * height)/144)/32;

          var backpanel = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'backpanel',
            description: 'Back Panel',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', backpanel, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        //5/8" Nailers
        if(product.model != "FV.2DB" && product.model != "FV.3DB")
        {
          width = 4;
          height = product.width - .5; //(ff offset)
          qty = ((width * height)/144)/32;

          var nailplate = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'nailplate',
            description: 'Nailer',
            material: '5/8" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.5938,
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
        }

        //1/4" Nailers
        if(product.model === "FV.2DB" || product.model === "FV.3DB")
        {
          width = 4;
          height = product.width - .5; //(ff offset)
          qty = ((width * height)/144)/32;

          var nailplate = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'nailplate',
            description: 'Nail Plate',
            material: '1/4" 1SUV Birch',
            width: width,
            height: height,
            depth: 0.1875,
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
        }
  }

}

buildFF = function(product, orderId, productId){
  if (product.model === "B.DD" || product.model === "B.FLD" || product.model === "B.3DB" || product.model === "B.4DB" || product.model === "B.SB.DD" || product.model === "B.SB.FLD" 
      || product.model === "V.DD" || product.model === "V.FLD"  || product.model === "V.3DB" || product.model === "V.4DB" || product.model === "V.SB.4DB" || product.model === "V.SB.DD" || product.model === "V.SB.FLD"
      || product.model === "B.P" || product.model === "V.LC" )
  { 
    ///////////Face Frame Stile
          width = 1.5;
          height = product.height - 4.5;
          qty = (width)/12;

          var faceframestile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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
          width = 1.5;
          height = product.width - 3;
          qty = (width)/12;

          var faceframerail = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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

          if (product.model === "B.DD" || product.model === "B.SB.DD" || product.model === "B.3DB" || product.model === "B.4DB" || product.model === "B.P" 
              || product.model === "V.DD" || product.model === "V.3DB" || product.model === "V.4DB" || product.model === "V.SB.DD" || product.model === "V.LC" )
          {
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });
          } 

          if (product.model === "B.3DB" || product.model === "B.4DB" || product.model === "V.3DB" || product.model === "V.4DB")
          {
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });
          } 

          if (product.model === "B.4DB" || product.model === "V.4DB")
          {
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });
          }     
  }

  if (product.model === "W" || product.model === "FV" || product.model === "FV.2DB" || product.model === "FV.3DB" || product.model === "FV.SB")
  { 
    ///////////Face Frame Stile
          width = 1.5;
          height = product.height;
          qty = (width)/12;

          var faceframestile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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
          width = 1.5;
          height = product.width - 3;
          qty = (width)/12;

          var faceframerail = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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


          if (product.model === "FV.2DB" || product.model === "FV.3DB")
          {
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });
          } 

          if (product.model === "FV.4DB")
          {
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });
          }     
  }

  if (product.model === "B.BRC.FLD" || product.model === "B.BLC.FLD" || product.model === "B.BRC.DD" || product.model === "B.BLC.DD"
      || product.model === "V.BRC.DD" || product.model === "V.BRC.FLD" || product.model === "V.BLC.DD" || product.model === "V.BLC.FLD")
  { 
    ///////////Face Frame Stile
          width = 1.5;
          height = product.height - 4.5;
          qty = (width)/12;

          var faceframestile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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


          ///////////Face Frame Filler 1
          width = 5.5;
          height = product.height - 4.5;
          qty = (width)/12;

          var faceframefillerstile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'faceframefillerstile',
            description: 'Face Frame Filler Stile',
            material: '5.5" Poplar',
            width: width,
            height: height,
            depth: 0.75,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', faceframefillerstile, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });

          ///////////Face Frame Filler Stile 2
          width = 4.75;
          height = product.height - 4.5;
          qty = (width)/12;

          var faceframefillerstile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'faceframefillerstile',
            description: 'Face Frame Filler Stile',
            material: '5.5" Poplar',
            width: width,
            height: height,
            depth: 0.75,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', faceframefillerstile, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });


          ///////////Face Frame Rail
          width = 1.5;
          height = product.width - (product.depth + 7); //-24" for depth of blind, -4" for filler, -3" for width of 2 faceframe stiles
          qty = (width)/12;

          var faceframerail = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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


          if (product.model === "B.BRC.DD" || product.model === "B.BLC.DD" || product.model === "V.BRC.DD" || product.model === "V.BLC.DD")
          { 
            Meteor.call('partInsert', faceframerail, function(error, partId) {
              if (error){
                throwError(error.reason);
              } 
            });   
          }   
  }

  if(product.model === "W.BRC" || product.model === "W.BLC" || product.model === "FV.BRC" || product.model === "FV.BLC")
  {
    ///////////Face Frame Stile
          width = 1.5;
          height = product.height - .25;
          qty = (width)/12;

          var faceframestile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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


          ///////////Face Frame Filler 1
          width = 5.5;
          height = product.height - .25;
          qty = (width)/12;

          var faceframefillerstile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'faceframefillerstile',
            description: 'Face Frame Filler Stile',
            material: '5.5" Poplar',
            width: width,
            height: height,
            depth: 0.75,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', faceframefillerstile, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });

          ///////////Face Frame Filler Stile 2
          width = 4.75;
          height = product.height - .25;
          qty = (width)/12;

          var faceframefillerstile = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
            name: 'faceframefillerstile',
            description: 'Face Frame Filler Stile',
            material: '5.5" Poplar',
            width: width,
            height: height,
            depth: 0.75,
            qty: qty,
            hrs: .1,
          };

          Meteor.call('partInsert', faceframefillerstile, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });


          ///////////Face Frame Rail
          width = 1.5;
          height = product.width - (product.depth + 7); //-12" for depth of blind, -4" for filler, -3" for width of 2 faceframe stiles
          qty = (width)/12;

          var faceframerail = {
            orderId: orderId,
            productId: productId,
            productName: product.name,
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
  }

}

buildDoors = function(product, orderId, productId){
  
  if(product.width <= 24)
  {
    doorWidth = product.width - .5; //add offset later

    if(product.model === "B.DD" || product.model === "B.SB.DD" || product.model === "V.DD" || product.model === "V.SB.DD")
    {
      doorHeight = product.height - 11.5; //-4.5" for toe-kick, - .25" offset from top, - 6.5" for drawer, -0.25" for offest from drawer
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
      doorHeight = 6.5;
      addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    } 
    if(product.model === "B.FLD" || product.model === "B.SB.FLD" || product.model === "V.FLD" || product.model === "V.SB.FLD")
    {
      doorHeight = product.height - 4.75; //-4.5" for toe-kick, - .25" offset from top
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
    } 
    if(product.model === "W" || product.model === "FV")
    {
      doorHeight = product.height - .25; //- .25" offset from top
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
    } 
  }

  //Double Door Cabinets
  if(product.width > 24)
  {
    doorWidth = (product.width - .625)/2; //add offset later, -.125 door space

    if(product.model === "B.DD" || product.model === "B.SB.DD" || product.model === "V.DD" || product.model === "V.SB.DD")
    {
      doorHeight = product.height - 11.5; //-4.5" for toe-kick, - .25" offset from top, - 6.5" for drawer, -0.25" for offest from drawer
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
      
      doorHeight = 6.5;
      doorWidth = product.width - 0.5;
      addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    } 
    if(product.model === "B.FLD" || product.model === "B.SB.FLD" || product.model === "V.FLD" || product.model === "V.SB.FLD")
    {
      doorHeight = product.height - 4.75; //-4.5" for toe-kick, - .25" offset from top
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
    } 
    if(product.model === "W" || product.model === "FV")
    {
      doorHeight = product.height - .25; //- .25" offset from top
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
      addShakerDoorFace(product, orderId, productId, doorHeight, doorWidth);
    } 
  }

  //////Drawer Banks
  if(product.model === "B.3DB" || product.model === "B.4DB" || product.model === "V.3DB" || product.model === "V.4DB")
  {
    doorHeight = 6.5;
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
  } 
  if(product.model === "B.3DB" || product.model === "V.3DB")
  {
    doorHeight = (product.height - 11.75)/2; //-4.5" for toe-kick, - .25" offset from top, - 6.5" for drawer, -0.25" for offest from 1st drawer, -0.25" for offset from 2nd drawer
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
  } 
  if(product.model === "B.4DB" || product.model === "V.4DB")
  {
    doorHeight = (product.height - 12)/3; //-4.5" for toe-kick, - .25" offset from top, - 6.5" for drawer, -0.25" for offest from 1st drawer, -0.25" offset from 2nd drawer, -0.25" offset from 3rd door
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
  }
  if(product.model === "FV.2DB")
  {
    doorHeight = (product.height - 0.5)/2; // - .25" offset from top,  -0.25" for offest from 1st drawer, 
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
  } 
  if(product.model === "FV.3DB")
  {
    doorHeight = (product.height - 0.75)/3; // - .25" offset from top,  -0.25" for offest from 1st drawer, -0.25" offset from 2nd drawer
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
    addShakerDrawerFace(product, orderId, productId, doorHeight, doorWidth);
  } 

}

addShakerDoorFace = function(product, orderId, productId, doorHeight, doorWidth){
  ///////////Door Stiles
    width = 2;
    height = doorHeight;
    qty = (width)/12;

    var doorstile = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
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

    ///////////Door Rails
    width = 2;
    height = doorWidth - 3.1563;  // -4" for width of 2 stiles, +.875" for the tongues, -1/32" joint gap
    qty = (width)/12;

    var doorrail = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
      name: 'doorrail',
      description: 'Door Rail',
      material: '2" Poplar',
      width: width,
      height: height,
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

    ///////////Door Panel
    width = doorWidth - 3.2813;  // -4" for width of 2 stiles, +.875" for the tongues, -1/32" joint gap, -.125" expansion
    height = doorHeight - 3.25; // -4" for width of 2 stiles, +.875' for the grooves, -.125" expansion 
    qty = ((width * height)/144)/32;

    var doorpanel = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
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
}

//wood grain runs opposite direction
addShakerDrawerFace = function(product, orderId, productId, doorHeight, doorWidth){
  ///////////Door Stiles
    width = 2;
    height = doorHeight;
    qty = (width)/12;

    var doorstile = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
      name: 'doorstile',
      description: 'Drawer Face Stile',
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

    ///////////Door Rails
    width = 2;
    height = doorWidth - 3.1563;  // -4" for width of 2 stiles, +.875" for the tongues, -1/32" joint gap
    qty = (width)/12;

    var doorrail = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
      name: 'doorrail',
      description: 'Drawer Face Rail',
      material: '2" Poplar',
      width: width,
      height: height,
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

    ///////////Door Panel
    height = doorWidth - 3.2813;  // -4" for width of 2 stiles, +.875" for the tongues, -1/32" joint gap, -.125" expansion
    width = doorHeight - 3.25; // -4" for width of 2 stiles, +.875' for the grooves, -.125" expansion 
    qty = ((width * height)/144)/32;

    var doorpanel = {
      orderId: orderId,
      productId: productId,
      productName: product.name,
      name: 'doorpanel',
      description: 'Drawer Face Panel',
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
}

buildDrawer = function(product, orderId, productId){
  console.log("buildDrawer worked!");
}

buildShelf = function(product, orderId, productId){
  console.log("buildShelf worked!");

  if (product.type === "Wall product")
    {

      ///////////Shelf
        width = product.depth - .75 - .1875 - .5938 - .125;  //(ff, back panel, 5/8" nailer, wiggle room)
        height = product.width - .5 - (2*(19/32)) -.125 - .0625; //(ff side offset, 2 side panels, width of 2 shelf clips, wiggle room)
        qty = ((width * height)/144)/32;

        var shelf = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'shelf',
          description: 'Shelf',
          material: '3/4" 2SUV Birch',
          width: width,
          height: height,
          depth: 0.7188,
          qty: qty,
          hrs: .2,
        };

        if(product.height > 12){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        if(product.height > 24){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }

        if(product.height > 36){
          Meteor.call('partInsert', shelf, function(error, partId) {
            if (error){
              throwError(error.reason);
            } 
          });
        }
  }

  if (product.model === "B.DD" || product.model === "B.FLD" || product.model === "B.BRC.DD" || product.model === "B.BLC.DD" || product.model === "B.BRC.FLD" || product.model === "B.BLC.FLD")
    {

      ///////////Shelf
        width = 10.3437;  //(matches shelf depth of standard 12" deep wall products)
        height = product.width - .5 - (2*(19/32)) -.125 - .0625; //(ff side offset, 2 side panels, width of 2 shelf clips, wiggle room)
        qty = ((width * height)/144)/32;

        var shelf = {
          orderId: orderId,
          productId: productId,
          productName: product.name,
          name: 'shelf',
          description: 'Shelf',
          material: '3/4" 2SUV Birch',
          width: width,
          height: height,
          depth: 0.7188,
          qty: qty,
          hrs: .2,
        };

        Meteor.call('partInsert', shelf, function(error, partId) {
          if (error){
            throwError(error.reason);
          } 
        });
        
  }

}

attachFF = function(product, orderId, productId){
  console.log("attachFF worked!");
}

attachDoor = function(product, orderId, productId){
  console.log("attachDoor worked!");
}

attachDrawer = function(product, orderId, productId){
  console.log("attachDrawer worked!");
}

stainFF = function(product, orderId, productId){
  console.log("stainFF worked!");
}

stainDoorFace = function(product, orderId, productId){
  console.log("stainDoorFace worked!");
}

stainDrawerFace = function(product, orderId, productId){
  console.log("stainDrawerFace worked!");
}

stainEndPanel = function(product, orderId, productId){
  console.log("stainEndPanel worked!");
}

paintFF = function(product, orderId, productId){
  console.log("paintFF worked!");
}

paintDoorFace = function(product, orderId, productId){
  console.log("paintDoorFace worked!");
}

paintDrawerFace = function(product, orderId, productId){
  console.log("paintDrawerFace worked!");
}

paintEndPanel = function(product, orderId, productId){
  console.log("paintEndPanel worked!");
}

