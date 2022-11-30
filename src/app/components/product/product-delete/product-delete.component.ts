import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    });
  }
}
