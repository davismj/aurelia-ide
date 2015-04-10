import { inject } from 'aurelia-framework';
import Showdown from 'showdown';
    
    @inject(Element)
    export class MarkdownCustomAttribute {  
    
        constructor(element) {
            this.element = element;
            this.converter = new Showdown.converter();
        }
    
        valueChanged(newValue) {
            this.element.innerHTML = this.converter.makeHtml(
                newValue
                    .split('\n')
                    .map(line => line.trim())
                    .join('\n')
            );
        }
    }