import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrdersForCurrentUser().subscribe({
        next: (orders) => {
            console.log('Orders received:', orders); 
            this.orders = orders;
        },
        error: (error) => {
          console.error('Error fetching orders:', error);
        }
      });
  }
}
