System.register(['aurelia-framework', 'showdown'], function (_export) {
    var inject, Showdown, _classCallCheck, _createClass, MarkdownCustomAttribute;

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_showdown) {
            Showdown = _showdown['default'];
        }],
        execute: function () {
            'use strict';

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

            _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            MarkdownCustomAttribute = (function () {
                function MarkdownCustomAttribute(element) {
                    _classCallCheck(this, _MarkdownCustomAttribute);

                    this.element = element;
                    this.converter = new Showdown.converter();
                }

                _createClass(MarkdownCustomAttribute, [{
                    key: 'valueChanged',
                    value: function valueChanged(newValue) {
                        this.element.innerHTML = this.converter.makeHtml(newValue.split('\n').map(function (line) {
                            return line.trim();
                        }).join('\n'));
                    }
                }]);

                var _MarkdownCustomAttribute = MarkdownCustomAttribute;
                MarkdownCustomAttribute = inject(Element)(MarkdownCustomAttribute) || MarkdownCustomAttribute;
                return MarkdownCustomAttribute;
            })();

            _export('MarkdownCustomAttribute', MarkdownCustomAttribute);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFya2Rvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt5REFJaUIsdUJBQXVCOzs7O3VDQUovQixNQUFNOzs7Ozs7Ozs7OztBQUlFLG1DQUF1QjtBQUVyQix5QkFGRix1QkFBdUIsQ0FFcEIsT0FBTyxFQUFFOzs7QUFDakIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLHdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUM3Qzs7NkJBTFEsdUJBQXVCOzsyQkFPcEIsc0JBQUMsUUFBUSxFQUFFO0FBQ25CLDRCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDNUMsUUFBUSxDQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDWCxHQUFHLENBQUMsVUFBQSxJQUFJO21DQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7eUJBQUEsQ0FBQyxDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2xCLENBQUM7cUJBQ0w7OzsrQ0FkUSx1QkFBdUI7QUFBdkIsdUNBQXVCLEdBRG5DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCx1QkFBdUIsS0FBdkIsdUJBQXVCO3VCQUF2Qix1QkFBdUI7OzsrQ0FBdkIsdUJBQXVCIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==