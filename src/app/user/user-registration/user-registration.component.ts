import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';
import * as alertifyjs from 'alertifyjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  constructor(
    private fb: FormBuilder,
    private addUserService: UserServiceService
  ) {}

  ngOnInit(): void {
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     confirmpassword: new FormControl(null, Validators.required),
    //     mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(10),
    //     ]),
    //   },
    //   this.confirmpasswordValidator
    // );
    this.createRegistrationForm();
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmpassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.minLength(10)]],
      },
      { Validators: this.confirmpasswordValidator }
    );
  }

  confirmpasswordValidator(fg: FormGroup): Validators {
    debugger;
    return fg.get('password').value === fg.get('confirmpassword').value
      ? null
      : { notmatched: true };
    // let password = fg.get('password').value;
    // let confirmpassword = fg.get('confirmpassword').value;
    // if (confirmpassword != password) {
    //   return 'notmatched';
    // }
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    //this.user = Object.assign(this.user, this.registrationForm.value);
    // localStorage.setItem('User', JSON.stringify(this.user));
    this.addUserService.addUser(this.userData());
    this.registrationForm.reset();
  }
}
