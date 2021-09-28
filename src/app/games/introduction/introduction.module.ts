import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    IntroductionComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroductionModule { }
