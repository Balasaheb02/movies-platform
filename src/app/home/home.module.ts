import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatButtonModule} from '@angular/material/button';

const homeRoutes: Routes= [
  {
    path: '',
    component: HomeComponent,
  }
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
