import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class StatisticsModule { }
