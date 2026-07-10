# Inovisec Front

> **Prueba Técnica - Inovisec**
>
> Aplicación web desarrollada como solución a la prueba técnica para el cargo de Desarrollador Frontend, implementando una maqueta interactiva basada en Angular 17 y siguiendo una arquitectura modular preparada para escalar hacia un entorno productivo.

---

# Descripción del proyecto

Este proyecto fue desarrollado como respuesta a la prueba técnica propuesta por **Inovisec**, cuyo objetivo consistía en diseñar e implementar una aplicación de escritorio para la gestión de casos georreferenciados.

La solución incluye una pantalla de autenticación y una interfaz principal compuesta por un mapa interactivo y un panel lateral con la información del caso seleccionado.

Durante el desarrollo se priorizaron aspectos como la organización del código, reutilización de componentes, experiencia de usuario y una arquitectura preparada para futuras integraciones.

---

# Alcance de la solución

La aplicación implementa los principales requerimientos definidos en la prueba técnica.

## Módulo de autenticación

Se desarrolló una pantalla de inicio de sesión que simula el proceso de autenticación de usuarios.

Características implementadas:

- Formulario de acceso.
- Validaciones visuales.
- Simulación del proceso de autenticación.
- Estructura preparada para integración con un servicio real.

---

## Vista principal

Después del proceso de autenticación el usuario accede a una interfaz de escritorio compuesta por dos áreas principales.

### Mapa interactivo

La aplicación incorpora un mapa preparado para representar diferentes casos georreferenciados.

Actualmente la interacción se realiza mediante datos simulados (Mock Data), permitiendo demostrar el comportamiento esperado de la plataforma sin depender de servicios externos.

La implementación contempla:

- Representación visual del mapa.
- Simulación de selección de ubicaciones.
- Interacción entre componentes.
- Arquitectura preparada para integrar servicios cartográficos reales.

---

### Panel de información

La selección de un caso actualiza dinámicamente el panel lateral mostrando la información correspondiente.

Información presentada:

- Nombre del caso.
- Descripción.
- Fecha.
- Información complementaria.
- Elementos visuales asociados.

La estructura del componente permite ampliar fácilmente la cantidad de información mostrada.

---

# Arquitectura del proyecto

La aplicación fue desarrollada utilizando **Angular 17** siguiendo una arquitectura modular basada en componentes reutilizables y separación de responsabilidades.

## Principios implementados

| Principio | Implementación |
|------------|----------------|
| Arquitectura modular | Organización por componentes independientes |
| Componentes reutilizables | Standalone Components |
| Separación de responsabilidades | Componentes, páginas y modelos independientes |
| Escalabilidad | Estructura preparada para crecimiento |
| Mantenibilidad | Código desacoplado y organizado |

## Estructura general

```text
src/
└── app/
    ├── components/
    ├── pages/
    ├── services/
    ├── models/
    └── shared/
```

---

# Tecnologías utilizadas

## Frontend

| Tecnología | Descripción |
|------------|-------------|
| Angular 17 | Framework principal |
| TypeScript | Lenguaje de desarrollo |
| Tailwind CSS | Estilos y diseño responsive |
| Angular Material | Componentes de interfaz |
| HTML5 | Maquetación |
| CSS3 | Estilos personalizados |

## Herramientas

- Figma
- Git
- GitHub
- Visual Studio Code

---

# Instalación y ejecución

## Requisitos

- Node.js
- npm
- Angular CLI

## Clonar el repositorio

```bash
git clone https://github.com/Mgroyes/InovisecFront.git
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar la aplicación

```bash
ng serve
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

---

# Decisiones de diseño

El diseño de la interfaz fue realizado tomando como referencia la guía visual suministrada durante la prueba técnica.

## Paleta de colores

| Elemento | Color |
|----------|--------|
| Color primario | #0B1F2D |
| Color secundario | #1EC8C8 |
| Color de énfasis | #F5A623 |

Durante el proceso de diseño se priorizaron los siguientes aspectos:

- Organización clara de la información.
- Jerarquía visual.
- Consistencia entre componentes.
- Navegación intuitiva.
- Componentes reutilizables.
- Escalabilidad para futuras funcionalidades.

---

# Estado actual del proyecto

La solución desarrollada corresponde a una maqueta funcional que cumple con los principales requerimientos planteados en la prueba técnica.

Actualmente se encuentran implementados:

| Funcionalidad | Estado |
|---------------|--------|
| Pantalla de autenticación | Implementado |
| Interfaz principal | Implementado |
| Vista dividida | Implementado |
| Mapa interactivo (simulado) | Implementado |
| Panel de información | Implementado |
| Arquitectura modular | Implementado |
| Componentes reutilizables | Implementado |
| Diseño responsive | Implementado |
| Datos simulados (Mock Data) | Implementado |

---

# Escalabilidad técnica

Aunque esta solución corresponde a un prototipo funcional, la arquitectura fue diseñada pensando en una evolución hacia un entorno productivo.

La estructura actual facilita la incorporación de funcionalidades como:

- Integración con API REST.
- Autenticación mediante JWT.
- Gestión de usuarios.
- Persistencia de datos.
- Roles y permisos.
- Manejo global de estados.
- Integración con servicios cartográficos.
- Optimización del rendimiento.
- Pruebas automatizadas.

---

# Mejoras futuras

## Backend

- Integración con servicios REST.
- Persistencia de datos.
- CRUD de casos.
- Gestión de usuarios.
- Sistema de roles y permisos.

## Mapas

Para una versión de producción se propone integrar:

- Leaflet.
- Google Maps.
- Clustering de marcadores.
- Carga progresiva de datos.
- Optimización para miles de casos georreferenciados.

## Calidad del software

- Pruebas unitarias.
- Pruebas End-to-End.
- Integración continua (CI/CD).
- Análisis estático del código.
- Cobertura de pruebas.

---

# Consideraciones finales

El objetivo principal de este proyecto fue desarrollar una solución que representara de forma clara el funcionamiento esperado de la plataforma propuesta por Inovisec, priorizando una arquitectura limpia, una interfaz organizada y una base sólida para futuras integraciones.

La aplicación utiliza datos simulados para representar el comportamiento funcional de la plataforma, permitiendo evolucionar fácilmente hacia una implementación conectada con servicios reales.

---

# Autor

**Miguel Rodríguez**

Desarrollador Frontend | Diseñador UI

Repositorio del proyecto:

**https://github.com/Mgroyes/InovisecFront**