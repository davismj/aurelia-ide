System.register(['aurelia-framework'], function (_export) {
   var inject, _classCallCheck, MarkdownEditor;

   return {
      setters: [function (_aureliaFramework) {
         inject = _aureliaFramework.inject;
      }],
      execute: function () {
         'use strict';

         _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

         MarkdownEditor = (function () {
            function MarkdownEditor(element) {
               _classCallCheck(this, _MarkdownEditor);

               this.element = element;
               this.mymarkdowntext = '#hey \n ##you';
            }

            var _MarkdownEditor = MarkdownEditor;
            MarkdownEditor = inject(Element)(MarkdownEditor) || MarkdownEditor;
            return MarkdownEditor;
         })();

         _export('MarkdownEditor', MarkdownEditor);
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtkb3duLmVkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2dDQUdhLGNBQWM7Ozs7b0NBSGxCLE1BQU07Ozs7Ozs7QUFHRix1QkFBYztBQUVmLHFCQUZDLGNBQWMsQ0FFZCxPQUFPLEVBQUM7OztBQUNqQixtQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsbUJBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO2FBQ3hDOztrQ0FMVyxjQUFjO0FBQWQsMEJBQWMsR0FEMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILGNBQWMsS0FBZCxjQUFjO21CQUFkLGNBQWM7OzttQ0FBZCxjQUFjIiwiZmlsZSI6Im1hcmtkb3duLmVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9