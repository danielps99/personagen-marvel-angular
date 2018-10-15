import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('PaginadorComponent validar links gerados em tela MAIOR 360px', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    spyOn(component , 'buscarQuantidadePaginasMostradas').and. returnValues(5);
    fixture.detectChanges();
  });

  it('Deve gerar apenas um link de pagina', () => {
    component.limit = 3;
    component.total = 1;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(1);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(1);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar cinco links de pagina iniciando do 1. Tem 13 retistros em tela maior de 360px', () => {
    component.limit = 3;
    component.total = 13;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.buscarQuantidadePaginasMostradas).toHaveBeenCalledTimes(1);
    expect(component.paginasNumeradas.length).toEqual(5);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginasNumeradas).toContain(2);
    expect(component.paginasNumeradas).toContain(3);
    expect(component.paginasNumeradas).toContain(4);
    expect(component.paginasNumeradas).toContain(5);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar cinco linka de pagina iniciando do 1. Tem 1493 retistros em tela MAIOR de 360px', () => {
    component.limit = 3;
    component.total = 1493;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(5);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginasNumeradas).toContain(2);
    expect(component.paginasNumeradas).toContain(3);
    expect(component.paginasNumeradas).toContain(4);
    expect(component.paginasNumeradas).toContain(5);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar cinco links de pagina iniciando do 13. Tem 125 retistros em tela MAIOR de 360px', () => {
    component.limit = 3;
    component.total = 125;
    component.paginaAtual = 15;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(5);
    expect(component.paginasNumeradas).toContain(13);
    expect(component.paginasNumeradas).toContain(14);
    expect(component.paginasNumeradas).toContain(15);
    expect(component.paginasNumeradas).toContain(16);
    expect(component.paginasNumeradas).toContain(17);
    expect(component.paginaAnterior).toEqual(14);
    expect(component.paginaProxima).toEqual(16);
    expect(component.paginaAtual).toEqual(15);
  });

  it('Deve gerar cinco links de pagina sendo pagina atual = ultima pagina . Tem 500 retistros em tela MAIOR de 360px', () => {
    component.limit = 3;
    component.total = 500;
    component.paginaAtual = 167;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(5);
    expect(component.paginasNumeradas).toContain(163);
    expect(component.paginasNumeradas).toContain(164);
    expect(component.paginasNumeradas).toContain(165);
    expect(component.paginasNumeradas).toContain(166);
    expect(component.paginasNumeradas).toContain(167);
    expect(component.paginaAnterior).toEqual(166);
    expect(component.paginaProxima).toEqual(167);
    expect(component.paginaAtual).toEqual(167);
  });
});

describe('PaginadorComponent validar links gerados em tela MENOR 360px', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    spyOn(component , 'buscarQuantidadePaginasMostradas').and. returnValues(3);
    fixture.detectChanges();
  });

  it('Deve gerar apenas um link de pagina', () => {
    component.limit = 3;
    component.total = 1;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(1);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(1);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar  3 links de pagina iniciando do 1. Tem 13 retistros em tela <= 360px', () => {
    component.limit = 3;
    component.total = 13;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.buscarQuantidadePaginasMostradas).toHaveBeenCalledTimes(1);
    expect(component.paginasNumeradas.length).toEqual(3);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginasNumeradas).toContain(2);
    expect(component.paginasNumeradas).toContain(3);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar 3 links de pagina iniciando do 1.  Tem 1493 retistros em tela <= de 360px', () => {
    component.limit = 3;
    component.total = 1493;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(3);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginasNumeradas).toContain(2);
    expect(component.paginasNumeradas).toContain(3);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar cinco links de pagina iniciando do 13. Tem 147 retistros em tela MENOR de 360px', () => {
    component.limit = 3;
    component.total = 147;
    component.paginaAtual = 22;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(3);
    expect(component.paginasNumeradas).toContain(21);
    expect(component.paginasNumeradas).toContain(22);
    expect(component.paginasNumeradas).toContain(23);
    expect(component.paginaAnterior).toEqual(21);
    expect(component.paginaProxima).toEqual(23);
    expect(component.paginaAtual).toEqual(22);
  });

  it('Deve gerar cinco links de pagina sendo pagina atual = ultima pagina . Tem 388 retistros em tela MENOR de 360px', () => {
    component.limit = 3;
    component.total = 388;
    component.paginaAtual = 130;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(3);
    expect(component.paginasNumeradas).toContain(128);
    expect(component.paginasNumeradas).toContain(129);
    expect(component.paginasNumeradas).toContain(130);
    expect(component.paginaAnterior).toEqual(129);
    expect(component.paginaProxima).toEqual(130);
    expect(component.paginaAtual).toEqual(130);
  });
});
