import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PersonagemService } from './personagem.service';

describe('PersonagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, ],
  }));

  it('should be created', () => {
    const service: PersonagemService = TestBed.get(PersonagemService);
    expect(service).toBeTruthy();
  });
});
