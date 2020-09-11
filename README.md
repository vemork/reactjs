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


