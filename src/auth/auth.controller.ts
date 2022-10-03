import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth") // auth is a global route for all the auth endpoints
export class AuthController {
    constructor(private authService: AuthService) {}
    
    // define that signup is post request and its specific route is signup, 
    // so its going to be accessed as localhost:3333/auth/signup
    @Post("signup")
    signup() {
        return this.authService.signup()
    }

    // define that login is post request and its specific route is login, 
    // so its going to be accessed as localhost:3333/auth/login
    @Post("login")
    login() {
        return this.authService.login()
    }
}