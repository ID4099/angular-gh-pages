import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser;

  users: string[] = ['Alexander', 'Yesenia', 'Jesus', 'Andres'];
  AddUser(newUser){
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }

  mesageUser(user){
    for (let index = 0; index < this.users.length; index++) {
        if(user == this.users[index]){
          alert('on delete user '+user);
          this.users.splice(index, 1);
        }      
    }
  }

  ngOnInit() {
  }

}
