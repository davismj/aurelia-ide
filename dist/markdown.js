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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7eURBSWlCLHVCQUF1Qjs7Ozt1Q0FKL0IsTUFBTTs7Ozs7Ozs7Ozs7QUFJRSxtQ0FBdUI7QUFFckIseUJBRkYsdUJBQXVCLENBRXBCLE9BQU8sRUFBRTs7O0FBQ2pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDN0M7OzZCQUxRLHVCQUF1Qjs7MkJBT3BCLHNCQUFDLFFBQVEsRUFBRTtBQUNuQiw0QkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQzVDLFFBQVEsQ0FDSCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ1gsR0FBRyxDQUFDLFVBQUEsSUFBSTttQ0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNsQixDQUFDO3FCQUNMOzs7K0NBZFEsdUJBQXVCO0FBQXZCLHVDQUF1QixHQURuQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsdUJBQXVCLEtBQXZCLHVCQUF1Qjt1QkFBdkIsdUJBQXVCOzs7K0NBQXZCLHVCQUF1QiIsImZpbGUiOiJtYXJrZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9