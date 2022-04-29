import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from './cart.service'
import { ShoppingCartItemComponent } from './shopping-cart-item.component'
import { ShoppingCartComponent } from './shopping-cart.component';

xdescribe('ShoppingCartComponent', () => {

  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShoppingCartComponent,
        ShoppingCartItemComponent
      ],
      /*
      providers: [
        {provide: CartService, useValue: {} }  // stub dla DI (tutaj nie był nam potrzebny!)
      ]
      */
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have empty list of items at start', () => {
    const dataList = fixture.nativeElement.querySelector('[data-list]')

    fixture.detectChanges();

    expect(dataList.innerText).toEqual('')
  });

  it('should show only one product when provided by cart service', () => {

    const cartServiceStub: CartService = TestBed.inject(CartService);
    cartServiceStub.addToCart({
      id: 1,
      name: 'Mój testowy produkt !',
      imgUrl: 'brak-img',
      value: 200
    })

    const dataList = fixture.nativeElement.querySelector('[data-list]');
    fixture.detectChanges();

    expect(dataList.innerText).toEqual('1 x Mój testowy produkt !')
  });

  it('should show all products when they are inside the cart', () => {

    const cartServiceStub: CartService = TestBed.inject(CartService);
    cartServiceStub.addToCart({
      id: 1,
      name: 'Tuba',
      imgUrl: 'brak-img',
      value: 200
    })
    cartServiceStub.addToCart({
      id: 2,
      name: 'Klocki',
      imgUrl: 'brak-img',
      value: 300
    })
    cartServiceStub.addToCart({
      id: 2,
      name: 'Klocki',
      imgUrl: 'brak-img',
      value: 300
    })

    const dataList = fixture.nativeElement.querySelector('[data-list]');
    fixture.detectChanges();

    expect(dataList.innerText).toEqual('1 x Tuba\n2 x Klocki')
  });
});
