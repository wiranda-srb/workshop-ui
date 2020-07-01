import { Component, OnInit } from '@angular/core';
import { HrQuerySpecService } from 'src/app/hr-query-spec.service';
import { ActivatedRoute } from '@angular/router'
import { Employee } from '../Employee';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private hrQuerySpec:HrQuerySpecService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.queryDepartment();
    this.queryJobTitle();
    this.queryEmployeeAndSkill();
  }
  departmentDropdownList= [];
  jobTitleDropdownList=[];
  employeeInfo:any;
  showForm=false;
  titleDropdownList=[
    {label:'MR',value:'MR'},
    {label:'MISS',value:'MISS'},
    {label:'MRS',value:'MRS'}

  ];
  queryEmployeeAndSkill(){
    this.hrQuerySpec.queryEmployeeAndSkill().subscribe(res=>{
      this.employeeInfo=res;
      this.showForm=true;
    });
  }
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
