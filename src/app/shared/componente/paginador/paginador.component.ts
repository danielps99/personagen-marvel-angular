import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() qtdPorPagina: number;
  @Output('navegar') navegar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  paginar(pagina: number, $event: any) {
		$event.preventDefault();
		// this.pagina = pagina;
		// this.gerarLinks();
    // this.onPaginate.emit(pagina);
    this.navegar.emit(1);
	}

}
