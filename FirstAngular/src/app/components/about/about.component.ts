import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'about-selector',
  standalone: true,
  imports: [],
  templateUrl: './about.component.htm',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  title = 'AboutComponent';
}
