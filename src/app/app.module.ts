import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PassVaccinalComponent } from "./view-model/pass-vaccinal/pass-vaccinal.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DemandePriorisationComponent } from "./view-model/demande-priorisation/demande-priorisation.component";

@NgModule({
  declarations: [
    AppComponent,
    PassVaccinalComponent,
    DemandePriorisationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
