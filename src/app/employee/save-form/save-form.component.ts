import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HrQuerySpecService } from 'src/app/hr-query-spec.service';
import { Employee } from '../Employee';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeComponent } from '../employee.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {

  @Input()formValue:Employee;
  @Input()showEdit:Boolean;
  @Input()showAdd:Boolean;
  @Input()departmentDropdownList:any[];
  @Input()jobTitleDropdownList:any[];
  @Output()value= new EventEmitter();
  titleDropdownList=[
    {label:'MR',value:'MR'},
    {label:'MISS',value:'MISS'},
    {label:'MRS',value:'MRS'}
  ];
  constructor(private hrQuerySpec:HrQuerySpecService,private router:Router) { 
  }
  backupEmployee:any={};
  saveFormGroup = new FormGroup({
    departmentCode:new FormControl(null),
    jobTitleCode:new FormControl(null),
    gender:new FormControl(null),
    title:new FormControl(null),
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    address:new FormControl(null)
  });
  ngOnInit(): void {
    this.checkAddOrEdit();
  }
  checkAddOrEdit(){
    if(this.hrQuerySpec.employeeId){
      this.backupEmployee ={
        ...this.formValue,
        departmentCode:this.formValue.department.departmentCode,
        jobTitleCode:this.formValue.jobTitle.jobTitleCode
      };
      this.saveFormGroup.patchValue(this.backupEmployee);
    }
  }
  checkValueTest(){
    console.log("checkValue",this.saveFormGroup.value);
  }
  clearEmployeeEdit(){
    this.saveFormGroup.patchValue(this.backupEmployee);
  }
  clearEmployeeAdd(){
    this.saveFormGroup.reset();
  }
  backToSearch(){
    this.showEdit=false;
    this.showAdd=false;
    this.backupEmployee={};
    this.saveFormGroup.reset();
  }
  queryUpdateEmployee(){
    const employee:Employee={
      ...this.saveFormGroup.value,
      employeeId:this.hrQuerySpec.employeeId,
      department:{departmentCode:this.saveFormGroup.get('departmentCode').value},
      jobTitle:{jobTitleCode:this.saveFormGroup.get('jobTitleCode').value}
    };
    console.log("test",employee);
    this.hrQuerySpec.updateEmployee(employee).subscribe(res=>{
      this.backToSearch();
      const url='';
      this.router.navigateByUrl(url);
    });
    ;
  }
  queryInsertEmployee(){
    const employee:Employee={
      ...this.saveFormGroup.value,
      employeeId:this.hrQuerySpec.employeeId,
      department:{departmentCode:this.saveFormGroup.get('departmentCode').value},
      jobTitle:{jobTitleCode:this.saveFormGroup.get('jobTitleCode').value}
    };
    console.log("test",employee);
    this.hrQuerySpec.insertEmployee(employee).subscribe(res=>{
      this.backToSearch();
      const url='';
      this.router.navigateByUrl(url);
    });
    ;
  }

}
