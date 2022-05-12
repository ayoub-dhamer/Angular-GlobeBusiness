import { Employee } from "./employee";
import { Event } from "./event";

export class Favorite {
    favoriteId: number;
    employee: Employee;
    event: Event;
    
    constructor(favoriteId: number, event: Event, employee: Employee) {
        this.favoriteId = favoriteId;
        this.event = event;
        this.employee = employee;
      }
}
