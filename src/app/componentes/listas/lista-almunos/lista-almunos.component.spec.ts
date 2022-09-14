import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlmunosComponent } from './lista-almunos.component';

describe('ListaAlmunosComponent', () => {
  let component: ListaAlmunosComponent;
  let fixture: ComponentFixture<ListaAlmunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlmunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlmunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
