import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  //styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx?:number=0;
  @Output() heroeSeleccionado:EventEmitter<number>;
  constructor(private _router: Router) {
    this.heroeSeleccionado=new EventEmitter();
  }

  ngOnInit(): void {}
  verHeroe() {
    console.log(this.idx);
    this._router.navigate(['/heroe', this.idx]);
    //this.heroeSeleccionado.emit(this.idx)
  }
}
