import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/User';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthService ,private loginService: LoginService) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        var user = this.parseGoogleSocialResponse(userData);
        this.loginService.requestLoginIn(user).subscribe(res => {
          console.log(res);
        }
        );

//        this.loginService(use)
            
      }
    );
  }

  parseGoogleSocialResponse(userData){
    let  user: User = new User();
    user.$name = userData.name;
    user.$email =userData.email;
    user.$profileImgPath = userData.image;
    user.$provider = 'google';
    user.$userName = userData.email;

    return user;
  
  }

  ngOnInit() {
  }

}
