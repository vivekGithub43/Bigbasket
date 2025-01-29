import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteProductsComponent } from './website-products.component';

describe('ProductsComponent', () => {
  let component: WebsiteProductsComponent;
  let fixture: ComponentFixture<WebsiteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
