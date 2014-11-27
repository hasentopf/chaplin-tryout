define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Search = Model.extend({
    defaults: {
        label: 'Test Input',
        values: [{
            1: 'Test',
            2: 'Qwertz'
        }]
    }

    // ,initialize: function(attributes, options) {
    //  Model.prototype.initialize.apply(this, arguments);
    //  console.debug('HelloWorld#initialize');
    // }
  });

  return Search;
});
