import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {TableModule} from 'primeng/table';
import { JotTitlePipe } from './jot-title.pipe';
import { GenderPipe } from './gender.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AddComponent } from './add/add.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { EditComponent } from './edit/edit.component';
import { SaveFormComponent } from './save-form/save-form.component';
import { SearchFormComponent } from './search-form/search-form.component';


@NgModule({
  declarations: [EmployeeComponent, JotTitlePipe, GenderPipe, AddComponent, EditComponent, SaveFormComponent, SearchFormComponent],
  imports: [
    CommonModule,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    HttpClientModule,
    InputTextareaModule
  ],
  exports:[EmployeeComponent, JotTitlePipe, GenderPipe, AddComponent, EditComponent, SaveFormComponent, SearchFormComponent]
})
export class EmployeeModule { }
