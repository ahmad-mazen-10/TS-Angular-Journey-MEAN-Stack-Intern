import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { RecomDataComponent } from "../recom-data/recom-data.component";
import { IProduct } from "../../interfaces/iproduct";

@Component({
  selector: 'home-selector',
  standalone: true,
  imports: [CommonModule, NgIf, RecomDataComponent],
  templateUrl: './home.component.htm',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'HomeComponent';
  isTrue: boolean = true;
  link: string = '../../../assets/imgs/myLogo2(1).png';
  name: string = 'helal';

  sayHello(): void {
    console.log('clicked done');
  }

  keydown(e: KeyboardEvent): void {
    console.log('keydown done');
    console.log(e.ctrlKey);
  }

  products: IProduct[] = [
    {
      name: 'iphone',
      price: 30000,
      onSale: false,
      imgSrc:
        './assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp',
      reviews: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.'],
    },
    {
      name: 'samsung',
      price: 25000,
      onSale: false,
      imgSrc: './assets/imgs/gratisography-cool-cat-800x525.jpg',
    },
    {
      name: 'oppo',
      price: 12000,
      onSale: false,
      imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg',
    },
    {
      name: 'honor',
      price: 5000,
      onSale: true,
      imgSrc: './assets/imgs/image.png',
    },
    {
      name: 'iphone',
      price: 30000,
      onSale: false,
      imgSrc:'./assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp',
      reviews: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.'],
    },
    {
      name: 'samsung',
      price: 25000,
      onSale: false,
      imgSrc: './assets/imgs/gratisography-cool-cat-800x525.jpg',
    },
    {
      name: 'oppo',
      price: 12000,
      onSale: false,
      imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg',
    },
    {
      name: 'honor',
      price: 5000,
      onSale: true,
      imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg',
    },
  ];
  auth: string = 'admin';
  isAdmin: boolean = true;

  constructor(MyServiceService: MyServiceService) {}
}
