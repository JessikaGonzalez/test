# Test

## 1. Preguntas Teóricas

### Frontend

#### React

****1. Explica el ciclo de vida de un componente en React.****

El ciclo de vida de un componente, tiene que ver con el momento en el que el DOM se hace presente, se divide en 3: **Mount**, **Update** and **Unmount**. En el **Mount** sirve para crear, declarar e inicializar los states, puede ser antes del Render del DOM o después, es decir aquí se puede manipular el DOM durante el render. Se pueden agregar las funcionalidades del fetch para obtener los datos de las APIs. En el **Update**, aquí se hace una re Renderización de los componentes, cuando se hacen cambios en el props o en los states, durante la manipulación del DOM por parte de la interfaz. En el **Unmount** se elimina el componente del DOM. Por lo general son funcionalidades de limpieza, restaurar, resetear y/o eliminar, antes o después de que se vaya a eliminar el DOM.

****2. ¿Qué son los hooks en React y para qué se utilizan? Menciona al menos tres hooks comunes.****

Los hooks son funciones que se implementan en los componentes funcionales y que manipulan los states y su ciclo de vida.
**useState**
**useEffect**
**useCallback**

#### Redux

****1. ¿Qué es Redux y cuál es su propósito en una aplicación React?****

Redux es una librería de Javascript, que maneja los state globales de una aplicación, se pueden usar a través de los componentes de una manera eficiente. Su propósito en React, es gestionar de forma eficiente los states a través de los componentes, cuando la aplicación tiene muchos componentes que no tienen relación de datos entre ellos y se necesita acceder a los state, esto hace que no todos los states se tengan que actualizar dentro de todos los componentes. También como a veces se usan muchos componentes y states, es bueno tener una mejor arquitectura donde los states estén en un lugar centralizado.

****2. Describe los conceptos de *actions*, *reducers* y *store* en Redux.****

*store* es donde se guarda el state completo de la aplicación.
*actions* son objetos que contiene propiedades, básicamente la información que vamos a actualizar en el store.
*reducers* son funciones que usa el state actual y el action y actualizan el state y devuelve el state modificado.

### Backend

#### NodeJs

****1. ¿Qué es el Event Loop en Node.js y cómo funciona?****

El event loop es un proceso que está ejecutando en un bucle de forma constante, espera tareas desde el sistema Web y va ejecutando funcionalidades asíncronas sin bloquear el sistema web, revisa una cola de tareas y si está vacío las ejecuta en cierta prioridad o las pasa al task queue. Si el task de la task queue tiene que ver con el DOM, pasa por el pipeline para renderizar el DOM en el tiempo en que lo indica, cuando termina se va la cola de tareas para ejecutarlo o mostrarlo en el DOM.

****2. Explica la diferencia entre `require` y `import` en Node.js.****

El `require` carga todo su contenido de manera síncrona y se asigna a una variable, es cuando usamos el CommonJS standard
El `import` carga su contenido de manera asíncona, es perteneciente al ES6 standard, y no carga todo el contenido, si no permite solo cargar ciertos módulos en caso de así necesitarlo y evitar cargar contenido innecesario

#### Arquitectura de Archivos

****1. ¿Cuáles son las mejores prácticas para organizar la estructura de carpetas en una aplicación React?****
- Por functionalidad / modular. Que estén centralizadas las funciones, pero dentro de las funciones, podemos modularlo. Para mi es la mejor forma en la que todo esté en un lugar, si es que lo tenemos que cambiar.

****2. Describe una estructura de directorios ideal para un proyecto fullstack que utiliza React en el frontend y alguna de las siguientes tecnologías en el backend: Node.js, Python o .NET.****

`Frontend`
- src/
  - __test__
	- endpoints/
		- user.ts
  - assets/
		- icon.svg
	- config/
  - components/
		- Alerts/
			- index.tsx
      - style.scss
	- interfaces/
    - user.ts
  - middlewares/
  - models/
	- reducers/
    userSlice.ts
  - utils/
  - views/
		- Setting/
			- AccountDetails/
        - index.tsx
        - style.scss

`Backend`
- src/
  - __test__
  - assets/
  - config/
  - controllers/
    - user.ts
  - interfaces/
  - middlewares/
    - error.ts
    - cache.ts
  - routes/
    - user.ts
  - util/


## 2. Ejercicios Prácticos

Instrucciones:

`mkdir ~/test`

`cd ~/test`

`git clone https://github.com/JessikaGonzalez/test.git`

`cd ~/test/users`

`nvm install v20`

`nvm use 20`

`npm install`

`npm run dev`

Open other command line window

`cd ~/test/server-users`

`nvm use 20`

`npm install`

`npm run start`

Now are running both front-end and back-end


## 3. Proyecto Pequeño

Para probar el back end de las tareas en POSTMAN:

GET: `http://localhost:4020/api/tasks`

Allá se encuentran todos los id, por favor, reemplaza el {id} por el id correspondiente

GET: `http://localhost:4020/api/task/{id}`

POST: `http://localhost:4020/api/task/`

con el body:
```
{
    "title": "New Task",
    "description": "new des",
    "state": "In Progress"
}
```

PUT: `http://localhost:4020/api/task/{id}`

Obtener el id, del New Task y reemplaza el {id} por el id correspondiente

con el body:
```
{
    "title": "Change name Task",
    "description": "new des",
    "state": "In Progress"
}
```

DELETE: `http://localhost:4020/api/task/{id}`

Obtener el id, del cualquier task y reemplaza el {id} por el id correspondiente
