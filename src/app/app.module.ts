import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeTouristComponent } from './home-tourist/home-tourist.component';
import { ChooseComponent } from './choose/choose.component';
import { MyTripComponent } from './my-trip/my-trip.component';
import { ReviewRequstComponent } from './review-requst/review-requst.component';
import { ProfileGuideComponent } from './profile-guide/profile-guide.component';
import { ClientRquestComponent } from './client-rquest/client-rquest.component';
import { ReviewClientRequstComponent } from './review-client-requst/review-client-requst.component';
import { SubmentOfferComponent } from './subment-offer/subment-offer.component';
import { VerificationComponent } from './verification/verification.component';


import { RouterModule, Routes } from '@angular/router';
import { NewIndexComponent } from './new-index/new-index.component';

import { HttpClientModule } from '@angular/common/http';

const router: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'Verify', component: VerificationComponent },
  { path: 'home', component: HomeTouristComponent },
  { path: 'history', component: MyTripComponent },
  { path: 'result', component: ChooseComponent },
  { path: 'revenue-request', component: ReviewRequstComponent },
  { path: 'guide-profile', component: ProfileGuideComponent },
  { path: 'client-review', component: ReviewClientRequstComponent },
  { path: 'submit-offer', component: SubmentOfferComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomeTouristComponent,
    ChooseComponent,
    MyTripComponent,
    ReviewRequstComponent,
    ProfileGuideComponent,
    ClientRquestComponent,
    ReviewClientRequstComponent,
    SubmentOfferComponent,
    VerificationComponent,
    NewIndexComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatTreeModule,
    RouterModule.forRoot(router)
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
