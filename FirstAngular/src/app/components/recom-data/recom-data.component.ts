import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-recom-data',
  standalone: true,
  imports: [],
  templateUrl: './recom-data.component.html',
  styleUrl: './recom-data.component.css'
})
export class RecomDataComponent {
recomProducts :IProduct[]=[
  {
  name: 'iphone',
    price: 30000,
    onSale: false,
    imgSrc: './assets/imgs/Anastronautridingahorseinaphotorealisticstyle6.webp',
    reviews:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."]
  },{
    name: 'samsung',
    price: 25000,
    onSale: false,
    imgSrc: './assets/imgs/gratisography-cool-cat-800x525.jpg'
  }
  ,{
    name: 'oppo',
    price: 12000,
    onSale: false,
    imgSrc: './assets/imgs/premium_photo-1664474619075-644dd191935f.jpg'
  }
  
]
}
