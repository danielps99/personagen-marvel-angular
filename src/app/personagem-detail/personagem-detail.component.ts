import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personagem-detail',
  templateUrl: './personagem-detail.component.html',
  styles: []
})
export class PersonagemDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log(params['id']);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
