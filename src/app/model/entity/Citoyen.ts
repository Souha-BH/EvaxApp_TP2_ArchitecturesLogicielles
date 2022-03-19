import { Vaccin } from "./Vaccin";

export class Citoyen {
  constructor(
    public numInscription: string,
    public firstName: string,
    public lastName: string,
    public cin: string,
    public birthdate: string,
    public vaccins: Vaccin[]
  ) {}
}
