import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }
  // tes

  @Post()
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
