// === IMPORTS NECESARIOS PARA EL COMPONENTE TEXT ===
import { Component } from '@angular/core';
import { Input } from '@angular/core';           // Para recibir datos del componente padre
import { Output, EventEmitter } from '@angular/core';  // Para enviar eventos al componente padre


@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  // === PROPIEDADES DE ENTRADA (@Input) ===
  // Estas propiedades reciben datos del componente padre
  @Input() arrayPalabra: { definicion: string; sinonimos: string[]; antonimos: string[] }[] = [];  // Datos de la palabra buscada
  @Input() enviar: boolean = false;  // Estado que controla si mostrar el componente
  
  // === EVENTOS DE SALIDA (@Output) ===
  // Este evento envía información al componente padre
  @Output() volverEvent = new EventEmitter<boolean>();  // Emite evento para volver al formulario
  
  // === VARIABLES DE CONTROL DE VISTA ===
  // Estas variables controlan qué información mostrar en cada momento
  estado: boolean = false;      // Controla si mostrar botones principales o contenido específico
  definicion: boolean = false;  // Controla si mostrar las definiciones
  sinonimos: boolean = false;   // Controla si mostrar los sinónimos
  antonimos: boolean = false;   // Controla si mostrar los antónimos

  // === MÉTODO PARA MOSTRAR DEFINICIONES ===
  /**
   * Método que se ejecuta al presionar el botón "Significados"
   * Activa la vista de definiciones y oculta las demás
   */
  public mostrarDefinicion(): void {
    this.estado = true;       // Activar estado de contenido específico
    this.definicion = true;   // Mostrar definiciones
    this.sinonimos = false;   // Ocultar sinónimos
    this.antonimos = false;   // Ocultar antónimos
  }
  
  // === MÉTODO PARA MOSTRAR SINÓNIMOS ===
  /**
   * Método que se ejecuta al presionar el botón "Sinónimos"
   * Activa la vista de sinónimos y oculta las demás
   */
  public mostrarSinonimos(): void {
    this.estado = true;       // Activar estado de contenido específico
    this.sinonimos = true;    // Mostrar sinónimos
    this.antonimos = false;   // Ocultar antónimos
    this.definicion = false;  // Ocultar definiciones
  }
  
  // === MÉTODO PARA MOSTRAR ANTÓNIMOS ===
  /**
   * Método que se ejecuta al presionar el botón "Antónimos"
   * Activa la vista de antónimos y oculta las demás
   */
  public mostrarAntonimos(): void {
    this.estado = true;       // Activar estado de contenido específico
    this.antonimos = true;    // Mostrar antónimos
    this.sinonimos = false;   // Ocultar sinónimos
    this.definicion = false;  // Ocultar definiciones
  }
  // === MÉTODO PARA VOLVER A BOTONES PRINCIPALES ===
  /**
   * Método que se ejecuta al presionar el botón "Volver"
   * Oculta todo el contenido específico y vuelve a mostrar los botones principales
   */
  public ocultar(): void {
    this.definicion = false;  // Ocultar definiciones
    this.sinonimos = false;   // Ocultar sinónimos
    this.antonimos = false;   // Ocultar antónimos
    this.estado = false;      // Volver al estado de botones principales
  }


  // === MÉTODO PARA VOLVER AL FORMULARIO DE BÚSQUEDA ===
  /**
   * Método que se ejecuta al presionar el botón "Nueva búsqueda"
   * Emite un evento al componente padre para volver al formulario
   */
  public enviarBoolean(): void {
    this.volverEvent.emit(false);  // Emitir false para que el padre muestre el formulario
  }

}
