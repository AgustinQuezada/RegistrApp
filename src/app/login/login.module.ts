import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IonicModule } from '@ionic/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
