import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PropertiesComponent } from "./properties/properties.component";
import { PropertyDetailsComponent } from "./property-details/property-details.component";
import { TermsComponent } from "./terms/terms.component";

const routes: Routes = [
    {
        path:'properties', 
        component: PropertiesComponent,
    },
    {
        path: 'properties/:propertyId',
        component: PropertyDetailsComponent,
    },
    {
        path:'contact',
        component: ContactComponent,
    },
    {
        path: 'aboutus',
        component: AboutUsComponent,
    },
    {
        path: 'terms',
        component: TermsComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}