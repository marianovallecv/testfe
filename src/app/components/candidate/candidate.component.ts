import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate, Location } from '@angular/common';

import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../model/candidate';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';
import { ColumnsABM } from '../../model/configuration/columns';
import { GlobalVariables as gv } from '../../configuration/globals';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  mode: number = gv.MODE.MODE_ABM;

  isAdmin!: boolean;
  isLogged!: boolean;
  isLoaded: boolean = false;

  modeABM: number = 0;
  formGroup!: FormGroup;

  title!: string;
  colorConfirm!: string;

  searchText!: string;

  candidate!: Candidate;
  candidates: any[] = [];
  columns: ColumnsABM[]=[];

  page: number = 0;
  size: number = 10;
  items: Array<number> = [];
  column: string = '';
  isAscending = true;

  isFirst = false;
  isLast = false;
  totalPages: Array<number> = [];
  totalElements?: number = 0;
  footer!: string;

  id!: number;

  isSubmitted: boolean = false;

  loading?: boolean;

  constructor(
    private toastr: ToastrService,
    private token: TokenService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public service: CandidateService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.columns = this.service.columns();

    this.buildForm();
    this.route.params.subscribe(({ id }) => {
      this.id = id? id: 0;
      if (this.id != 0){
        this.isLoaded = true;
      }
    });

    this.page = 0;
    this.column = 'fullName';

    this.isAdmin = this.token.isAdmin();
    this.items = [5, 10];

    this.pages();
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      searchText: new FormControl({value: '', disabled: false}, []),
      size: new FormControl({value: this.size, disabled: false}, []),

      fullName: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      document: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      birth: new FormControl({value:'', disabled: false}, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      address: new FormControl({value: null, disabled: false}, Validators.required),
      phone: new FormControl({value: null, disabled: false}, Validators.required),
      email: new FormControl({value: null, disabled: false}, Validators.required),
   },);
  }

  one(modeABM: number): void {
    this.modeABM = modeABM;
    this.setForm();
    this.loading = true;
    if(!this.id) return;
    this.service.one(this.id).subscribe(
      (data: any) => {
        this.setValues(data);
        this.loading = false;
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'});
        this.loading = false;
      });
  }

  setForm(){
    switch (this.modeABM) {
      case gv.MODE_ABM.MODE_ABM_DETAIL:
        this.colorConfirm = 'success'
        this.title = 'Consultar candidato';
        break;
      case gv.MODE_ABM.MODE_ABM_CREATE:
        this.colorConfirm = 'success'
        this.title = 'Crear candidato';
        break;
      case gv.MODE_ABM.MODE_ABM_UPDATE:
        this.colorConfirm = 'warning'
        this.title = 'Actualizar candidato';
        break;
      case gv.MODE_ABM.MODE_ABM_DELETE:
        this.colorConfirm = 'danger'
        this.title = 'Eliminar candidato';
        break;
      default:
        break;
    }
  }

  setValues(data: Candidate){
    this.candidate = data;
    this.formGroup.get('fullName')?.setValue(data.fullName);
    this.formGroup.get('document')?.setValue(data.document);
    this.formGroup.get('birth')?.setValue(formatDate(data.birth, 'yyyy-MM-dd', 'es', 'UTC'));
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
        this.footer = `${this.totalElements} registros`;

        this.loading = false;
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'});
        this.loading = false;
      }
    );
  }

  delete(): void {
    //if(!this.isSelect(this.id)) return;
    this.loading = true;
    this.service.delete(this.id).subscribe(
      (result: any) => {
        this.toastr.success('Candidato Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'});
        this.pages();
        this.loading = false;
      },
      error => {
        this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'});
        this.loading = false;
      }
    );
  }

  update(): void {
   // if(!this.isSelect(this.id)) return;
    this.loading = true;
    this.service.update(this.id, this.candidate).subscribe(
        (data: Candidate) => {
          this.toastr.success('Candidato Actualizado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'});
          this.pages();
          this.loading = false;
        },
        error => {
          this.toastr.error(error.message + ' - ' + error.error.message, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center'});
          this.loading = false;
        }
      );
  }

  onSubmit(){
    switch (this.modeABM) {
      case gv.MODE_ABM.MODE_ABM_CREATE:
        break;
      case gv.MODE_ABM.MODE_ABM_UPDATE:
        //if(window.confirm('¿Seguro desea actualizar los datos?')){
          this.update();
        //}
        break;
      case gv.MODE_ABM.MODE_ABM_DELETE:
        //if(window.confirm('¿Seguro desea eliminar los datos?')){
          this.delete();
        //}
        break;
      default:
        break;
    }
  }

  isSelect(id: number): boolean{
    let value: boolean = false;
    if (!this.id){
      this.toastr.warning('Por favor seleccione un candidato', 'Warning', {
        timeOut: 3000, positionClass: 'toast-top-center'});
    }

    return value;
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

