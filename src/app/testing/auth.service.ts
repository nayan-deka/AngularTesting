import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    isAuthenticated(): boolean {
        // Bang Bang Theory - converts null to boolean
        return !!window.localStorage.getItem('token')
    }
}