import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

/**
 * Componente hijo CarruselComponent para examen1 - Carrusel de personajes y episodios
 * Recibe datos del componente padre (ejercicio3) y permite navegar entre elementos
 * Funcionalidades principales:
 * - Mostrar personajes de Rick and Morty en formato carrusel
 * - Mostrar episodios de Rick and Morty en formato carrusel
 * - Navegación circular entre elementos (personajes o episodios)
 * - Cambio automático de modo según el tipo de datos recibido
 */
@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  
  // === PROPIEDADES DE ENTRADA (FROM PARENT) ===
  
  /** Array de personajes recibido del componente padre */
  @Input() personajes: { name: string; fotos: string[] }[] = [];
  
  /** Array de episodios recibido del componente padre */
  @Input() listaEpisodios: { name: string; }[] = [];
  
  /** Flag que indica si estamos en modo episodios (true) o personajes (false) */
  @Input() episodes: boolean = false;
  
  // === PROPIEDADES LOCALES PARA NAVEGACIÓN ===
    /** Índice del personaje actualmente mostrado en el carrusel */
  contadorPersonajes: number = 0;
  
  /** Índice del episodio actualmente mostrado en el carrusel */
  contadorEpisodios: number = 0;

  // === MÉTODOS DE NAVEGACIÓN PARA PERSONAJES ===
  
  /**
   * Método para avanzar al siguiente personaje en el carrusel
   * Implementa navegación circular: al llegar al final vuelve al principio
   */
  public masUno(): void {
    if (this.contadorPersonajes < this.personajes.length - 1) {
      // Si no es el último personaje, avanzar al siguiente
      this.contadorPersonajes++;
    } else if (this.contadorPersonajes === this.personajes.length - 1) {
      // Si es el último personaje, volver al primero (navegación circular)
      this.contadorPersonajes = 0; 
    }
    console.log('Current character index:', this.contadorPersonajes);
  }

  /**
   * Método para retroceder al personaje anterior en el carrusel
   * Implementa navegación circular: al llegar al principio va al final
   */
  public menosUno(): void {
    if (this.contadorPersonajes > 0) {
      // Si no es el primer personaje, retroceder al anterior
      this.contadorPersonajes--;
    } else if (this.contadorPersonajes === 0) {
      // Si es el primer personaje, ir al último (navegación circular)
      this.contadorPersonajes = this.personajes.length - 1;
    }
    console.log('Current character index:', this.contadorPersonajes);
  }

  // === MÉTODOS DE NAVEGACIÓN PARA EPISODIOS ===
  
  /**
   * Método para avanzar al siguiente episodio en el carrusel
   * Implementa navegación circular: al llegar al final vuelve al principio
   */
  public masUnoEpisodios(): void {
    if (this.contadorEpisodios < this.listaEpisodios.length - 1) {
      // Si no es el último episodio, avanzar al siguiente
      this.contadorEpisodios++;
    } else if (this.contadorEpisodios === this.listaEpisodios.length - 1) {
      // Si es el último episodio, volver al primero (navegación circular)
      this.contadorEpisodios = 0; 
    }
    console.log('Current episode index:', this.contadorEpisodios);
  }

  /**
   * Método para retroceder al episodio anterior en el carrusel
   * Implementa navegación circular: al llegar al principio va al final
   */
  public menosUnoEpisodios(): void {
    if (this.contadorEpisodios > 0) {
      // Si no es el primer episodio, retroceder al anterior
      this.contadorEpisodios--;
    } else if (this.contadorEpisodios === 0) {
      // Si es el primer episodio, ir al último (navegación circular)
      this.contadorEpisodios = this.listaEpisodios.length - 1;
    }
    console.log('Current episode index:', this.contadorEpisodios);
  }
  
}
