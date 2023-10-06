import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  login() {
    if(this.loginForm.valid) {
      const login = this.loginForm.value.login;
      const password = this.loginForm.value.password;
      this.authService.autenticar(login, password).subscribe({
        next: (value) => {
          console.log('Autenticado com sucesso', value)
          this.router.navigateByUrl('/')
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Problema na autenticação', err)
        },
      })
    }
  }
}
