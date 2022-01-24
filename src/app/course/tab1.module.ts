import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { Tab1PageRoutingModule } from "./tab1-routing.module";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

import { HTTP } from "@ionic-native/http/ngx";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgZorroAntdMobileModule,
  ],
  providers: [HTTP],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
