import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengTableComponent } from './components/primeng-table/primeng-table.component';

const routes: Routes = [
  { path: 'primeng-table', component: PrimengTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
