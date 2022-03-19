import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PassVaccinalComponent } from "./view-model/pass-vaccinal/pass-vaccinal.component";

const routes: Routes = [{ path: "pass", component: PassVaccinalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
