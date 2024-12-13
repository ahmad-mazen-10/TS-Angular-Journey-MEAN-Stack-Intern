export interface IProduct {
  name: string;
  price: number;
  onSale: boolean;
  imgSrc: string;
  reviews?: string[];
}
