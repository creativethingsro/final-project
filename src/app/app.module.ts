import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    ContactComponent,
    AboutUsComponent,
    HomeComponent,
    TermsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
