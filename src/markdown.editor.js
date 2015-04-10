import { inject } from 'aurelia-framework';

@inject(Element)
export class MarkdownEditor{

	constructor(element){
    this.element = element;
    this.mymarkdowntext = ![WAT](http://i0.kym-cdn.com/photos/images/newsfeed/000/173/576/Wat8.jpg "WAT")';
	}
}
