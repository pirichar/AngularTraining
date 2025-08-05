import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type User = {
//     id:string;
//     name:string;
//     avatar:string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // signal way
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  //new way of output without the decorator
  // select = output<string>(); 

  //old way of declaring variables
  // @Input ({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
