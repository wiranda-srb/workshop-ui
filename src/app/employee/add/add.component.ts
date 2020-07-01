import { Component, OnInit } from '@angular/core';
import { HrQuerySpecService } from 'src/app/hr-query-spec.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private hrQuerySpec:HrQuerySpecService) { 
  }
  ngOnInit(): void {
    this.queryDepartment();
    this.queryJobTitle();
  }
  departmentDropdownList= [];
  jobTitleDropdownList=[];
  queryDepartment(){
    this.departmentDropdownList= [];
    this.hrQuerySpec.queryDepartment().subscribe(res=>{
      res.forEach(dep => {
        this.departmentDropdownList.push({label:dep.departmentName,value:dep.departmentCode});
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
}
