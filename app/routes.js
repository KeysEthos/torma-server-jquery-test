// app/routes.js

var path = require('path');

  // grab the nerd.js model
  var nerd = require('./models/nerd');

      module.exports = function(app) {

      // server routes ===========================================================
          // handle things like api calls
          // authentication routes

              // sample api route
          app.get('/api/nerds', function(req, res) {

              // use mongoose to get all nerds in the database
          nerd.find(function(err, nerds) {

              // if there is an error retrieving, send the error.                                                      // nothing after res.send(err) will execute
            if (err)
               res.send(err);
               res.json(nerds); // return all nerds in JSON format
           });
       });
              // route to handle creating goes here (app.post)
              // route to handle delete goes here (app.delete)
      

       // frontend routes =========================================================
              // route to handle all angular requests
    
        app.get('*', function(req, res) {
             //file that renders the index.html page
             res.sendFile(path.join(__dirname, './public/views/index.html'));
        });

       };  //End module.exports function
