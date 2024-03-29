import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Can load - used for lazing loading - it wont let the module get loaded if the user can't enter it
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.authenticated) {
      this.router.navigateByUrl('/auth');
    }
    return true;
  }
}
