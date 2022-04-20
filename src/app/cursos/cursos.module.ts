import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
    
  ],
  imports: [
   AppRoutingModule,
   CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
   //CursosService
  ],
  
})
export class CursosModule { }
