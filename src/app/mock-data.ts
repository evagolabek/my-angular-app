import { Project } from './project';
import { Customer } from './customer';
import { Image } from './image';

export const PROJECTS: Project[] = [
  { id: 21, name: 'Disposable Toilet' },
  { id: 22, name: 'Electric toothbrush' },
  { id: 23, name: 'Vacumme' },
  { id: 24, name: 'Fridgoven' },
  { id: 25, name: 'Laptophone' },
  { id: 26, name: 'Cinetree' },
];

export const CUSTOMERS: Customer[] = [
  { name: 'John', age: 32, nationality: 'British'},
  { name: 'Anna', age: 35, nationality: 'British'},
  { name: 'Brian', age: 22, nationality: 'Australian'},
  { name: 'Joanna', age: 23, nationality: 'Finish'},
];

export const IMAGES: Image[] = [
  {src: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg"},
  {src: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg"},
  {src: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg"},
  {src: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg"},
];


export const CUSTOMER1: Customer = { name: 'Eva', age: 31, nationality: 'Polish'}