import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate, Location } from '@angular/common';

import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../model/candidate';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';
import { ColumnsABM } from '../../model/configuration/columns';
import { GlobalVariables as gv } from '../../configuration/globals';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

 /**
  formGroup!: FormGroup;

  candidate!: Candidate;
  candidates: Candidate[] = [];
  columns?: ColumnsABM[];

  roles?: string[];
  isAdmin = false;

  id: number = 0;

  page: number = 0;
  size: number = gv.PAGE_SIZE;
  items: Array<number> = [];
  column: string = '';
  isAscending = true;

  isFirst = false;
  isLast = false;
  totalPages: Array<number> = [];
  totalElements?: number;
  loading?: boolean;

  searchText?: string;

  constructor(
    private service: CandidateService,
    private toastr: ToastrService,
    private token: TokenService,
    private formBuilder: FormBuilder
  ) {
    // this.selectedUserOut = new EventEmitter();
  }

  ngOnInit(): void {
    this.page = 0;
    this.column = 'fullName';

    this.roles = this.token.getAuthorities();
    this.isAdmin = this.token.isAdmin();

    this.id = 1;

    this.columns = [
      { field: 'id', target: '', header: 'Id', type: 'number', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '20', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, title: '', mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
      { field: 'fullName', target: '', header: 'Nombre y apellido', type: 'string', format: 'capitalize', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
      { field: 'document', target: '', header: 'Documento', type: 'string', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },

      { field: 'birth', target: '', header: 'Nacimiento', type: 'date', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '35', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
      { field: 'address', target: '', header: 'Domicilio', type: 'string', format: 'capitalize', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
      { field: 'phone', target: '', header: 'Teléfono', type: 'string', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '30', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
      { field: 'email', target: '', header: 'Email', type: 'string', format: 'lowercase', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '60', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE },
    ];
    this.items = [5, 10];
    //this.pages();
    this.onOne();
  }
  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      fullName: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      document: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      birth: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      address: new FormControl({value: null, disabled: false}, Validators.required),
      phone: new FormControl({value: null, disabled: false}, Validators.required),
      email: new FormControl({value: null, disabled: false}, Validators.required),
   },);
  }

  private onOne(): void {
    this.service.one(this.id).subscribe(
      (data: Candidate) => {
        this.candidate = data;
        this.setValues(this.candidate);
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      });
  }


  setValues(data: Candidate){

    this.formGroup.get('fullName')?.setValue(data.fullName);
    this.formGroup.get('document')?.setValue(data.document);
    this.formGroup.get('birth')?.setValue(formatDate(data.birth, 'yyyy-MM-ddThh:mm:ss.SSS', 'es', 'UTC'));
    this.formGroup.get('address')?.setValue(data.address);
    this.formGroup.get('phone')?.setValue(data.phone);
    this.formGroup.get('email')?.setValue(data.email);
  }

  pages(): void {
    this.loading = true;
    this.service.pages(this.page, this.size, this.column, this.isAscending).subscribe(
      (result: any) => {
        this.isFirst = result.first;
        this.isLast = result.last;
        this.totalPages = new Array(result.totalPages);
        this.totalElements = result.totalElements;
        this.candidates = result.content;
        this.loading = false;
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  sort(): void {
    this.isAscending = !this.isAscending;
    this.pages();
  }

  first(): void {
    if (!this.isFirst) {
      this.page = 0;
      this.pages();
    }
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.pages();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.pages();
    }
  }

  last(): void {
    if (!this.isLast) {
      this.page = this.totalPages.length - 1;
      this.pages();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.pages();
  }

  setSize(size: number): void {
    this.size = size;
    this.pages();
  }

  setColumn(column: string): void {
    this.column = column;
    this.isAscending = !this.isAscending;
    this.pages();
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(
      (result: any) => {
        this.toastr.success('Usuerio Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.pages();
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
  */

  mode: number = gv.MODE.MODE_ABM;

  isAdmin!: boolean;
  isLogged!: boolean;
  isLoaded: boolean = false;

  modeABM: number = 0;
  formGroup!: FormGroup;

  title!: string;

  candidate!: Candidate;
  candidates: Candidate[] = [];
  columns?: ColumnsABM[];

  page: number = 0;
  size: number = gv.PAGE_SIZE;
  items: Array<number> = [];
  column: string = '';
  isAscending = true;

  isFirst = false;
  isLast = false;
  totalPages: Array<number> = [];
  totalElements?: number = 0;

  id: number = 1;


  isSubmitted: boolean = false;

  loading?: boolean;


  constructor(
    private toastr: ToastrService,
    private tokenService: TokenService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public service: CandidateService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(params => {
    //   this.id = this.activatedRoute.snapshot.params['id']? this.activatedRoute.snapshot.params['id']: 0;
    //   this.buildForm();
    //   if (this.id != 0){
    //     this.initForm();
    //   }
    // });
    this.buildForm();
    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id? id: 0;
      if (this.id != 0){
        this.initForm();
        this.isLoaded = true;
      }
    });

    this.onOne();
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      isSystem: new FormControl({value:false, disabled: false}, Validators.required),
      created: new FormControl({value: null, disabled: false}, Validators.required),
      // date: new FormControl({value: formatDate(new Date(), 'yyyy-MM-dd', 'es'), disabled: false}, {validators: [Validators.required]}),
      state: new FormControl(null, Validators.required),
      firstName: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      lastName: new FormControl({value: '', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
   },);

    // this.formGroup = this.formBuilder.group({
    //   name: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    // },

    // this.formGroup = this.formBuilder.group({
    //   email: new FormControl({value: '', disabled: false}, [Validators.required, Validators.email]),
    //   telephone: new FormControl({value: '', disabled: false}, []),
    //   username: new FormControl({value: '', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validations.validateUsername]),
    //   password: new FormControl({value: '', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validations.validatePassword]),
    //   stateUser: new FormControl(this.getStatesUser(true), [Validators.required]),
    //   type: new FormControl(this.getTypes(false), [Validators.required]),
    //   sector: new FormControl(this.getSectors(false), [Validators.required ]),
    //   updPass: new FormControl({value: true, disabled: false}, []),
    //   confirmPassword: new FormControl({value: '', disabled: false},[]),
    // },
    // {
    //   validator: Validations.notMatched('password', 'confirmPassword', 'Passwords do not match.')
    // }
    //);
  }

  initForm(){
    this.setForm();
  }

  setForm(): void{
    this.isLogged = this.tokenService.isLogued();
    this.isAdmin = this.tokenService.isAdmin();

    switch (this.modeABM) {
      case gv.MODE_ABM.MODE_ABM_DETAIL:
        this.title = 'Consultar usuario';
        this.onOne();
        break;
      case gv.MODE_ABM.MODE_ABM_CREATE:
        this.title = 'Crear usuario';
        break;
      case gv.MODE_ABM.MODE_ABM_DUPLICATE:
        this.title = 'Duplicar usuario';
        this.onOne();
        break;
      case gv.MODE_ABM.MODE_ABM_UPDATE:
        this.title = 'Actualizar usuario';
        this.onOne();
        break;
      case gv.MODE_ABM.MODE_ABM_DELETE:
        this.title = 'Eliminar usuario';
        this.onOne();
        break;
      default:
        break;
    }
  }

  onOne(): void {
    this.loading = true;
    this.service.one(this.id).subscribe(
      (data: Candidate) => {
        this.candidate = data;
        this.setValues(this.candidate);
        this.loading = false;
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.loading = false;
      });
  }

  setValues(data: Candidate){

    this.formGroup.get('fullName')?.setValue(data.fullName);
    this.formGroup.get('document')?.setValue(data.document);
    this.formGroup.get('birth')?.setValue(formatDate(data.birth, 'yyyy-MM-ddThh:mm:ss.SSS', 'es', 'UTC'));
    this.formGroup.get('address')?.setValue(data.address);
    this.formGroup.get('phone')?.setValue(data.phone);
    this.formGroup.get('email')?.setValue(data.email);
  }

  pages(): void {
  }

  /**
   * Se llama al cambiar el valor en el combo.
   * @param e
   */
  changeValue(e: any) {
    this.isSubmitted = true;
    this.formGroup.get(e.target.id)?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // toggleFieldTextType() {
  //     this.fieldTextType = !this.fieldTextType;
  // }

  /**
   * Es llamado desde el form hijo.
   *
   */
   selectedIn(username: string){
    //this.addInvited(username)
   }

  modeABMIn(modeABM: number){
    this.modeABM = modeABM;
  }



  go(route: string): void {
    this.router.navigate([route]);
  }

  back(): void {
    this.location.back();
  }





  sort(): void {
    this.isAscending = !this.isAscending;
    this.pages();
  }

  first(): void {
    if (!this.isFirst) {
      this.page = 0;
      this.pages();
    }
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.pages();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.pages();
    }
  }

  last(): void {
    if (!this.isLast) {
      this.page = this.totalPages.length - 1;
      this.pages();
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.pages();
  }

  setSize(size: number): void {
    this.size = size;
    this.pages();
  }

  setColumn(column: string): void {
    this.column = column;
    this.isAscending = !this.isAscending;
    this.pages();
  }

}

