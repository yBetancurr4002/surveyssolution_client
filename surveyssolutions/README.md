# SurveySSolutions - Sistema de Gestión de Encuestas

SurveySSolutions es una solución completa para la gestión de encuestas, diseñada con Laravel + PostgreSQL en el backend y React 18 + Vite + Bootstrap 5.

## Stack

- React 19.1  (Vite)
- Bootstrap 5
- Axios
- React Router DOM
- Context API (gestión de sesión)
- Hooks personalizados

## Correr el proyecto

1. Clona el repositorio
    ```sh
    git clone https://github.com/tu-usuario/surveyssolutions.git
    cd surveyssolutions
    ```
2. Instala las dependencias: `npm install`
3. Corre el servidor: `npm run dev`


## Flujo de autenticación (Context API)

A través de un contexto para la autenticación, hacemos la gestión de usuarios, el token generado persiste gracias al LocalStorage.


##  Pendiente / Mejora futura

- Mensajes de error más detallados
- Mejor manejo de estados de carga y errores
- Paginación y búsqueda de encuestas
- Tests unitarios con Jest