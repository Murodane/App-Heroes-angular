import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-buscarheroes',
  templateUrl: './buscarheroes.component.html',
  styles: [],
})
export class BuscarheroesComponent implements OnInit {
  heroes: Heroe[] = [];
  termino:string='';
  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router
  ) {
 
  }

  ngOnInit(): void {
    //this.heroes=this._heroesService.buscarheroes();
    this._activatedRoute.params.subscribe((params) => {
      this.termino=params['heroe'];
      this.heroes = this._heroesService.buscarheroes(params['heroe']);
      console.log(this.heroes)
    });
  }
  verHeroe(idx: number) {
    console.log(idx);
    this._router.navigate(['/heroe',idx])
  }
}
