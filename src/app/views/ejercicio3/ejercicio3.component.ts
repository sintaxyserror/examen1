import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { ServiceService } from '../../services/service.service';

/**
 * Componente para el ejercicio 3 - Visualización de personajes y episodios de Rick and Morty
 * Permite navegar entre personajes y episodios usando un carrusel
 * Funcionalidades principales:
 * - Mostrar personajes de Rick and Morty con paginación
 * - Mostrar episodios de Rick and Morty con paginación
 * - Navegación circular entre páginas
 * - Alternar entre vista de personajes y episodios
 */
@Component({
  selector: 'app-ejercicio3',
  imports: [CarruselComponent],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  
  /**
   * Constructor del componente
   * @param service Servicio para realizar llamadas a la API de Rick and Morty
   */
  public constructor(private service: ServiceService) { }
  
  // === PROPIEDADES PARA PERSONAJES ===
  
  /** Array que almacena los personajes de Rick and Morty con su nombre e imágenes */
  personajes: { name: string; fotos: string[] }[] = [];
  
  /** Contador para trackear personajes (no utilizado actualmente) */
  contadorPersonajes: number = 0;
  
  /** Página actual de personajes (1-42) */
  page: number = 1;
  
  /** Número máximo de páginas de personajes disponibles */
  maxPage: number = 42;
  
  /** Flag booleano para determinar si estamos en modo episodios (true) o personajes (false) */
  episodes: boolean = false;

  // === PROPIEDADES PARA EPISODIOS ===
  
  /** Array que almacena los episodios con nombre y URL del primer personaje */
  listaEpisodios: { name: string; url: string }[] = [];
  
  /** Contador para trackear episodios (no utilizado actualmente) */
  contadorEpisodios: number = 0;
  
  /** Página actual de episodios (1-3) */
  pageEpisodios: number = 1;
  
  /** Número máximo de páginas de episodios disponibles */
  maxPageEpisodios: number = 3;
  
  // === MÉTODOS PRINCIPALES ===
  
  /**
   * Método que obtiene los personajes de Rick and Morty de una página específica
   * Procesa la respuesta de la API y transforma los datos para el carrusel
   * @param page Número de página a consultar (1-42)
   */
  public getRick(page: number): void {
    this.service.getRick(page).subscribe((response) => {
      // Reiniciar el array de personajes
      this.personajes = [];
      
      // Procesar cada personaje de la respuesta
      response.results?.forEach((element) => {
        this.personajes.push({
          name: element.name ? element.name : 'Unknown', // Nombre del personaje
          fotos: element.image ? [element.image] : []     // Array con la imagen del personaje
        });
      });
    });
    
    // Cambiar a modo personajes (no episodios)
    this.episodes = false; 
  }

  /**
   * Método de inicialización del componente
   * Se ejecuta después de que Angular inicializa las propiedades del componente
   */
  public ngOnInit(): void {
    // Cargar la primera página de personajes al inicializar
    this.getRick(this.page);
  }

  /**
   * Método que obtiene los episodios de Rick and Morty de una página específica
   * Cambia el modo a episodios y procesa la respuesta de la API
   */
  public episodios(): void {
    // Cambiar a modo episodios
    this.episodes = true;
      this.service.getEpisode(this.pageEpisodios).subscribe((response) =>{
      // Reiniciar el array de episodios
      this.listaEpisodios = [];
      
      // Procesar cada episodio de la respuesta
      response.results?.forEach((element) => {
        this.listaEpisodios.push({
          name: element.name ? element.name : 'Unknown',        // Nombre del episodio
          url: element.characters ? element.characters[0] : 'Unknown' // URL del primer personaje del episodio
        });
      });
    });
  }

  // === MÉTODOS DE NAVEGACIÓN PARA PERSONAJES ===
  
  /**
   * Navega a la siguiente página de personajes
   * Implementa navegación circular: al llegar al final vuelve al principio
   */
  public nextPagina(): void {
    if (this.page < this.maxPage) {
      // Si no estamos en la última página, avanzar
      this.page++;
      this.getRick(this.page);
    } else if (this.page === this.maxPage) {
      // Si estamos en la última página, volver a la primera (navegación circular)
      this.page = 1;
      this.getRick(this.page);
    }
  }
  
  /**
   * Navega a la página anterior de personajes
   * Implementa navegación circular: al llegar al principio va al final
   */
  public prevPagina(): void {
    if (this.page > 1) {
      // Si no estamos en la primera página, retroceder
      this.page--;
      this.getRick(this.page);
    } else if (this.page === 1) {
      // Si estamos en la primera página, ir a la última (navegación circular)
      this.page = this.maxPage;
      this.getRick(this.page);
    }
  }

  // === MÉTODOS DE NAVEGACIÓN PARA EPISODIOS ===
  
  /**
   * Navega a la siguiente página de episodios
   * Implementa navegación circular: al llegar al final vuelve al principio
   */
  public nextPaginaEpisodios(): void {
    if(this.pageEpisodios < this.maxPageEpisodios) {
      // Si no estamos en la última página de episodios, avanzar
      this.pageEpisodios++;
      this.episodios();
    } else if (this.pageEpisodios === this.maxPageEpisodios) {
      // Si estamos en la última página, volver a la primera (navegación circular)
      this.pageEpisodios = 1;
      this.episodios();
    }
  }

  /**
   * Navega a la página anterior de episodios
   * Implementa navegación circular: al llegar al principio va al final
   */
  public prevPaginaEpisodios(): void {
    if (this.pageEpisodios > 1) {
      // Si no estamos en la primera página de episodios, retroceder
      this.pageEpisodios--;
      this.episodios();
    } else if (this.pageEpisodios === 1) {
      // Si estamos en la primera página, ir a la última (navegación circular)
      this.pageEpisodios = this.maxPageEpisodios;
      this.episodios();
    }
  }

}
