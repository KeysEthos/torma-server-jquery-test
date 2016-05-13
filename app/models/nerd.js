// app/models/nerd.js
// grab the mongoose module

  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;
  
// Define the nerd model
// module.exports allows to pass this to other files when called
/*  var dbScheme   = new Schema({
        name : String
  });
*/ 
module.exports = mongoose.model('nerd', {
  name : {
    type : String, default: ''
  }
});
 // router.route('/nerd')
    //Create a nert (accessed at POST http://local:8080/api/nerd
/*
    .post(function(req, res) {
    var nerd = new nerd{(    // create a new instance of the nerd model
        name: String        //set the nerd name (comes from request)
    });
        nerd.save(function(err) {
          if (err)
             res.send(err);
          res.json({ message: "Nerds created!" });                                                          });

*/

 
 // module.exports = mongoose.model('nerd', dbScheme);
