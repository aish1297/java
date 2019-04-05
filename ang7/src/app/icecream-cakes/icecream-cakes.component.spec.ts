import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamCakesComponent } from './icecream-cakes.component';

describe('IcecreamCakesComponent', () => {
  let component: IcecreamCakesComponent;
  let fixture: ComponentFixture<IcecreamCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecreamCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
