import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';
import { GlobalVariables as gv } from '../configuration/globals';
// Con este operador podemos optener el resultado exacto de lo que necesitamos.
import { retry, map } from 'rxjs/operators';
import { ColumnsABM} from '../model/configuration/columns';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  module: string = 'candidates';
  class: string = 'candidate';

  url = gv.CONFIGURATION.general.apiURL + '/' + this.module + '/';

  //url: string = 'http://127.0.0.1:8020/candidates/';

  constructor(private http: HttpClient) { }

  public pages(page: number, size: number, column: string, isAscending: boolean): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.url + `?page=${page}&size=${size}&column=${column}&isAscending=${isAscending}`)
    .pipe(
      retry(),
    );
  }

  public pages2(page: number, size: number, column: string, isAscending: boolean): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.url + `pages/?page=${page}&size=${size}&column=${column}&isAscending=${isAscending}`)
    .pipe(map(data => data));
    //.pipe(map(data => data[''].items));
  }


  public all(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.url + 'all')
    .pipe(
      retry(),
    );
  }

  public one(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(this.url + `${id}`)
    .pipe(
      retry(1),
    );
  }

  public oneByName(name: string): Observable<Candidate> {
    return this.http.get<Candidate>(this.url + `oneByName/${name}`)
    .pipe(
      retry(1),
    );
  }

  public oneByUsername(username: string): Observable<Candidate> {
    return this.http.get<Candidate>(this.url + `oneByUsername/${username}`)
    .pipe(
      retry(1),
    );
  }

  public oneByEmail(email: string): Observable<Candidate> {
    return this.http.get<Candidate>(this.url + `oneByEmail/${email}/`)
    .pipe(
      retry(1),
    );
  }

  public findBySelUser(selUser: string): any {
    return this.http.get<Candidate>(this.url + `findBySelUser/${selUser}/`)
    .pipe(
      retry(1),
    );
  }

  public save(user: Candidate): Observable<any> {
    return this.http.post<any>(this.url + 'save', JSON.stringify(user), gv.httpOptionsJSON)
    .pipe(
      retry(1),
    );
  }

  public update(id: number, user: Candidate): Observable<any> {
    return this.http.put<any>(this.url + 'update/' + id, JSON.stringify(user), gv.httpOptionsJSON)
    .pipe(
      retry(1),
    );
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'delete/' + id, gv.httpOptionsJSON)
    .pipe(
      retry(1),
    );
  }

  /**
   *
   * @returns Definición de columnas.
   */
  public columns(): ColumnsABM[] {
    return [

      // private Integer id;
      // private String fullName;
      // private Integer document;

      // private Date birth;
      // private String address;
      // private String phone;
      // private String email;


      {field: 'id', target: '', header: 'Id', type: 'number', format: '', class: '', iconSort: 'fas fa-sort',  icon: '', style: '', width: '20', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, title: '', mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
      {field: 'fullName', target: '', header: 'Nombre y apellido', type: 'string', format: 'capitalize', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
      {field: 'document', target: '', header: 'Documento', type: 'string', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},

      {field: 'birth', target: '', header: 'Nacimiento', type: 'date', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '35', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
      {field: 'address', target: '', header: 'Domicilio', type: 'string', format: 'capitalize', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '45', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
      {field: 'phone', target: '', header: 'Teléfono', type: 'string', format: '', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '30', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
      {field: 'email', target: '', header: 'Email', type: 'string', format: 'lowercase', class: '', iconSort: 'fas fa-sort', icon: '', style: '', width: '60', col: 'col', color: '', cursor: '', routerLink: '', isAdmin: true, isSort: true, mode: gv.MODE.MODE_ABM_DATA, modeABM: gv.MODE_ABM.MODE_NONE},
    ];
  }
}
