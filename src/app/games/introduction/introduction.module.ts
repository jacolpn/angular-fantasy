import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from 'src/app/app-routing.module';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { IntroductionComponent } from './introduction.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ReloadedComponent } from '../reloaded/reloaded.component';
import { RevolutionsComponent } from '../revolutions/revolutions.component';
import { ResurrectionsComponent } from '../resurrections/resurrections.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    IntroductionComponent,
    ReloadedComponent,
    RevolutionsComponent,
    ResurrectionsComponent
  ],
  exports: [
    IntroductionComponent,
    ReloadedComponent,
    RevolutionsComponent,
    ResurrectionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroductionModule { }
