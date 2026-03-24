// === IMPORTS NECESARIOS PARA COMPONENTE POKÉMON ===
import { Component } from '@angular/core';
import { Input } from '@angular/core';  // Para recibir datos del componente padre

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  // === PROPIEDADES DE ENTRADA (@Input) ===
  // Estas propiedades reciben datos del componente padre
  @Input() pokemonName: string = '';         // Nombre del pokémon
  @Input() pokemonImageFront: string = '';   // URL de la imagen frontal del pokémon
  @Input() mostrarFotos: boolean = false;    // Control de visibilidad de fotos

  // === MÉTODO PARA ALTERNAR VISTA DE FOTOS ===
  /**
   * Método para alternar entre mostrar y ocultar fotos
   * Invierte el valor actual de mostrarFotos
   */
  public toggleFotos(): void {
    this.mostrarFotos = !this.mostrarFotos;  // Invertir estado
  }

}
