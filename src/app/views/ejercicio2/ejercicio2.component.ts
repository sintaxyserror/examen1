// === IMPORTS NECESARIOS PARA POKÉMON Y FOTOS ===
import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from "../../components/pokemon/pokemon.component";  // Componente hijo para mostrar pokémon
import { ServiceService } from '../../services/service.service';               // Servicio para llamadas a la API
import { PhotoComponent } from "../../components/photo/photo.component";      // Componente hijo para mostrar fotos

@Component({
  selector: 'app-ejercicio2',
  imports: [PokemonComponent, PhotoComponent],  // Componentes hijos que usa
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component implements OnInit {
  // === INYECCIÓN DE DEPENDENCIAS ===
  public constructor(private service: ServiceService) {}

  // === DATOS Y CONFIGURACIÓN ===
  pokemonsList: string[] = ['pikachu', 'bulbasaur', 'charmander'];  // Lista de pokémon a cargar
  
  // === VARIABLES DE CONTROL DE VISTA ===
  mostrarFotos: boolean = false;  // Controla si mostrar el componente de fotos
  
  // === ARRAYS Y OBJETOS DE DATOS ===
  pokemons: { name: string; image: string; fotos: string[] }[] = [];  // Array de pokémon procesados
  pokemonSeleccionado: any = "";  // Pokémon actualmente seleccionado
  fotoElegida: any = "";         // URL de la foto seleccionada para mostrar en grande
  // === MÉTODO PRINCIPAL PARA CARGAR POKÉMON ===
  /**
   * Método que carga información de los pokémon desde la API
   * 1. Itera sobre la lista de nombres de pokémon
   * 2. Hace llamada a la API para cada uno
   * 3. Procesa y almacena la información con manejo de errores
   */
  public getResponse(): void {
    this.pokemonsList.forEach(element => {
      this.service.getPokemon(element).subscribe({
        next: (data) => {
          // Procesar datos del pokémon y almacenar en el array
          this.pokemons.push({
            name: data.name,                     // Nombre del pokémon
            image: data.sprites.front_default,  // Imagen principal
            fotos: [                             // Array de todas las imágenes disponibles
              data.sprites.front_default,       // Frente normal
              data.sprites.back_default,        // Espalda normal
              data.sprites.front_shiny,         // Frente shiny
              data.sprites.back_shiny           // Espalda shiny
            ]
          });
        },
        error: (error) => {
          console.error('Error fetching Pokémon:', error);  // Manejo de errores
        }
      });
    });
  }

  // === MÉTODO DE INICIALIZACIÓN ===
  /**
   * Método que se ejecuta al cargar el componente
   * Carga automáticamente los pokémon
   */
  public ngOnInit(): void {
    this.getResponse();      // Cargar pokémon
    this.pokemonElegido;     // Referencia al método (sin llamar)
  }
  // === MÉTODO PARA ACTIVAR VISTA DE FOTOS ===
  /**
   * Método para cambiar a la vista de fotos
   */
  public toggleFotos(): void {
    this.mostrarFotos = true;  // Activar vista de fotos
  }

  // === MÉTODO PARA MANEJAR EVENTO DE VOLVER ===
  /**
   * Método que maneja el evento del componente hijo para volver
   * @param mostrarFotos - boolean para controlar la vista
   */
  public onBackClick(mostrarFotos: boolean): void {
    this.mostrarFotos = mostrarFotos;  // Actualizar estado de vista
  }
  
  // === MÉTODO PARA SELECCIONAR POKÉMON ===
  /**
   * Método que se ejecuta cuando se selecciona un pokémon
   * @param pokemon - Objeto con toda la información del pokémon
   */
  public pokemonElegido(pokemon: any): void {
    this.pokemonSeleccionado = pokemon;  // Guardar pokémon seleccionado
    this.toggleFotos();                  // Cambiar a vista de fotos
  }
  
  // === MÉTODO PARA SELECCIONAR FOTO GRANDE ===
  /**
   * Método para seleccionar una foto para mostrar en grande
   * @param fotoUrl - URL de la foto seleccionada
   */
  public fotoGrande(fotoUrl: string): void {
    this.fotoElegida = fotoUrl;  // Guardar URL de la foto elegida
    console.log("Foto elegida:", this.fotoElegida);
  }
  
}