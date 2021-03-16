import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FhiDatepickerComponent } from './fhi-datepicker.component';



@NgModule({
  declarations: [FhiDatepickerComponent],
  exports: [FhiDatepickerComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class FhiDatepickerModule { }
