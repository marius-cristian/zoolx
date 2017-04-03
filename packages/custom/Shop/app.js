'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Shop = new Module('Shop');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Shop.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Shop.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Shop.menus.add({
    title: 'shop example page',
    link: 'shop example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Shop.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Shop.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Shop.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Shop;
});
