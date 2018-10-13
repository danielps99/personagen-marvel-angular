import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetailComponent } from './personagem-detail.component';

describe('PersonagemDetailComponent', () => {
  let component: PersonagemDetailComponent;
  let fixture: ComponentFixture<PersonagemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
