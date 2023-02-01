/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './order.repository';

@Injectable()
export class OrdersService {
  constructor (private readonly ordersRepository: OrdersRepository){}
  async createOrder(request: CreateOrderRequest | any) {
    return this.ordersRepository.create(request);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
