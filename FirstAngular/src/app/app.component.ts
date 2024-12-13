import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CustomDirectiveDirective } from './custom/custom-directive.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    // AboutComponent,
    // BlogComponent,
    RouterLink,
    RouterLinkActive,
    CustomDirectiveDirective,
  ],
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'FirstAngular';
}

// $ ng g c components/blog
// $ ng g i interfaces/IProduct
// flowbite
// prime ng