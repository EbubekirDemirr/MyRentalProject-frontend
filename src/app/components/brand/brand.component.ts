import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  carDetails:CarDetail[]=[];
  brands: Brand[]=[];
  filterText:"";

  constructor(
    private brandService: BrandService,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      
      this.brands = response.data; 
    });
  }
  
}
