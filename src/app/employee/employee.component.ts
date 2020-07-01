import { Component, OnInit, Input } from '@angular/core';
import { HrQuerySpecService } from '../hr-query-spec.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private hrQuerySpec:HrQuerySpecService,private router : Router) {

   }
  ngOnInit(): void {
  }

  employeeList:any[]=[];
  setEvent($event){
    this.employeeList=$event;
  }
  editEmployee(employeeId:string){
    this.hrQuerySpec.employeeId=employeeId;
  }
  deleteEmployee(employeeId:string){
    this.hrQuerySpec.deleteEmployee(employeeId).subscribe(res=>{
      // const index =this.employeeList.findIndex(emp=>{
      //   return emp.employeeId === employeeId;
      // })
      const index =this.employeeList.indexOf(employeeId);
      this.employeeList.splice(index,1);
    });
  }
  test(employeeId:string){
    console.log("test",employeeId);
  }
}
