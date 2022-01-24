import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LoginPageRoutingModule } from './tab4-routing.module'
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    LoginPageRoutingModule,
    NgZorroAntdMobileModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
