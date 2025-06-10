import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductItemComponent } from '../product-item/product-item.component'; // Import ProductItemComponent

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true, // Add standalone: true
})
export class ProductListComponent {

}
