import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  formPassword!: FormGroup;
  showPassword = false;
  email !: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) {
    let state = this.router.getCurrentNavigation()?.extras.state || {};
    this.email = state['email'];
  }

  ngOnInit(): void {
    this.formPassword = this.formBuilder.group({
      password: ['', [Validators.required]],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    let user = {
      email: this.email,
      password: this.formPassword.value.password,
      userAgent: navigator.userAgent
    }
    this.http.post(`/api`, user).subscribe((res: any) => console.log(res));
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.formPassword.controls[controlName].hasError(errorName);
  }
}
