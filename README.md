# Examen 1

Aplicación web interactiva construida con Angular 19 que integra múltiples APIs externas para proporcionar una experiencia envolvente e interactiva.

## Características

- Carrusel interactivo con visualización dinámica
- Integración con Rick and Morty API
- Integración con Pokémon API
- Interfaz moderna y responsiva
- Componentes reutilizables y escalables

## Requisitos

- Node.js (v18+)
- npm (v9+)

## Instalación

```bash
git clone https://github.com/sintaxyserror/examen1.git
cd examen1
npm install
```

## Desarrollo

```bash
# Servidor de desarrollo
npm start
# o
ng serve
```

Accede a la aplicación en `http://localhost:4200/`

## Compilar

```bash
ng build
```

## Pruebas

```bash
ng test
```

## Estructura

```
src/
├── app/
│   ├── components/
│   │   ├── carrusel/
│   │   ├── header/
│   │   ├── photo/
│   │   ├── pokemon/
│   │   └── text/
│   ├── views/
│   │   ├── ejercicio2/
│   │   ├── ejercicio3/
│   │   └── ejercicio4/
│   ├── services/
│   ├── models/
│   └── app.routes.ts
├── public/
└── styles.css
```

## Ejercicios

- **Ejercicio 2**: Integración con Rick and Morty API
- **Ejercicio 3**: Consumo de Pokémon API
- **Ejercicio 4**: Componentes avanzados y carrusel dinámico

## Tecnologías

- Angular 19
- TypeScript
- RxJS
- CSS3

## Licencia

MIT

---

Desarrollado con Angular 19
