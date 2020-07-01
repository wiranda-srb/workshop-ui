import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { EditComponent } from './employee/edit/edit.component';


const routes: Routes = [
  //{path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'',component:EmployeeComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
