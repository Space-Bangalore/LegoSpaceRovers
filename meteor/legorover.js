// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Move = new Meteor.Collection("move");

if (Meteor.isClient) {

  Session.setDefault("checkObsEnable", 0);
  Template.LegoSpaceRovers.legorules = function () {
    return Move.find({});
  };

  Template.LegoSpaceRovers.events({
    'click input.forward': function () {
      a = Move.findOne({});
      Move.update(a._id, {$inc: {fwd: 1}});
      if (typeof console !== 'undefined')
        console.log("You pressed the button %s ",a._id);
    },
   
    'click input.back': function () {
      a = Move.findOne({});
      Move.update(a._id, {$inc: {bwd: 1}});
      if (typeof console !== 'undefined')
        console.log("You pressed the button %s ",a._id);
    },

    'click input.stop': function () {
      a = Move.findOne({});
      Move.update(a._id, {$inc: {brake: 1}});
      if (typeof console !== 'undefined')
        console.log("You pressed the button %s ",a._id);
    },

    'click input.left': function () {
      a = Move.findOne({});
      Move.update(a._id, {$inc: {left: 1}});
      if (typeof console !== 'undefined')
        console.log("You pressed the button %s ",a._id);
    },

    'click input.right': function () {
      a = Move.findOne({});
      Move.update(a._id, {$inc: {right: 1}});
      if (typeof console !== 'undefined')
        console.log("You pressed the button %s ",a._id);
    },

    'click input.chkobs': function () {
      a = Move.findOne({});
      if (a.chkobs == 0)
	        Move.update(a._id, {$set: {chkobs: 1}});
	else
		Move.update(a._id, {$set: {chkobs: 0}});
	}
  });

}


// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Move.find().count() === 0) {
        Move.insert({fwd: 0, bwd: 0, brake: 0, left: 0, right: 0, chkobs: 0});
    }
  });
}
