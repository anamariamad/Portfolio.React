# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # PortfolioReact
## Este es un proyecto para realizar un portfolio.
```
Para acceder a este repositorio debes tener instalados los siguientes programas: 

- Node

- Tener creada la estructura de React:
https://es.react.dev/learn/start-a-new-react-project

- Vite:
https://vitejs.dev/guide/
```


## Para abrir el repositorio escribe en la terminal de Visual  Studio Code (VSC):
```
"git clone" seguido del nombre del repositorio.
```




## Sigue después las instrucciones que te aparecerán en la pantalla:
```
"or create a new repository on the command line
echo "# nombre del repositorio" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin dirección del repositorio
git push -u origin main"
```

## Como vite también utiliza npm escribimos en la terminal: "Npm create vite@latest ." (cuidado con el punto)

```
Nos aparecera una lista de frameworks, elegimos react.
```

## Seguidamente elegiremos una "variant" de las que aparecen, en este caso, JavaScript.

```
Una vez creada introduciremos los comandos:
- "cd seguido del nombre que hayamos elegido"
- "npm install"
- "npm run dev"
```

## Y nos va a entregar un puerto de acceso donde poder visualizarlo.


## ---------------------------------------------------------------------------


## * Conexión con AXIOS

a) Instalar Axios:
```
Abre la terminal en la carpeta de tu proyecto de React y ejecuta: "npm install axios"/ "npm i axios"
```
b) Importar Axios:
```
Donde desees utilizar Axios, importa la biblioteca con: import axios from 'axios';
```
c) Realizar una solicitud GET:

```
axios.get('https://ejemplo.com/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
```
d) Realizar una solicitud POST

```
Para realizar una solicitud POST con Axios, utiliza:
axios.post('https://ejemplo.com/api', {
    data: {
        nombre: 'Juan',
        edad: 30
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});


