import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoGeneradoComponent } from './texto-generado.component';

describe('TextoGeneradoComponent', () => {
  let component: TextoGeneradoComponent;
  let fixture: ComponentFixture<TextoGeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoGeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoGeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
