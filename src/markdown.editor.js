import { inject } from 'aurelia-framework';

@inject(Element)
export class MarkdownEditor{

	constructor(element){
    this.element = element;
    this.mymarkdowntext = '#hey \n ##you';
	}
}