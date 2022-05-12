import { Company } from "./company";
import { Profession } from "./profession";

export class Employee {
    id: number;
    name: string;
    lastName: string;
    birthday: Date;
    email: string;
    phone: number;
    login: string;
    pwd: string;
    gender: string;
    role: string;
    image: string;
    profession: Profession;
    company: Company;

    constructor(id: number, name: string, lastName: string, birthday: Date
        , email: string, phone: number, login: string, pwd: string, gender: string, role: string, image: string, profession: Profession, company: Company) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        this.login = login;
        this.pwd = pwd;
        this.gender = gender;
        this.role = role;
        this.image = image;
        this.profession = profession;
        this.company = company;
      }
}
