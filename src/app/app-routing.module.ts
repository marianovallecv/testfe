import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { GuardService as guard } from './services/guard.service';

import { LoginComponent } from './components/auth/login/login.component';
import { CandidateComponent } from './components/candidate/candidate.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},

  {path: 'candidates', component: CandidateComponent, canActivate: [guard], data: {expectedRol: ['user', 'admin']}},

  /**
   * :id: Es el parámetro que tomo desde:
   * this.id = this.activatedRoute.snapshot.params.id; en cada componente.
   */
   {path: 'candidates/:id', component: CandidateComponent, canActivate: [guard],data: {expectedRol: ['user', 'admin']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

