import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Output() backClicked = new EventEmitter<boolean>();
  @Output() photoSelected = new EventEmitter<string>();
  @Input() pokemonImage: string[] = [];

  @Input() fotoGrande: string = '';

  cambiarDeFoto: boolean = false;
  
  public fotoSeleccionada: string = '';

  public getpokemonList(): void {
    console.log('Pokemon images:', this.pokemonImage);
  }
  public onBackClick(): void {
    this.backClicked.emit(false);
  }
  public onPhotoClick(fotoUrl: string): void {
    this.fotoSeleccionada = fotoUrl;
    console.log('Foto seleccionada:', this.fotoSeleccionada);
    this.cambiarDeFoto = true; 
    
  }

  public ngOnInit(): void {
    this.getpokemonList();
  }
  public defaultFoto(): void {
    this.cambiarDeFoto = false;
  }

}
