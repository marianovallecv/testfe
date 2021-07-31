# Proyecto Test (frontend)
***
Este repositorio de Git contiene el código fuente de la APP **testfe**, que consume la API **testbe**, ademas contiene informacion acerca de su uso.


## Contenidos
* [1. Considerations](#Considerations)
* [2. Prerequisites](#Prerequisites)
* [3. Instalation](#Instalation)
* [3.1 Sources](#Sources)
* [3.2 Build](#Build)
* [3.3 Database](#Database)
* [4. IDE](#IDE)
* [5. Test](#Test)
* [6. Technologies](#Technologies)
* [7. API](#API)
* [8. Author](#Author)

## Considerations:
Antes de importar este proyecto, tener en cuenta que solo esta configurado para correr localmente.
Este proyecto está en un estado de prueba, actualmente en desarrollo.
Se usaran dos proyectos:

* **testbe:** Para ejecutar el backend:
* **testfe:** Para ejecutar el frontend

En este apartado se trataran las especificaciones del **frontend**.

## Prerequisites
- Tener instalado el proyecto **testbe:**.
- En caso de querer desarrollar funcionalidades contar con un IDE como por ejemplo Visual Studio Code.

## Instalation

##### Sources
* Descargar el proyeco desde el [repositorio GITHUB](https://github.com/marianovallecv/testfe)

##### Build
Podemos invocar el siguiente comando desde la raíz del repositorio si queremos construir el repositorio completo.
Los artefactos de construcción se almacenarán en el directorio `dist /`.

```
ng build
```

## Server

Ejecutar `ng serve --o` para generar un servidor de desarrollo.
Navegar a `http://localhost:4200/`.
La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## IDE
Este repositorio contiene solamente un módulos.
Simplemente puede importar ese módulo en particular en Visual Studio Code.

## Technologies
Listado de las tecnologías usadas para este proyecto:
* [Angular](https://angular.io): Version 12.0.4
* [TypeScript](https://www.typescriptlang.org): Version 4.2.3
* [Bootstrap](https://getbootstrap.com): Version 5.0.2
* [HTML](https://www.w3.org/html)

## API

Consumo de la API testbe. Ejemplos:

### Login:
* Puede usar el usuario "admin (ROLE_ADMIN)" o "user (ROLE_USER)" con el mismo pass.

```
GET 'http://localhost:8020/auth/login'
```

### Candidates:

#### Get one:
Reemplazar [ID] por el id deseado.


```
GET 'http://localhost:8020/candidates/[ID]'
```

#### Get pages:

```
GET 'http://localhost:8020/candidates'
```

#### Get pages filter:
Reemplazar [DATA] por el documento o nombre t apellido, para obtener una paginacón de los candidatos (nombre completo y DNI).

```
GET 'http://127.0.0.1:8020/candidates/filter/[DATA]' \
```

#### Get by email:
Reemplazar [EMAIL] por el email deseado, para obtener la información completa de un candidato en particular filtrado por email.

```
GET 'http://localhost:8020/candidates/email/[EMAIL]'
```

#### Get by document:
Reemplazar [DOCUMENT] por el documento deseado, para obtener la información completa de un candidato en particular filtrado por documento.

```
GET 'http://localhost:8020/candidates/document/[DOCUMENT]'
```

#### Get by fullName:
Reemplazar [FULL_NAME] por el nombre y apellido deseado, para obtener la información completa de un candidato en particular filtrado por nombre y apellido.

```
GET 'http://localhost:8020/candidates/fullName/[FULL_NAME]'
```

#### Post one:
Reemplazar "[FULL_NAME]", [DOCUMENT], "[BIRTH]", "[ADDRESS]", "[PHONE]", "[EMAIL]" por los valores deseados, para crear un nuevo canditato.

```
POST 'http://localhost:8020/candidates/'
--data-raw '{
    "fullName": "[FULL_NAME]",
    "document": [DOCUMENT],
    "birth": "[BIRTH]",
    "address": "[ADDRESS]",
    "phone": "[PHONE]",
    "email": "[EMAIL]"
}'
```

#### Put one:
Reemplazar [ID] por el id a modificar y "[FULL_NAME]", [DOCUMENT], "[BIRTH]", "[ADDRESS]", "[PHONE]", "[EMAIL]" por los valores deseados, para modificar un canditato.

```
PUT 'http://localhost:8020/candidates/[ID]'
--data-raw '{
    "fullName": "[FULL_NAME]",
    "document": [DOCUMENT],
    "birth": "[BIRTH]",
    "address": "[ADDRESS]",
    "phone": "[PHONE]",
    "email": "[EMAIL]"
}'
```

#### Delete one:
Reemplazar [ID] por el id deseado, para eliminar un canditato.

```
DELETE 'http://localhost:8020/candidates/[ID]'
```
## Author
* **Mariano Valle** - *Trabajo Inicial, Documentacion* - [marianovallecv](https://github.com/marianovallecv/testfe/tree/master/doc)

Tambien puedes mirar la lista de todos mis [proyectos](https://github.com/marianovallecv).
