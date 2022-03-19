import { Citoyen } from "../entity/Citoyen";
import { Vaccin } from "../entity/Vaccin";

export class CitoyenDao {
  private static users: Citoyen[] = [
    new Citoyen("102244254", "Souha", "Ben Hassine", "13489254", "10/07/1999", [
      new Vaccin("J&J", "01/06/2021"),
      new Vaccin("Pfizer", "01/01/2022"),
    ]),
    new Citoyen("1800466", "Cyrine", "Zaouali", "07499875", "30/08/1999", [
      new Vaccin("J&J", "01/06/2021"),
      new Vaccin("Pfizer", "01/01/2022"),
    ]),
  ];

  public static getUserByNumInscription(
    numInscription: string
  ): Citoyen | undefined {
    return CitoyenDao.users.find(
      (citoyen) => citoyen.numInscription == numInscription
    );
  }
}
