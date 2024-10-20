
# Gestión de Reservas - Frontend del Sistema de Vuelos

Este es el frontend del sistema de gestión de reservas de vuelos. Está desarrollado en Angular y permite a los usuarios buscar vuelos, hacer reservas, y otras operaciones relacionadas con la gestión de vuelos.

## Requisitos

### Software Necesario:
- **Node.js** (versión 18 o superior)
- **Angular CLI** (versión 16 o superior)
- **Git** para clonar el repositorio

### Dependencias del Proyecto:
Las dependencias principales que el proyecto utiliza están definidas en el archivo `package.json`. Algunas importantes incluyen:
- Angular Material
- RxJS
- Angular JWT

## Configuración del Proyecto

### Clonar el Proyecto
Puedes clonar el repositorio desde el control de versiones (Git):
```bash
git clone https://github.com/Jerson-P/prueba-bigview-web.git
cd frontend-reservas-vuelos
```

### Instalar Dependencias
Una vez clonado el repositorio, instala las dependencias necesarias con el siguiente comando:
```bash
npm install
```

### Configurar el Backend (Cambiar el localhost)
Para que el frontend se comunique correctamente con el backend, debes configurar la URL del backend en el archivo **environment.ts**. 

1. Ve al archivo `src/environments/environment.ts`.
2. Cambia la propiedad `apiUrl` para que apunte a la IP del backend que estés utilizando. Por ejemplo:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://<IP_BACKEND>:<PUERTO>' // Reemplaza con la IP y puerto donde estén desplegados tus microservicios
};
```

### Cambiar el Puerto del Frontend
Por defecto, el proyecto se ejecuta en el puerto 4200. Si deseas cambiarlo, puedes hacerlo modificando el archivo `angular.json` en la sección de `serve`:
```json
"options": {
  "port": 4200
}
```

## Ejecutar la Aplicación en Local

Para ejecutar el proyecto en tu entorno local, asegúrate de haber configurado el archivo `environment.ts` con la IP correcta del backend y luego usa el siguiente comando para iniciar la aplicación:
```bash
ng serve
```
Esto iniciará la aplicación en el puerto por defecto (4200), o el puerto que hayas configurado, y podrás acceder a ella desde tu navegador en:
```
http://localhost:4200
```

## Estructura del Proyecto

El proyecto sigue una estructura estándar de Angular:
```bash
prueba-bigview-web/
├── src
│   ├── app
│   │   ├── components
│   │   │   └── login
│   │   │   └── nuevo-vuelo-dialog
│   │   │   └── registrar
│   │   │   └── reservas-usuario
│   │   │   └── user-bar
│   │   │   └── vuelos
│   │   ├── services
│   │   └── guards
│   └── environments
├── angular.json
├── package.json
└── README.md
```

- **src/app/components**: Contiene los componentes de la aplicación, como el de vuelos y reservas.
- **src/app/services**: Contiene los servicios para la comunicación con el backend.
- **src/environments**: Contiene la configuración de ambientes.
- **angular.json**: Configuración de Angular CLI.
- **package.json**: Archivo de configuración de Node.js y gestión de dependencias.

## Ejemplos de uso de la API
El frontend realiza peticiones a diferentes endpoints del backend, como por ejemplo:
- **Filtrar vuelos**: Una petición POST al endpoint /vuelo/buscar con los filtros aplicados, como origen, destino y fecha.
 
```bash
this.http.post(`${this.apiUrl}/vuelo/buscar`, filtros).subscribe(
  (response: any) => {
    this.vuelos = response.objectResponse;
  },
  (error: any) => {
    alert('Error al filtrar vuelos');
  }
);

```
- **Reservar vuelo**: Se hace una petición POST al endpoint /reserva con el id del vuelo y el id del usuario autenticado.

```bash
this.http.post(`${this.apiUrl}/reserva`, reserva).subscribe(
  (response) => {
    alert('Reserva realizada exitosamente');
  },
  (error) => {
    alert('Error al reservar el vuelo');
  }
);

```
## Pruebas

Este proyecto incluye pruebas unitarias configuradas con Karma y Jasmine. Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
ng test

```

## Contacto

Si tienes alguna pregunta o problema con el proyecto, por favor contacta a **jersons156@gmail.com**.
