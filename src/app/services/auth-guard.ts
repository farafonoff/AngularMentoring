import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            return this.authService.isAuthenticated().do((result) => {
                console.log('auth result ', result);
                if (!result) {
                    this.router.navigate(['login', { back: state.url }]);
                }
            });
    }
}
