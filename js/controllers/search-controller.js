define([
  'controllers/base/controller',
  'models/search',
  'views/search-view'
], function(Controller, Search, SearchView) {
  'use strict';

  var SearchController = Controller.extend({
    show: function(params) {
      this.model = new Search();
      this.view = new SearchView({
        model: this.model,
        region: 'main'
      });
    }
  });

  return SearchController;
});
