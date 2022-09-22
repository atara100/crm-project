import { Injectable } from "@angular/core";
import { CanActivate, Route, Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class IfCanOpenLogin implements CanActivate {
  constructor(private userService:UserService,private route:Router) {}


  canActivate(): boolean{
    if(this.userService.isLoggedIn()){
      this.route.navigate(['/dashboard'])
    }
    return !this.userService.isLoggedIn();
  }
}