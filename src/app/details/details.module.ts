import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Details } from "./details.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { DetailsRoutingModule } from "./details.routing.module";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

import { HTTP } from "@ionic-native/http/ngx";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DetailsRoutingModule,
    NgZorroAntdMobileModule,
  ],
  providers: [HTTP],
  declarations: [Details],
})
export class DetailsModule {}
