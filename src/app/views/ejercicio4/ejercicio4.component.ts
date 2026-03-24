// === IMPORTS NECESARIOS PARA EL DICCIONARIO ===
import { Component } from '@angular/core';
import { TextComponent } from "../../components/text/text.component";           // Componente hijo para mostrar resultados
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';   // Para formularios reactivos
import { ServiceService } from '../../services/service.service';               // Servicio para llamadas a la API del diccionario
import { Diccionario } from '../../models/diccionario.interface';              // Interfaz para tipar los datos
import { Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  imports: [TextComponent, ReactiveFormsModule,],  // Componentes y módulos necesarios
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  // === INYECCIÓN DE DEPENDENCIAS ===
  public constructor(private service: ServiceService) { }

  // === FORMULARIO REACTIVO ===
  // FormGroup para manejar el input de búsqueda de palabras
  reactiveForm = new FormGroup({
    name: new FormControl('')  // Control para el campo de texto donde se escribe la palabra
  });
  
  // === ARRAYS PARA ALMACENAR DATOS DE LA PALABRA ===
  arrayDefinicion: string[] = [];   // Array para almacenar todas las definiciones de la palabra
  arraySinonimos: string[] = [];    // Array para almacenar todos los sinónimos de la palabra
  arrayAntonyms: string[] = [];     // Array para almacenar todos los antónimos de la palabra
  
  // === ARRAY PRINCIPAL PARA PASAR AL COMPONENTE HIJO ===
  // Objeto estructurado que contiene toda la información procesada de la palabra
  arrayPalabra: { definicion: string; sinonimos: string[]; antonimos: string[] }[] = [];
  
  // === VARIABLE DE CONTROL DE VISTA ===
  enviar: boolean = false;  // Controla si mostrar el formulario (false) o los resultados (true)
  // === MÉTODO PARA VOLVER AL FORMULARIO ===
  /**
   * Método que se ejecuta cuando el componente hijo emite el evento volverEvent
   * Permite volver desde la vista de resultados al formulario de búsqueda
   * @param volverEvent - boolean que indica si volver al formulario (false)
   */
  public onBack(volverEvent: boolean): void {
    this.enviar = volverEvent;  // Actualizar estado para mostrar el formulario
  }
  
  // === MÉTODO PARA PROCESAR EL FORMULARIO ===
  /**
   * Método que se ejecuta al enviar el formulario (ngSubmit)
   * 1. Obtiene la palabra del formulario
   * 2. Llama a la API para buscar información
   * 3. Cambia la vista para mostrar resultados
   */
  public onSubmit() {
    const palabra = this.reactiveForm.value.name;  // Obtener valor del input
    if (palabra) {
      this.getPalabra(palabra);  // Buscar información de la palabra
    }
    this.enviar = true;  // Cambiar vista para mostrar resultados
    console.log("esta mierda esta en el submit", this.enviar);
  } // === MÉTODO PRINCIPAL PARA BUSCAR PALABRA EN DICCIONARIO ===
 /**
  * Método que consulta la API del diccionario y procesa la respuesta
  * @param palabra - string con la palabra a buscar
  * 
  * PROCESO:
  * 1. Llama al servicio para obtener datos de la API
  * 2. Procesa la respuesta para extraer definiciones, sinónimos y antónimos
  * 3. Llena los arrays correspondientes
  * 4. Crea un objeto estructurado para pasar al componente hijo
  */
 public getPalabra(palabra: string): void {
  this.service.getPalabra(palabra).subscribe((response) => {
    this.arrayPalabra = []; // Limpiar array antes de llenarlo
    
    // Verificar que la respuesta sea válida (array con al menos un elemento)
    if (Array.isArray(response) && response.length > 0) {
      
      // PASO 1: Procesar cada "meaning" (significado) de la palabra
      response[0].meanings?.forEach((meaning: any) => {
       // Extraer definiciones: tomar cada definición y agregarla al array
       this.arrayDefinicion.push(...meaning.definitions.map((def: any) => def.definition || 'No definition found'));
       
       // Extraer sinónimos: agregar todos los sinónimos disponibles
       this.arraySinonimos.push(...meaning.synonyms || []);
       
       // Extraer antónimos: agregar todos los antónimos disponibles
       this.arrayAntonyms.push(...meaning.antonyms || []);
      });
      
      // PASO 2: Crear objeto estructurado para el componente hijo
      this.arrayPalabra.push({
        definicion: this.arrayDefinicion.join('\n'),  // Unir definiciones con salto de línea
        sinonimos: this.arraySinonimos,               // Array de sinónimos
        antonimos: this.arrayAntonyms                 // Array de antónimos
      });
    }
  });
}


}









