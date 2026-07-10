import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';
  remember = false;

  // Credenciales quemadas
  private readonly USER = 'admin';
  private readonly PASS = '123456';

  constructor(private router: Router) {}

  login(): void {

    if (!this.username || !this.password) {

      Swal.fire({
       icon: 'warning',

  title: 'Campos requeridos',

  text: 'Ingrese usuario y contraseña.',

  customClass: {

    popup: 'inovisec-popup',

    title: 'inovisec-title',

    htmlContainer: 'inovisec-text',

    confirmButton: 'inovisec-button'

  },

  buttonsStyling: false
      });

      return;
    }

    if (
      this.username === this.USER &&
      this.password === this.PASS
    ) {

      Swal.fire({

  icon: 'success',

  title: 'Bienvenido',

  text: 'Inicio de sesión correcto.',

  timer: 1200,

  showConfirmButton: false,

  customClass: {

    popup: 'inovisec-popup',

    title: 'inovisec-title',

    htmlContainer: 'inovisec-text'

  }

}).then(() => {

  this.router.navigate(['/dashboard']);

});

      return;
    }

    Swal.fire({
      icon: 'error',

  title: 'Acceso denegado',

  text: 'Usuario o contraseña incorrectos.',

  customClass: {

    popup: 'inovisec-popup',

    title: 'inovisec-title',

    htmlContainer: 'inovisec-text',

    confirmButton: 'inovisec-button'

  },

  buttonsStyling: false

    });

  }

}