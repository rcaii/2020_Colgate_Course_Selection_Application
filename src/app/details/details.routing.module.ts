import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Details } from "./details.page";

const routes: Routes = [
  {
    path: "",
    component: Details,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
