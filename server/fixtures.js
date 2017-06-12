// Fixture data
//Create Test Users

if (Meteor.users.find().fetch().length === 0) {

  console.log('Creating users: ');

  var users=[
    {username: "mark@elevationcabinetry.com", name: "Mark Spelman", roles:['admin']},
    {username: "jonathan@elevationcabinetry.com", name: "Jonathan Lee", roles:['admin']},
  ];

  _.each(users, function(user){
    Accounts.createUser({
      //email: user.email,
      password: "ECOffice1!",
      username: user.username,
      profile: {name: user.name},
      roles: user.roles,
    });
  });

}

/*if (Materials.find().fetch().length === 0) {

    //Starting Materials List////////////////////////////////////////////////////////
    Materials.insert({
      name: '3/4" Raw Birch',
      description: '3/4 Import Birch C-2 4x8',
      type: 'wood',
      cost: 29.12,
      width: 48,
      height: 96,
      depth: .75,
      submitted: new Date()
    });

    Materials.insert({
      name: '3/4" 2SUV Birch',
      description: '3/4 Import Birch C-2 UV(2Side) 4x8',
      type: 'wood',
      cost: 35.72,
      width: 48,
      height: 96,
      depth: .75,
      submitted: new Date()
    });

    Materials.insert({
      name: '5/8" 1SUV Birch',
      description: '5/8 Import Birch C-2 UV(1Side) 4x8',
      type: 'wood',
      cost: 32.58,
      width: 48,
      height: 96,
      depth: .625,
      submitted: new Date()
    });

    Materials.insert({
      name: '5/8" Baltic Birch',
      description: '5/8 Baltic Birch 4x8',
      type: 'wood',
      cost: 38.75,
      width: 48,
      height: 96,
      depth: .625,
      submitted: new Date()
    });

    Materials.insert({
      name: '1/4" 1SUV Birch',
      description: '1/4 Import Birch C-2 (UV 1 Side) 4x8',
      type: 'wood',
      cost: 16.20,
      width: 48,
      height: 96,
      depth: .25,
      submitted: new Date()
    });

    Materials.insert({
      name: '1/4" Raw Birch',
      description: '1/4 Import Birch C-2 4x8',
      type: 'wood',
      cost: 15.20,
      width: 48,
      height: 96,
      depth: .25,
      submitted: new Date()
    });

    Materials.insert({
      name: '1.5" Poplar',
      description: '13/16 x 1.5" S4S Poplar RL',
      type: 'wood',
      cost: .46,
      width: 144,
      height: 1.5,
      depth: .75,
      submitted: new Date()
    });

    Materials.insert({
      name: '2" Poplar',
      description: '13/16 x 2" S4S Poplar RL',
      type: 'wood',
      cost: .56,
      width: 144,
      height: 2,
      depth: .75,
      submitted: new Date()
    });

    Materials.insert({
      name: '5.5" Poplar',
      description: '13/16 x 5.5" S4S Poplar RL',
      type: 'wood',
      cost: .56,
      width: 144,
      height: 5.5,
      depth: .75,
      submitted: new Date()
    });

    Materials.insert({
      name: '21" Soft-Close Draw Runner',
      description: '21" Full Extension Draw Runner for 5/8" Drawer Sides',
      //partNum: 'hwbl563h330b',
      type: 'hardware',
      cost: 18.50,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Left Drawer Locking Mount',
      description: '563/569 Side-Side Locking Device(Left)',
      partNum: 'hwblt51.1901L',
      type: 'hardware',
      cost: 1.60,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Right Drawer Locking Mount',
      description: '563/569 Side-Side Locking Device(Right)',
      partNum: 'hwblt51.1901R',
      type: 'hardware',
      cost: 1.60,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Drawer Runner L Bracket',
      description: 'Rear Mount Socket for 562/563 Tandem',
      partNum: 'hwbl295.3750.01',
      type: 'hardware',
      cost: .49,
      submitted: new Date()
    });

    Materials.insert({
      name: '5/8" Overlay Hinge',
      description: '5/8" OL Compact 38N Face Frame Hinge',
      partNum: 'hwbl38n358c..10',
      type: 'hardware',
      cost: 1.57,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Lazy Susan',
      description: 'Lazy Susan',
      type: 'hardware',
      cost: 47.63,
      submitted: new Date()
    });

    Materials.insert({
      name: '170 Degree Hinge',
      description: '170 Degree Hinge',
      type: 'hardware',
      cost: 12.69,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Bi-Fold Hinge',
      description: 'Bi-Fold Hinge',
      type: 'hardware',
      cost: 9.09,
      submitted: new Date()
    });

    Materials.insert({
      name: 'Labor Rate',
      description: 'Standard Labor Rate',
      type: 'labor',
      cost: 25,
      submitted: new Date()
    });
}*/

/*if (Products.find().fetch().length === 0) {
    //Products List////////////////////////////////////////////////////////
    //Base Cabinets
    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Cabinet - Door & Drawer', 
      model:  'B.DD', 
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Cabinet - Full Length Door', 
      model:  'B.FLD', 
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   '3 Drawer Bank Cabinet', 
      model:  'B.3DB',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   '4 Drawer Bank Cabinet', 
      model:  'B.4DB',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Sink Base Cabinet - Door & Drawer',
      model:  'B.SB.DD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Sink Base Cabinet - Full Length Door',
      model:  'B.SB.FLD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Blind Right Corner Cabinet - Door & Drawer', 
      model:  'B.BRC.DD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Blind Left Corner Cabinet - Door & Drawer',
      model:  'B.BLC.DD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Blind Right Corner Cabinet - Full Length Door', 
      model:  'B.BRC.FLD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Base Blind Left Corner Cabinet - Full Length Door',
      model:  'B.BLC.FLD',
      height:  34.5,
      depth:   24,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Lazy Susan Cabinet',
      model:  'B.LS',
      width:   36,
      height:  34.5,
      depth:   36,
    });

    Products.insert({
      template: 1,
      type:   'Base Cabinet',
      name:   'Pantry Cabinet',
      model:  'B.P',
      height:  96,
      depth:   24,
    });

    //Wall Cabinets//////////////////////////////////////////////////
    Products.insert({
      template: 1,
      type:   'Wall Cabinet',
      name:   'Wall Cabinet',
      model:  'W',
      height:  42,
      depth:   12,
    });

    Products.insert({
      template: 1,
      type:   'Wall Cabinet',
      name:   'Wall Diagonal Corner Cabinet ',
      model:  'W.DC',
      width:   17,
      height:  42,
      depth:   12,
    });

    Products.insert({
      template: 1,
      type:   'Wall Cabinet',
      name:   'Wall Blind Right Corner Cabinet',
      model:  'W.BRC',
      height:  42,
      depth:   12,
    });

    Products.insert({
      template: 1,
      type:   'Wall Cabinet',
      name:   'Wall Blind Left Corner Cabinet',
      model:  'W.BLC',
      height:  42,
      depth:   12,
    });

    //Vanity Cabinets ///////////////////////////////////////////////
    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Cabinet - Door & Drawer', 
      model:  'V.DD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Cabinet - Full Length Door', 
      model:  'V.FLD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity 3 Drawer Bank Cabinet', 
      model:  'V.3DB',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity 4 Drawer Bank Cabinet', 
      model:  'V.4DB',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Sink Base Cabinet - Door & Drawer',
      model:  'V.SB.DD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Sink Base Cabinet - Full Length Door',
      model:  'V.SB.FLD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Blind Right Corner Cabinet - Door & Drawer', 
      model:  'V.BRC.DD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Blind Right Corner Cabinet - Full Length Door', 
      model:  'V.BRC.FLD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Vanity Blind Left Corner Cabinet - Door & Drawer',
      model:  'V.BLC.DD',
      height:  34.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Vanity Cabinet',
      name:   'Linen Closet Cabinet',
      model:  'V.LC',
      height:  96,
      depth:   21,
    });

    //Floating Vanity Cabinets ///////////////////////////////////////////////
    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity Cabinet', 
      model:  'FV',
      height:  22.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity 2 Drawer Bank Cabinet', 
      model:  'FV.2DB',
      height:  22.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity 3 Drawer Bank Cabinet', 
      model:  'FV.3DB',
      height:  22.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity Sink Base Cabinet',
      model:  'FV.SB',
      height:  22.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity Blind Right Corner Cabinet', 
      model:  'FV.BRC',
      height:  22.5,
      depth:   21,
    });

    Products.insert({
      template: 1,
      type:   'Floating Vanity Cabinet',
      name:   'Floating Vanity Blind Left Corner Cabinet',
      model:  'FV.BLC',
      height:  22.5,
      depth:   21,
    });

    //Trim for Cabinets ///////////////////////////////////////////////
    Products.insert({
      type:   'Trim',
      name:   'Toe Kick',
      model:  'T.TK',
      height:  4.5,
    });

    Products.insert({
      type:   'Trim',
      name:   'Scribe Molding',
      model:  'T.SM',
    });

    Products.insert({
      type:   'Trim',
      name:   'Base Filler',
      model:  'T.BF',
      width:   3,
      height:  34.5,
    });

    Products.insert({
      type:   'Trim',
      name:   'Wall Filler',
      model:  'T.WF',
      width:   3,
      height:  42,
    });

    Products.insert({
      type:   'Trim',
      name:   'Interior Corner Molding',
      model:  'T.ICM',
    });

    Products.insert({
      type:   'Trim',
      name:   'Exterior Corner Molding',
      model:  'T.ECM',
    });

    Products.insert({
      type:   'Trim',
      name:   'Back Panel',
      model:  'T.BP',
    });
}*/
