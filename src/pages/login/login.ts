import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TabsPage} from "../tabs/tabs";
import {regexValidators} from "../../app/validator";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.credentialsForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.pattern(regexValidators.password),
        Validators.required
      ])]
    });
  }

  onSignIn() {
    //this.logger.info('SignInPage: onSignIn()');
    this.navCtrl.push(TabsPage);
  }

  onForgotPassword() {
    //this.logger.info('SignInPage: onForgotPassword()');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
