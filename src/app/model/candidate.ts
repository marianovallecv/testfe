export class Candidate {
  id?: number;
  fullName?: string;
  document!: number;
  birth!: Date;
  address?: string;
  phone?: string;
  email: string;

  constructor(  fullName: string, document: number, birth: Date, address: string, phone: string, email: string) {
    this.fullName = fullName;
    this.document = document;
    this.birth = birth;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

}
