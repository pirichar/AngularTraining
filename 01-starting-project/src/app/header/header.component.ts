import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: false,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

	title: string;

	constructor() {
		this.title = 'My Application Header';
	}

	onButtonClick(): void {
		console.log('Button clicked!');
	}
}