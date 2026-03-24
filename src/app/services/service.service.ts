import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface'; // Adjust the import path as necessary
import { Rick } from '../models/rick.interface'; // Adjust the import path as necessary
import { Episodes } from '../models/epidodes.interface';
import { Diccionario } from '../models/diccionario.interface';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getResponse() {
    throw new Error('Method not implemented.');
  }

  constructor(public http: HttpClient) { }

  public getPokemon(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  }

  public getRick(page: number): Observable<Rick> {
    return this.http.get<Rick>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }

  public getEpisode(page: number): Observable<Episodes> {
    return this.http.get<Episodes>(`https://rickandmortyapi.com/api/episode?page=${page}`);
  }

  public getPalabra(palabra: string): Observable<Diccionario> {
    return this.http.get<Diccionario>(`https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`);
  }
}
