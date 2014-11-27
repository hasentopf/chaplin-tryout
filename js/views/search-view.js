define([
  'views/base/view',
  'text!templates/search.hbs'
], function(View, template) {
  'use strict';

  var SearchView = View.extend({
    // Automatically render after initialize
    autoRender: true,

    className: 'search',

    // Save the template string in a prototype property.
    // This is overwritten with the compiled template function.
    // In the end you might want to used precompiled templates.
    template: template
  });
  return SearchView;
});
