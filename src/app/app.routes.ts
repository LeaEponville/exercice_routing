import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: "home/:id", component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: "about/:id", component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: "contact/:id", component: ContactComponent },
    { path: "**", component: NotFoundComponent },
];


