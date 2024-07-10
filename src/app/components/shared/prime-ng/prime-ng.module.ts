import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule }
    from "@angular/platform-browser/animations";
import { PaginatorModule } from "primeng/paginator";
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    PaginatorModule,
    ConfirmPopupModule,
    ToastModule,
    CalendarModule,
    RadioButtonModule

  ],
  exports:[
    ButtonModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    PaginatorModule,
    ConfirmPopupModule,
    ToastModule,
    CalendarModule,
    RadioButtonModule

  ],
})
export class PrimeNGModule { }
