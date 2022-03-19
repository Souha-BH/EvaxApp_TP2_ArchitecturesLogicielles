import { Citoyen } from "../entity/Citoyen";
import { DemandePriorisation } from "../entity/DemandePriorisation";

export class DemandePriorisationDao {
  private static demandes: DemandePriorisation[] = [];

  public static addDemande(
    numInscription: string,
    firstname: string,
    lastname: string,
    cin: string,
    birthdate: string,
    cause: string,
    dateDesiree: string
  ) {
    this.demandes.push(
      new DemandePriorisation(
        numInscription,
        firstname,
        lastname,
        cin,
        birthdate,
        cause,
        dateDesiree
      )
    );
  }
}
