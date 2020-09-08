# reactjs

# Curso Práctico de ReactJS

React es un librería (biblioteca de js) cuya finalidad principal es contribuir a la creación de interfacez de usuariorios

Es una librería declarativa basada en componentes, se puede usar en la web, escritorio o mobile y en multiplataforma.

2013 Nace en Facebook, como tecnología para mejorar el timeline.

# DOM Virtual DOM y React DOM

el V-DOM es una técnica que implementa React para darle performance (rendimiento) y velocidad a los desarrollos, usando una copia del DOM del sitio.

únicamente vamos actualizar los nodos especificos (sección) que requiere cambios

(Curso de frontend Developer)

# Create React App y Tipos de componentes

En la terminal y sobre la ruta que se almacenen por defecto los proyectos se puede usar el comando, para descargar todo lo necesario y arrancar el entorno de desarrollo local

Este comomando crea un proyecto (base) completo con react dentro de un directorio llamado holamundo:

```
npx create-react-app holamundo 
```

Una vez dentro del proyecto podemos arrancarlo con el siguiente comando:

```
npm run start ó npm start
```

node modules contiene gran cantidad de elementos importantes para el desarrollo de nuestra aplicación, debe estar ignorada porque no se debe subir nunca a producción 

public contiene todos los archivos que serán enviados a producción

src, es la carpeta más importante donde encontramos los recursos necesarios para nuestra aplicación

## Componente Stateful

Este componente está conformado con estructura de clases, con manejo ciclo de vida y estado, es uno de los más robústos.

Todos los componentes por convencion deben iniciar con Mayúscula.

## Componente Stateless

Este componente es mucho más liviano pues no depende de un estado, ni hace manejo de ciclo de vida, puden manejar la lógica, son funciones que nos permiten enfocarnos en una parte partícular.

## Componente Presentacional (bonus)

Este componente contiene una parte a renderizar muy particular para nuestras aplicaciones, por lo que prácticamente se hace de forma directa, carecen de lógica y propiedades.

# JSX: JavaScript + HTML

Mezcla un poco de HTML con XML con Javascript, la idea es no tener disueltas todas las partes importantes de un componente, como por ejemplo los elementos visuales y funcionales.

se debe usar en lugar de class className para hacer referencia a las clases CSS, al mismo tiempo se debe tener muy presente cerrar todas las etiquetas HTML utlizadas.

Es importante recordar que nuestro archivo de entrada es index.js aca se importan todas nuestros componentes y mucho más. Las extensiones .jsx .js se pueden agregar y no deberían generar problema, por lo general no se colocan.

