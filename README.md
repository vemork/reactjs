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

# Props: Comunicación entre Componentes

Así como las funciones reciben parámetros, los componentes reciben propiedades (no importa el tipo de componente) son solo de lectura, pero si son necesario cambiarlas se deben cargar en la lógica del componente dentro de una variable.

Una forma habitual es destructurar los datos, es decir, extraer el valor de o los parámetros desde props, siendo una forma un poco más amigable dentro de la lógica del componente.

(curso de javascript avanzado)

## Ciclo de vida de un componente

Montaje: el componente se crea junto a la lógica, componentes internos y es insertado en el DOM

Actualización: el componente está pendiente de cambios, en el state o props, lo cual se comunica en una acción dentro del componente.

Desmontaje: el componente finaliza, es la forma de eliminar de la representacion del DOM.

Manejo de Errores: al ejecutarse el código y encontrar un error, se puede encapsular y manejar para entender lo que sucedió.No es necesario que un componente pase secuencialmente por todas las fases.

En el montaje se llaman los siguientes métodos:

Constructor(),
getDerivedStateFromProps(),
render(),
componentDidMount()

En la actualización se llaman los siguientes métodos:

getDerivedStateFromProps(),
shouldComponentUpdate(),
render(),
componentDidUpdate(),

En el desmontado se llaman los siguientes métodos:

componentWillUnmount()

En el manejo de errores se llaman los siguientes métodos:

getDerivedStateFromError(),
componentDidCatch()

# State de un componente

Es un objeto al cual podemos definir variables, de diferente tipo e incluso funciones, a las que podemos acceder desde nuestro componente.

Si se desea modificar el state por medio de un evento click por ejemplo, es importante tener en cuenta que se debe usar el camel case, por ejemplo un evento click se usa onClick con la letra C en mayúscula y así en general para los demás.

# Instalación y configuración de entorno

```
git init : para inicializar repositorio

npm init -y : para crear metadatos del proyecto, la y preconfigura el proyecto con un package.json 
```

El package.json nos permite tener la historia de los elementos instlados, configuraciones y scritps del proyecto.

En src van todos nuestros recursos con los que vamos a trabajar durante todo el proyecto.

En src/components donde van todos nuestros componentes

En public van a ir todos los archivos y elementos que serán enviados a producción.

```
npm install react react-dom : para instalar la librería 
```

se debe prestar atención durante la instalación a alertas (warnings) o vulneravilidades que el sistema reporte y evaluar si usar o no esos elementos.


```
package-lock.json : permite manejar el versionado de paquetes del proyecto 
```

# Agregando compatibilidad con todos los navegadores usando Babel

Babel permite crear js moderno y compatible con todos los navegadores

```
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save -dev : para instalar todo lo necesario de babel, --save -dev para indicar que se guarde como una dependencia solo en desarrollo
```

```
Usage of the `--dev` option is deprecated. Use `--also=dev` instead.
```
.babelrc será el archivo que contendrá las configuraciones necesarias, debe arrancar con . para que el sistema entienda que es un archivo que debería ocultar, de esta forma ocurre en sistemas unix

```
@babel/present-env  : permite trabajar con ECMA5 y ECMA6
@babel/preset-react : permite trabajar con react
```

# Webpack: Empaquetanto nuestros módulos

Nos ayuda a preparar nuestro proyecto para un ambiente de desarrollo local/producción. Toma todos nuestros recursos y los optimiza para poderlos publicar.

 ```
 npm install webpack webpack-cli html-webpack-plugin html-loader --save --also=dev
 ```

 hecho esto se crea la carpeta dist con los archivos principales, bundle contine todo el proyecto compilado y optimizado.

Una vez instalado se debe configurar el script que corresponde en package.json, agregamos la linea en scripts

```
"build": "webpack --mode production"
```


 # Webpack Dev Server : Reporte de errores y cambios en tiempo real

Con esta configuración podemos construir un entorno de desarrollo local que permita ver los cambios en tiempo real

```
npm install webpack-dev-server --save --also=dev
```

Una vez instalado se debe configurar el script que corresponde en package.json, agregamos la linea en scripts

```
"start": "webpack-dev-server --open --mode development"
```

# Estilos con SASS

Para instalar SASS dentro del proyecto vamos a usar los siguientes paquetes:

```
npm install mini-css-extrat-plugin : permite extraer el css del bundle resultante para crear uno nuevo

css-loader node-sass sass-loader --save --also=dev
```

ahora se debe agregar la configuración necesario dentro del webpack.config.js agregando una nueva regla e importando el MiniCssExtractPlugin

# Configuración final : ESLint y Git ignore

ESLint nos ayuda a prevenir errores, nos ayuda a detectar errores o typos manteniendo un estándart dentro de nuestro código.

```
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

En caso de presentar problemas al realizar la descarga de paquetes desde npm me pueden usar los siguientes comandos.

```
# first this
> npm config rm proxy
> npm config rm https-proxy

# then this
> npm config set registry https://registry.npmjs.org/
```

En la raíz se crea el archivo (.eslintrc) el cual contiene una serie de reglas recomendadas para que, al momento de codificar, las cosas me hagan de la mejor manera. Cada uno de estos elementos tiene más información que puede ser consultada en la web.

adicional se debe crear el archivo (.gitignore) el cual evitara que al momento de ir a producción se carguen archivos que no son adecuados, como por ejemplo el node_modules.


# Arquitectura de componentes

Se puede separar una vez se tenga la parte visual diseñada (incluso en sus primeras etapas) en diferentes componentes y en su interior los elementos que forman parte de ellos.

En ocasiones un componente puede contener en su interior componentes internos y a su vez pueden en algunas ocasiones poder reusarse a lo largo de todo un sitio.

# Estructura del proyecto

Cuando trabajas en React debes recordar que no se puede usar la palabra class (pues se encuentra reservada por la librería) por lo cual se debe usar className, además se debe tener la precaución de colocar la barra inclinada (/) como cierre en cada una de las etiquetas de HTML

Una buena forma de organizar el trabajo es creando un nuevo directorio llamado contenedores dentro de nuestro proyecto, dentro de el un archivo App.jsx que nos ayudará a agregar nuestros otros componentes.

Recuerda colocar los imports dentro de cada componentes para incluir los estilos.

# Estructura y Estilos de Carousel y Carousel Item

Algo importante al construir el componente de categorias es estructurarlo de tal forma que encapsulado en un <Div> yo pueda mandar un hijo y hacer un render de los elementos que serán en este caso los videos.

Usando la instruccion "children" puedo insertar uno o varios componentes, que se pasa por medio de los props. 

Repetimos el mismo análisis al momento de crear el componente Carousel, colocando los items como hijos, pasados como propiedad.

hecho esto se puede complementar los componentes y estilos que hagan falta para cada uno de los componentes hasta llegar al foorter.

# Añadiendo imágenes con Webpack

Con ayuda de webpack podemos importar archivos a nuestro proyecto y separar para cuando se vayan a enviar a proudcción.

vamos a instalar un paquete necesario para webpack 

```
npm install file-loader --save -also=dev
```

Ahora dentro del weback.config.js se debe añadir una nueva regla, para elementos multimedia.

# Imports, variables y fuentes de Google con Sass

vamos a crear un archivo llamado (vars.scss) que contendra algunos elementos globales para nuestro sitio y que gracias a SCSS podemos usar como variables.

# Creando una Fake API

Vamos ahora a simular una API, vamos a obtener desde un json los item del carousel, por medio de un complemento json-server y así hacer un render de los elementos en el proyecto.

Para este segmento vamos a crear y cargar el archivo InitialState.json con la información necesaria para que nuestra fake API funcione correctamente, luego vamos a instalar el paquete json-server para poder consumirlo de forma correcta.

Es importante tener en cuenta que esta configuración requiere tener permisos para su ejecución, puede que no tenerlos nos genere error. Para que esto no ocurra recuerda usar la palabra SUDO en caso de unix o configurar la terminal como admin en el caso de windows.

Al tener instalado este paquete se debe correr en una pestaña nueva dentro de nuestra terminal. 

```
npm install json-server -g
json-server initialState.json : fake API runningjs

```

# React Hooks: useEffect y useState

Fue presentado oct del 2018, esta implemetación le da estado y ciclo de vida a componentes tipo función (Stateless), como no se entendía muy bien los conceptos de clases, sus propiedades y la transmisión de estas entre componentes dio pie y fuerza a esta nueva forma de trabajar.

Usando los hooks, podemos hacer llamados (de estados y ciclo de vida) y paso de propiedades entre ellos sin importar que tan lejanos (o inmersos) se encuentren.

Disponible desde la version 16.8, en caso de tener que migrar un proyecto de una versión anterior es muy importante analizar la compatibilidad de este cambio, si desde el inicio se van a proyectar usar es mejor hacerlo desde el inicio.

useState : manejo el estado

useEffect :  hago las trasmisiones (peticiones a un API, transmitir un evento, o estar escuchando algún cmabio)

Dentro del app.jsx vamos actualizar el componente React, para poder traer dos funciones especiales, useEffect y useState.

```
import React, {useState, useEffect } from 'react';

```

el componente debe cambiar puesto que si tengo un return implícito (manejado por callback) no me será suficiente, por lo tanto debo tenerlo de forma explicita para poder continuar.

ahora uso las siguientes propiedades videos, setVideos e igualo a useState que puede recibir como parámetros (arreglos, objetos, numeros, booleanos) de inicialización.


```
const [ videos : para manejar el estado,
        setVideos : para actualizar el estado
      ] = useState ([])
```

luego usamos useEffect para hacer el llamado al fake API y obtener nuestra data, para así actualizar nuestro estado por medio de setVideos. Adicional useEffect espera "escuchando" cualquier cambio en cualquier propiedad para poder gestionarlo.
si no se pasa esta propiedad se crea un loop infinito.





