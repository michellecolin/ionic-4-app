import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Mansão em jurerê', 
      'mansão top em jurere', 
      'https://s2.glbimg.com/CO-pj6-63YJTa6phDOOQibfUvkg=/smart/e.glbimg.com/og/ed/f/original/2019/08/01/rubens-barrichello-mansao-01.jpg', 
      200
    ),
    new Place(
      'p2', 
      'Apartamento em Paris', 
      'próximo a torre eiffel', 
      'http://f.i.uol.com.br/sobretudo/morar/images/17314487.jpeg', 
      150
    ),
    new Place(
      'p3', 
      'Casa na praia do rosa', 
      'Grande e bonita', 
      'https://fotos.procureimovel.com.br/img_imovel/1196/132704/thumb/5c4d1995a6a32.jpg', 
      100
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
