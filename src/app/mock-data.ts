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
  {src: '../assets/robot.png', alt: 'robot'},
  {src: '../assets/robot2.png', alt: 'robot2'},
  {src: '../assets/robot3.png', alt: 'robot3'},
];


export const CUSTOMER1: Customer = { name: 'Eva', age: 31, nationality: 'Polish'}