import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() limit: number; // QUANTIDA LIMITE POR PAGINA
  @Input() offset: number; // PAGINA ATUAL QUE COMECA DO ZERO MAS MOSTRA 1 PARA USUARIO
  @Input() total: number; // TOTAL DE REGISTROS PARA PAGINAR
  @Output('navegar') navegar = new EventEmitter();

  // qtdPaginasMostrar: number;
  paginasNumeradas: Array<number>;
  paginaAnterior: number;
  paginaAtual: number;
  paginaProxima: number;

  constructor() { }

  ngOnInit() {
    this.paginaAtual = 1;
    this.gerarLinks();
  }

  paginar(pagina: number, $event: any) {
		$event.preventDefault();
    this.navegar.emit(pagina);
    this.paginaAtual = pagina;
		this.gerarLinks();
  }

  gerarLinks() {
    this.paginaAnterior = this.paginaAtual === 1 ? 1 : this.paginaAtual -1;
    let qtdPaginasMostrar = this.getQuantidadePaginasMostradas();
    this.paginasNumeradas = [];
    let inicio = this.buscarInicioPaginador(qtdPaginasMostrar);
    let fim = this.buscarFimPaginador(inicio, qtdPaginasMostrar);
    for (let i = inicio; i <= fim; i++) {
      this.paginasNumeradas.push(i);
    }
    this.paginaProxima = this.paginaAtual >= fim ? this.paginaAtual : this.paginaAtual + 1;
  }

  buscarInicioPaginador(qtdPaginas){
    let inicio = this.paginaAtual - Math.floor(qtdPaginas/2);
    if(inicio <= 1){
      return 1;
    }
    let qtdTotalPaginas = Math.ceil(this.total / this.limit);
    if(inicio + qtdPaginas > qtdTotalPaginas ){
      return qtdTotalPaginas - qtdPaginas + 1;
    }
    return inicio;
  }

  buscarFimPaginador(inicio, qtdPaginasMostrar){
    let fim = Math.ceil(this.total / this.limit);
    if(fim >= qtdPaginasMostrar){
      return inicio + qtdPaginasMostrar -1;
    }
    return fim;
  }

  getQuantidadePaginasMostradas(){
    return document.body.clientWidth > 360 ? 5 : 3;
  }
}
