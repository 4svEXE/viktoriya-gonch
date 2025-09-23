import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutYearCalendarComponent } from './about-year-calendar/about-year-calendar.component';
import { DownloadYearCalendarComponent } from './download-year-calendar/download-year-calendar.component';

const routes: Routes = [
  { path: '', component: AboutYearCalendarComponent },
  { path: 'download', component: DownloadYearCalendarComponent }
];

@NgModule({
  declarations: [AboutYearCalendarComponent, DownloadYearCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutYearCalendarModule { }
