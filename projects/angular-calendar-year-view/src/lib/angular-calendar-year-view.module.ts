import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { AngularCalendarYearViewComponent } from './angular-calendar-year-view.component';
import { PopoverModule } from 'ngx-bootstrap/popover'
import { CommonModule, registerLocaleData } from '@angular/common';
import localeko from '@angular/common/locales/ko';
registerLocaleData(localeko);

@NgModule({
  declarations: [
    AngularCalendarYearViewComponent
  ],
  imports: [
    CommonModule,
    PopoverModule
  ],
  exports: [
    AngularCalendarYearViewComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US'},
  ]
})
export class AngularCalendarYearViewModule { 
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularCalendarYearViewModule,
      providers: [
        PopoverModule.forRoot().providers
      ]
    }
  }
}
