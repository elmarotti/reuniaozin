import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
import { CadastroPage } from '../pages/cadastro/cadastro';
=======
import { LoginPage } from '../pages/login/login';
>>>>>>> 743cf3e60255c1d6443f61b51e1b3a001ef9e712

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    CadastroPage
=======
    LoginPage
>>>>>>> 743cf3e60255c1d6443f61b51e1b3a001ef9e712
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
<<<<<<< HEAD
    CadastroPage
=======
    LoginPage
>>>>>>> 743cf3e60255c1d6443f61b51e1b3a001ef9e712
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
