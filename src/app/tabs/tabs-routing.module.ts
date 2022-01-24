import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../course/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../wishlist/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "details/:termCode/:crn",
        loadChildren: () =>
          import("../details/details.module").then((m) => m.DetailsModule),
      },
    ],
  },
  // {
  //   path: "login",
  //   loadChildren: () =>
  //     import("../login/tab4.module").then((m) => m.LoginPageModule),
  // },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
