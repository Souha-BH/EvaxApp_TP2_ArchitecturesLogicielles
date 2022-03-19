import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DemandePriorisationDao } from "../../model/dao/DemandePriorisationDao";
@Component({
  selector: "app-demande-priorisation",
  templateUrl:
    "../../view/demande-priorisation/demande-priorisation.component.html",
  styleUrls: [
    "../../view/demande-priorisation/demande-priorisation.component.css",
  ],
})
export class DemandePriorisationComponent implements OnInit {
  numInscription: string = "";
  firstname: string = "";
  lastname: string = "";
  cin: string = "";
  birthdate: string = "";
  cause: string = "";
  dateDesiree: string = "";

  constructor() {}
  ngOnInit(): void {}
  addDemandePriorisation(formulaire: NgForm) {
    DemandePriorisationDao.addDemande(
      this.numInscription,
      this.firstname,
      this.lastname,
      this.cin,
      this.birthdate,
      this.cause,
      this.dateDesiree
    );
  }
}
