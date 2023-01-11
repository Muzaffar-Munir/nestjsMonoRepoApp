import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
// import { OrdersRepository } from './order.repository';

@Injectable()
export class OrdersService {
  // constructor (private readonly ordersRepository: OrdersRepository){}
  getHello(): string {
    return 'Hello Worlds!';
  }

  async createOrder(request: CreateOrderRequest) {
    // return this.ordersRepository.create(request);
  }
}
