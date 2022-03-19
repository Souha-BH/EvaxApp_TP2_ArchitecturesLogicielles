import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PassCovidComponent } from "./view-model/pass-covid/pass-covid.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, PassCovidComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
