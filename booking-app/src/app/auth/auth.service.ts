import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authenticated = true;

  get authenticated() {
    return this._authenticated;
  }

  constructor() { }

  login() {
    this._authenticated = true;
  }

  logout() {
    this._authenticated = false;
  }
}
