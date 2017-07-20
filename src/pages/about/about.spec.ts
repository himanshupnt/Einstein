// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { User, Auth } from '@ionic/cloud-angular';
//
//
// //Firebase backend
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
//
// import { AboutPage } from './about';
// import {
//   PlatformMock,
//   StatusBarMock,
//   SplashScreenMock,
//   NavControllerMock,
//   NavParamsMock,
//   UserMock,
//   AuthMock,
//   AngularFireDatabaseMock,
//   FirebaseListObservableMock,
//   AngularFireAuthMock,
//   FirebaseAppMock
// } from '../../../test-config/mocks-ionic';
//
// describe('AboutPage Component', () => {
//   let fixture;
//   let componentAboutPage: AboutPage;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AboutPage],
//       imports: [
//         IonicModule.forRoot(AboutPage)
//       ],
//       providers: [
//         { provide: StatusBar, useClass: StatusBarMock },
//         { provide: SplashScreen, useClass: SplashScreenMock },
//         { provide: Platform, useClass: PlatformMock },
//         { provide: NavController, useClass: NavControllerMock },
//         { provide: NavParams, useClass: NavParamsMock},
//         { provide: User, useClass: UserMock},
//         { provide: Auth, useClass: AuthMock},
//         { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock },
//         { provide: FirebaseListObservable, useClass: FirebaseListObservableMock},
//         { provide: AngularFireAuth, useClass: AngularFireAuthMock },
//         { provide: firebase, useClass: FirebaseAppMock }
//       ]
//     })
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutPage);
//     componentAboutPage = fixture.componentInstance;
//   });
//
//   it('should be sane', () => {
//     expect(true).toBe(true);
//   });
//
//   it('should be created', () => {
//     expect(componentAboutPage instanceof AboutPage).toBe(true);
//   });
//
// });