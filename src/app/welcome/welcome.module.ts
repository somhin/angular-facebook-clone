import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [WelcomeComponent, LoginComponent, RegisterComponent],
})
export class WelcomeModule {}
