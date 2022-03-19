import { Component, OnInit } from "@angular/core";
import { Citoyen } from "../../model/entity/Citoyen";
import { CitoyenDao } from "../../model/dao/CitoyenDao";

@Component({
  selector: "app-pass-vaccinal",
  templateUrl: "../../view/pass-vaccinal/pass-vaccinal.component.html",
  styleUrls: ["../../view/pass-vaccinal/pass-vaccinal.component.css"],
})
export class PassVaccinalComponent implements OnInit {
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
