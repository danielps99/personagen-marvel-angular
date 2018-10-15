import { RouterTestingModule } from '@angular/router/testing';
import { PaginadorComponent } from './../shared/componente/paginador/paginador.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonagemListComponent } from './personagem-list.component';

describe('PersonagemListComponent', () => {
  let component: PersonagemListComponent;
  let fixture: ComponentFixture<PersonagemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        PersonagemListComponent,
        PaginadorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
