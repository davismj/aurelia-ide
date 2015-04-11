System.register(['aurelia-framework', 'aurelia-router', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  var inject, Router, _classCallCheck, App;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      App = (function () {
        function App(router) {
          _classCallCheck(this, _App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = 'Aurelia';
            config.map([{ route: 'markdown-preview', moduleId: './markdown.editor', nav: true, title: 'Markdown Editor' }]);
          });
        }

        var _App = App;
        App = inject(Router)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VDQU1hLEdBQUc7Ozs7aUNBTlIsTUFBTTs7OEJBQ04sTUFBTTs7Ozs7OztBQUtELFNBQUc7QUFDSCxpQkFEQSxHQUFHLENBQ0YsTUFBTSxFQUFFOzs7QUFDbEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLENBQ2xHLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzttQkFUVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9