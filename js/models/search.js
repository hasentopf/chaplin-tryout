define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Search = Model.extend({
    defaults: {
        label: 'Test Input',
        options: [
            {'option': 'Test', 'value': 1 },
            {'option': 'Qwerzt', 'value': 2 },
            {'option': 'Test 123', 'value': 3 }
        ]
    }

    // ,initialize: function(attributes, options) {
    //  Model.prototype.initialize.apply(this, arguments);
    //  console.debug('HelloWorld#initialize');
    // }
  });

  return Search;
});
