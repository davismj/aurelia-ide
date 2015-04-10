System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      NavBar = (function () {
        var _instanceInitializers = {};

        function NavBar() {
          _classCallCheck(this, NavBar);

          this.router = _instanceInitializers.router.call(this);
        }

        _createDecoratedClass(NavBar, [{
          key: 'router',
          enumerable: true,
          decorators: [bindable],
          initializer: function () {
            return null;
          }
        }], null, _instanceInitializers);

        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3REFFYSxNQUFNOzs7O21DQUZYLFFBQVE7Ozs7Ozs7OztBQUVILFlBQU07OztpQkFBTixNQUFNO2dDQUFOLE1BQU07O2VBQ1AsTUFBTSx5QkFBTixNQUFNOzs7OEJBREwsTUFBTTs7O3VCQUNoQixRQUFROzttQkFBVSxJQUFJOzs7O2VBRFosTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9