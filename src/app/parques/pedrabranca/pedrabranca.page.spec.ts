import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedrabrancaPage } from './pedrabranca.page';

describe('PedrabrancaPage', () => {
  let component: PedrabrancaPage;
  let fixture: ComponentFixture<PedrabrancaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedrabrancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
