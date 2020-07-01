import { Component, Query } from '@angular/core';
import { HrQuerySpecService } from './hr-query-spec.service';
import { Employee, Condition } from './employee/Employee';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  title = 'workshop-ui';

}
