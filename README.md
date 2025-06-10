# PAC 4 - Tecnología

Se realizará con *Github Classroom* donde encontrarán el proyecto base y podrán realizar los cambios requeridos.

Se permite usar material.

*Nombre (nro. de estudiante):* ...

## Descripción
Este repositorio contiene un proyecto vacío de Angular y una estructura de carpetas para tomar como base.

**El objetivo de la actividad es completar el proyecto inicial para poder cumplir con los requerimientos del sistema de gestión de productos.**

## Requerimientos

1. Ver la lista de productos, pudiendo filtrar por populares y poco populares. ***[49%]***
2. Poder navegar entre las vistas de *Inicio* y *Productos*. ***[35%]***
    - La vista de *Inicio* debe tener un mensaje de bienvenida ("Bienvenido al sistema de gestión de productos").
    - La vista de *Productos* debe mostrar la lista de productos, con el filtrado. El botón para editar cada producto NO se debe mostrar.

## Interacción con la API
La API a utilizar es la siguiente: `https://fakestoreapi.com`.
Los endpoints a utilizar son:
- `GET /products`: Obtener todos los productos.
- Los productos tienen una propiedad `rating.count` que indica las reseñas/popularidad.
- Considerar "popular" si `rating.count >= 200`, "poco popular" si `rating.count < 200`.

## Consideraciones
- Utilizar los componentes `products`, `product-list` y `product-item` para mostrar los productos.
- Utilizar el servicio `product.service.ts` para interactuar con la API.
- Se permite hacer el filtrado de productos en el frontend, no es necesario recurrir a la API para ello.
- Los productos deben mostrar: título, precio y popularidad (popular/poco popular).

## Letra

1. Realizar todos los cambios necesarios para cumplir con la TOTALIDAD de los requerimientos. ***[84%]***
2. Describir, con palabras, como realizarían un requerimiento que permita marcar un producto como favorito. ***[15%]***
3. Completar, al inicio de este archivo, el nombre y número de estudiante. ***[1%]***

*En la sección anterior hay un aproximado del porcentaje del total que representa cada requerimiento.*

## Requerimiento: marcar como favorito

(Pueden suponer que la API tiene un endpoint para gestionar favoritos de usuario)

<Completar aquí>

## ¿Cómo levantar la aplicación?

1. Moverse dentro de aplicación de Angular

   ```
   cd product-manager
   ```

2. Instalar las dependencias

   ```
   npm install
   ```

3. Levantar el proyecto

   ```
   ng serve --open
   ```

## Suposiciones

En caso de ser necesario, en esta sección se pueden agregar suposiciones que se consideren necesarias para completar la actividad.
