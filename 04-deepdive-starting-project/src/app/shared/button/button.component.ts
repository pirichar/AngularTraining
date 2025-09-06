import { Component, input } from '@angular/core';

//here we use the attribute selector instead of the element selector
//this allows us to use the button component as a directive on a native button element
// which makes our code leaner and more semantic
@Component({
  selector: 'button[appButton]. a[appButton]', 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  constructor() {
    
   }

}
