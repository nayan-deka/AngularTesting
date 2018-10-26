import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

// @Component({
//     selector: "app-auth",
//     template: `
//     `
// })
export class LoginComponent {
    constructor(public authService: AuthService) {
    }

    needsLogin(): boolean {
        return this.authService.isAuthenticated()
    }
}