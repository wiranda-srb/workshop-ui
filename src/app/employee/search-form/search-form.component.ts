import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HrQuerySpecService } from 'src/app/hr-query-spec.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../Employee';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

 @Output()value= new EventEmitter<Employee[]>();

  constructor(private hrQuerySpec:HrQuerySpecService) { }
  departmentDropdownList= [];
  jobTitleDropdownList=[];
  ngOnInit(): void {
    this.queryDepartment();
    this.queryJobTitle();
  }
  queryDepartment(){
    this.departmentDropdownList= [];
  
      this.hrQuerySpec.queryDepartment().subscribe(res=>{
        res.forEach(dep => {
          this.departmentDropdownList.push({'label':dep.departmentName,'value':dep.departmentCode})
        });
      });
    }
  
    queryJobTitle(){
      this.jobTitleDropdownList=[];
      this.hrQuerySpec.queryJobTitle().subscribe(res=>{
        res.forEach(jobTitle=>{
          this.jobTitleDropdownList.push({'label':jobTitle.jobTitleName,'value':jobTitle.jobTitleCode});
        });
      });
    }
    searchConditionFormGourp = new FormGroup({
      departmentCode:new FormControl(null),
      jobTitleCode:new FormControl(null),
      jobType:new FormControl(null),
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      gender:new FormControl(null)
    });
  
  
      queryEmployeeByCondition(){
      const condition = this.searchConditionFormGourp.getRawValue();
      this.hrQuerySpec.queryEmployeeByCondition(condition).subscribe(res=>{
        this.value.emit(res);
      });
    }
    clearEmployeeCondion(){
      this.searchConditionFormGourp.reset();
      this.value.emit();
    }
    add(){
      this.hrQuerySpec.employeeId=null;
    }
}
