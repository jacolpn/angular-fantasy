import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StatusLevelComponent } from './status-level/status-level.component';
import { routes } from 'src/app/app-routing.module';
import { BoxHelpComponent } from './box-help/box-help.component';

@NgModule({
  declarations: [
    StatusLevelComponent,
    BoxHelpComponent
  ],
  exports: [
    StatusLevelComponent,
    BoxHelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule { }
