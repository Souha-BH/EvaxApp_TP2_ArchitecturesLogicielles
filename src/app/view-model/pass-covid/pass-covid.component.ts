import { Component, OnInit } from "@angular/core";
import { Citoyen } from "../../model/entity/Citoyen";
import { CitoyenDao } from "../../model/dao/CitoyenDao";

@Component({
  selector: "app-pass-covid",
  templateUrl: "../../view/pass-covid/pass-covid.component.html",
  styleUrls: ["../../view/pass-covid/pass-covid.component.css"],
})
export class PassCovidComponent implements OnInit {
  citoyen: Citoyen | undefined;
  numInscription: string = "";

  constructor() {
    this.citoyen = undefined;
  }

  ngOnInit(): void {}

  updateCitoyen() {
    this.citoyen = CitoyenDao.getUserByNumInscription(this.numInscription);
  }
}
