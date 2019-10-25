import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    this.loadingCtrl.create({keyboardClose: true, message: 'logging in....'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/search');
      }, 1500);
    });
  }

  submit(form: NgForm) {
    console.log(form);
  }

  switchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
