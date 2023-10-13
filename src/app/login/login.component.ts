import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  onSubmit() {
    if (this.formLogin.value.email == '' || this.formLogin.invalid) return;
    this.router.navigate(['/signin'], { state: { email: this.formLogin.value.email } });
  }


  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.formLogin.controls[controlName].hasError(errorName);
  }
}