import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authenticationService:AuthenticationService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    const expectedRole = next.data.expectedRole;
    console.log(expectedRole);
    if (
      this.authenticationService.isGuest() || 
      !this.authenticationService.getRoles().includes(expectedRole)
    ) {
      if(this.authenticationService.isGuest()){
        this.router.navigateByUrl('/login');
        return false;
      }else{
        this.router.navigateByUrl('/home');
        return false;
      }
    }
    return true;
  }
  
}
