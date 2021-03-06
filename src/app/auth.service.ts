import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean = false;

  constructor() {}

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(this.isAuth);
    });
  }
}
