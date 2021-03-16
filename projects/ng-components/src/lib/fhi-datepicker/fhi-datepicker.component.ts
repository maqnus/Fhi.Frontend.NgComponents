import { Component, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-fhi-datepicker',
  templateUrl: './fhi-datepicker.component.html',
  styleUrls: ['./fhi-datepicker.component.scss']
})
export class FhiDatepickerComponent {

  @Input() id!: string;
  @Input() icon!: any;
  @Input() navigation: 'arrow' | 'select' | 'none' = 'select';
  @Input() outsideDays: 'visible' | 'hidden' | 'collapsed' = 'visible';
  @Input() minDate: NgbDateStruct = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() - 2,
    day: new Date().getDate()
  };
  @Input() maxDate: NgbDateStruct = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 2,
    day: new Date().getDate()
  };
}
