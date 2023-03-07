import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) { 
    this.authService.logout(false)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "usuario": ['', [Validators.required, Validators.maxLength(50)]],
      "password": ['', [Validators.required, Validators.maxLength(150)]]
    })
  }

  get usuario() {return this.loginForm.controls['usuario']}
  get password() {return this.loginForm.controls['password']}

  login() {
    if (this.loginForm.invalid) {
      swal.fire('Atención', 'Usuario y/o contraseña vacío', 'error')
      return
    }

    this.authService.login(
      this.loginForm.getRawValue().usuario,
      this.loginForm.getRawValue().password
    ).subscribe((result: any) => {
      localStorage.setItem('access_token', result.token)
      //this.router.navigate(['/'])
      swal.fire('Bienvenido', 'Bienvenido al sistema', 'success')
    }, (err: any) => {
      let error = err.error.message
      console.log(err);
      swal.fire('Atencion!', error, 'error')
    })

  }


}
