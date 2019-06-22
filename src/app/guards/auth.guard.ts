import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PRIVATE_KEY} from '../app.constants';
import {Web3Service} from '../services/web3.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private web3Service: Web3Service) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const privateKey = localStorage.getItem('PRIVATE_KEY');
        return this.web3Service.createAccount()
            .then(() => {
                if (!privateKey) {
                    this.router.navigate(['connect']);
                    return false;
                }
                return !!privateKey;
            });
    }
}
