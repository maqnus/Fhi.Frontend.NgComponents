import { NgModule } from '@angular/core';
import { NgComponentsComponent } from './ng-components.component';
import { FhiTabBarComponent } from './fhi-tab-bar/fhi-tab-bar.component';
import { FhiMainMenuComponent } from './fhi-main-menu/fhi-main-menu.component';
import { FhiDatepickerComponent } from './fhi-datepicker/fhi-datepicker.component';



@NgModule({
  declarations: [NgComponentsComponent, FhiTabBarComponent, FhiMainMenuComponent, FhiDatepickerComponent],
  imports: [
  ],
  exports: [NgComponentsComponent]
})
export class NgComponentsModule { }
