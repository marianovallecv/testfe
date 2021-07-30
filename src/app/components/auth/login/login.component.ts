import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

import { GlobalVariables as gv} from '../../../configuration/globals';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../services/token.service';
import { AuthorityService } from '../../../services/authority.service';
import { UserLoguin } from '../../../model/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title!: string;
  modeABM: number = gv.MODE_ABM.MODE_ABM_GENERIC;

  /**
   * Sirve para deshabilitar el submit en los botones.
   */
  isSubmit = true;

  isLogged!: boolean;
  loguinUser!: UserLoguin;

  roles!: string[];

  loading!: boolean;

  /**
   * Show/hide password
   */
  fieldTextType!: boolean;

  formGroup!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private token: TokenService,
    private service: AuthorityService,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.title = 'Inicio de sesión';

    this.buildForm();
    this.isLogged = this.token.isLogued();
    this.roles = this.token.getAuthorities();

    this.loading = false;
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      username: new FormControl({value: '', disabled: false}, [Validators.required]),
      password: new FormControl({value: '', disabled: false}, [Validators.required]),
    });
  }

  onLogin(): void{

    if (this.isSubmit) {
      this.loading = true;

      this.loguinUser = new UserLoguin(this.formGroup.controls.username.value, this.formGroup.controls.password.value);
      this.service.login(this.loguinUser).subscribe(
        (result: any) => {
          this.isLogged = true;

          this.token.setToken(result.token);
          this.token.setUserName(result.userName);
          /**
           * Va al navegador.
           */
          this.token.setAuthorities(result.authorities);
          /***
           * Va a la variable roles.
           */
          this.roles = result.authorities;
          this.toastr.success('Logueado correctamente', 'Success', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });

          this.loading = false;

          this.router.navigate(['/']);
          //window.location.reload();
        },
        (error: any) => {
          this.isLogged = false;
          this.toastr.error('Error al loguearse', 'Error', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.loading = false;
        }
      );
    }
  }

  go(rute: string): void {
    this.router.navigate([rute]);
  }

  toggleFieldTextType(): void{
    this.isSubmit = false;
    this.fieldTextType = !this.fieldTextType;
  }

  //getState(name: string): any{
  //  return Validations.getState(name, this.formGroup, true);
  //}
}
