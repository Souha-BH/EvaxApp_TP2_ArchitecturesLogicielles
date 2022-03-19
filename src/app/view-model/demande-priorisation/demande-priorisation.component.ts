import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-demande-priorisation",
  templateUrl:
    "../../view/demande-priorisation/demande-priorisation.component.html",
  styleUrls: [
    "../../view/demande-priorisation/demande-priorisation.component.css",
  ],
})
export class DemandePriorisationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  addDemandePriorisation(formulaire: NgForm) {
    console.log(formulaire);
  }
}
