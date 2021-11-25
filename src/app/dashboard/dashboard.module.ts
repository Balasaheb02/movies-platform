import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material';

const dashboardRoutes: Routes= [
  {
    path: '',
    component: DashboardComponent,
  }
]


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
