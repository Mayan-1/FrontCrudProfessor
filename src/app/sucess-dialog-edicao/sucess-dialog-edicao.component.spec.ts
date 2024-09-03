import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDialogEdicaoComponent } from './sucess-dialog-edicao.component';

describe('SucessDialogEdicaoComponent', () => {
  let component: SucessDialogEdicaoComponent;
  let fixture: ComponentFixture<SucessDialogEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucessDialogEdicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessDialogEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
