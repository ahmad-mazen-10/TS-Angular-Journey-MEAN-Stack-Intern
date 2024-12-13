import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AnimalsComponent } from '../components/animals/animals.component';
import { FoodComponent } from '../components/food/food.component';
import { FlowersComponent } from '../components/flowers/flowers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent,
    children: [
      { path: 'animals', component: AnimalsComponent },
      { path: 'food', component: FoodComponent },
      { path: 'flowers', component: FlowersComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
