import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PassVaccinalComponent } from "./view-model/pass-vaccinal/pass-vaccinal.component";
import { DemandePriorisationComponent } from "./view-model/demande-priorisation/demande-priorisation.component";

const routes: Routes = [
  { path: "pass", component: PassVaccinalComponent },
  { path: "addDemande", component: DemandePriorisationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
