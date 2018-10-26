import { UserInfo } from "./userinfo";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    CheckUser(user: UserInfo):boolean {
        if(user.userName == 'nayan' && user.password == 'hi')
            return true
        else return false
    }
}