import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuth: boolean = false;
  authenticatedChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isAuth = false;
    this.authenticatedChange.next(false);
  }

  public login(email: string, password: string) {
    console.log(email);
    console.log(password);
    this.isAuth = true;
    this.authenticatedChange.next(true);
  }

  public isAuthenticated() {
    return this.isAuth;
  }
}
