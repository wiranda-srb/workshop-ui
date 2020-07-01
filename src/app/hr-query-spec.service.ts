import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Department, JobTitle, Condition, Employee } from './employee/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrQuerySpecService {

  constructor(private http:HttpClient) { }

  employeeId:string=null;
  queryDepartment():Observable<Department[]>{
    return this.http.get<Department[]>('/workshop-api/api/department');
  }


  queryJobTitle():Observable<JobTitle[]>{
    return this.http.get<JobTitle[]>('/workshop-api/api/jobTitle');
  }

  queryEmployeeByCondition(condition?:Condition):Observable<Employee[]>{
    if(!condition){
      condition = {} as any;
    }
    let httpParam = new HttpParams();
    for(const item of Object.entries(condition)){
      if(item[1]){
        httpParam =httpParam.set(item[0],item[1]);
      }
    }
    return this.http.get<Employee[]>('/workshop-api/api/employee/queryEmployeeByCondition',{params:httpParam});
  }
  queryEmployeeAndSkill():Observable<Employee>{
    let httpParam = new HttpParams();
    httpParam =httpParam.set('employeeId',this.employeeId);
    return this.http.get<Employee>('/workshop-api/api/employee/queryEmployeeAndSkillById',{params:httpParam});
  }
  updateEmployee(employee:Employee):Observable<any>{
    return this.http.put<any>('/workshop-api/api/employee',employee);
  }
  insertEmployee(employee:Employee):Observable<any>{
    return this.http.post<any>('/workshop-api/api/employee',employee);

  }
  deleteEmployee(employeeId:string):Observable<any>{
    let httpParam = new HttpParams();
    httpParam =httpParam.set('employeeId',employeeId);
    return this.http.delete<any>('/workshop-api/api/employee',{params:httpParam});
  }

}
