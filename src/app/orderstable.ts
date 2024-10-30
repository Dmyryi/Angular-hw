import { Order } from './order';

export interface Orderstable {
  queue: Order[];
  ready: Order[];
  TT: string;
  expectedwaitingtime: string;
}
