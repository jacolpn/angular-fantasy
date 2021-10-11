import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StatusLevelComponent } from './status-level/status-level.component';
import { routes } from 'src/app/app-routing.module';
import { BoxHelpComponent } from './box-help/box-help.component';
import { BoxCongratsComponent } from './box-congrats/box-congrats.component';
import { BoxFontComponent } from './box-font/box-font.component';

@NgModule({
  declarations: [
    StatusLevelComponent,
    BoxHelpComponent,
    BoxCongratsComponent,
    BoxFontComponent
  ],
  exports: [
    StatusLevelComponent,
    BoxHelpComponent,
    BoxCongratsComponent,
    BoxFontComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule { }
