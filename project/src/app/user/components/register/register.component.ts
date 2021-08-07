import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private userService: UserService, private router: Router) { }


  register(form: NgForm){
    const {username, email} = form.value;
    const password = form.controls.passwords.value.password;
    this.userService.register({username, email, password}).subscribe({
      next:  () => {
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
