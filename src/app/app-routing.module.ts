import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PassCovidComponent } from "./view-model/pass-covid/pass-covid.component";

const routes: Routes = [{ path: "pass", component: PassCovidComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
