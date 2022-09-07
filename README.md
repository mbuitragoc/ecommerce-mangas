<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mbuitragoc/ecommerce-mangas">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Manga Ecommerce Project</h3>

  <p align="center">
    Una tienda de mangas y collecionables creada para el curso de React en <a href="https://www.coderhouse.com.co">Coder House</a>
    <br />
    <br />
    <br />
    <a href="https://github.com/mbuitragoc/ecommerce-mangas">View Demo</a>
    ·
    <a href="https://github.com/mbuitragoc/ecommerce-mangas/issues">Report Bug</a>
    ·
    <a href="https://github.com/mbuitragoc/ecommerce-mangas/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Ecommerce Mangas Screen Shot][ecommerce-screenshot]](https://ecommerce-mangas.vercel.app)

En este proyecto creamos una pagina de ecommerce funcional, con diferentes secciones, detalles de cada producto, y diferentes opciones en cuanto a la configuracion de los productos.

Manejamos los componentes de la interfaz de usuario mediante el framework React, utilizando una organizacion de componentes dentro de contenedores.

Se utilizaron los estados de react para agregar mayor interactividad a la pagina y poder mostrar en tiempo real los items y el carrito que adiciona el usuario.

Algunas de las caracteristicas de React que se utilizaron:

- States
- Contexts
- Routes
- Forms 
- Components

Adicional a esto se utilizo Chakra UI para los estilos y Firebase para un manejo de base de datos sencillo mediante el uso de:

- Collection
- Docs
- Get & Add

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Para la construccion de este proyecto se partio de un proyecto creado con Vite, utilizamos React como framework de frontend y Chakra.ui para los estilos de los diferentes componentes.

Utilizamos Firebase para poder mantener una base de datos en tiempo real y llevar el control de las ordenes que se realizan.

Para poder manejar las versiones se utilizo git y para llevar el repositorio GitHub.

Para el deployment del ecommerce utilizando los servicios de vercel

- [![React][react.js]][react-url]
- [![Github][github]][github-url]
- [![Vercel][vercel]][vercel-url]
- [![Vite][vite]][vite-url]
- [![Firebase][firebase]][firebase-url]
- [![Chakra.ui][chakra.ui]][chakra.ui-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Para poder correr este proyecto de manera local es necesario seguir estas instrucciones

### Prerequisites

Es fundamental tener npm installado desde la ultima version.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Para poder correr esta aplicacion desde un servidor local debemos de seguir estos pasos_

1. Clonar el repositorio
   ```sh
   git clone https://github.com/mbuitragoc/ecommerce-mangas
   ```
2. Instalar los paquetes via NPM
   ```sh
   npm install
   ```
3. Dentro de la carpeta `/src/utils` remplazamos el contenido de `firebase.js` por lo que obtenemos de nuestra consola de [firebase](https://firebase.google.com/?hl=es)
   
4. Para poder correr nuestra aplicacion utilizar
   ```sh
   npm run dev
   ```
5. Para poder salir de la instancia que se crea
   ```sh
   ^C s
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

A partir de este proyecto se puede visualizar el uso de los diferentes componentes y funciones de React. Podemos interactuar y ver el manejo desde nuestra base de datos y como se utiliza.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Diseño de los componentes
- [x] Conexión con la base de datos
- [x] Deploy mediante Vercel
- [ ] Soporte a diferentes modos
  - [x] Light
  - [ ] Dark
- [ ] Implementacion con Stripe para ejemplificar el manejo de pagos

Puedes visitar [open issues](https://github.com/othneildrew/Best-README-Template/issues) para una lista de funciones solicitas y posibles errores.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Al ser un proyecto de codigo abierto las contribuciones de la comunidad son uno de los mayores fuertes. Cualquier contribucion que realicen sera **altamente apreciada**.

Si tienes una sugerencia/funcionalidad que crees que puede mejorar este projecto por favor has fork al repositorio y abre un pull request. Tambien puedes abrir un issue con el tag **"mejoras"**

Muchisimas Gracias ❤️

1. Has fork del proyecto
2. Crea una nueva branch para la funcionalidad que quieres agregar (`git checkout -b feature/AmazingFeature`)
3. Realiza commit a los cambios que realizas (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch que agregaste (`git push origin feature/AmazingFeature`)
5. Abre una Pull Request para que podamos validar la funcionalidad

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Miguel Buitrago - [@MiguelBuitragoC](https://twitter.com/MiguelBuitragoC) - mbuitragocastillo@gmail.com

Project Link: [https://github.com/mbuitragoc/ecommerce-mangas](https://github.com/mbuitragoc/ecommerce-mangas)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Agradecimieentos especiales a todas estas herramientas que facilitaron el trabajo y el manejo de varias partes del proyecto.

- [Simple Icons slugs](https://github.com/simple-icons/simple-icons/blob/develop/slugs.md)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Choose an open source license](https://choosealicense.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/mbuitragoc/ecommerce-mangas?style=for-the-badge
[contributors-url]: https://github.com/mbuitragoc/ecommerce-mangas/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mbuitragoc/ecommerce-mangas?style=for-the-badge
[forks-url]: https://github.com/mbuitragoc/ecommerce-mangas/network/members
[stars-shield]: https://img.shields.io/github/stars/mbuitragoc/ecommerce-mangas?style=for-the-badge
[stars-url]: https://github.com/mbuitragoc/ecommerce-mangas/stargazers
[issues-shield]: https://img.shields.io/github/issues/mbuitragoc/ecommerce-mangas?style=for-the-badge
[issues-url]: https://github.com/mbuitragoc/ecommerce-mangas/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mbuitragoc/

[ecommerce-screenshot]: public/Tienda.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com
[vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://vercel.com/
[chakra.ui]: https://img.shields.io/badge/Chakra.ui-319795?style=for-the-badge&logo=chakraui&logoColor=white
[chakra.ui-url]: https://chakra-ui.com
[vite]: https://img.shields.io/badge/Vitejs-242424?style=for-the-badge&logo=vite
[vite-url]: https://vitejs.dev
[firebase]: https://img.shields.io/badge/Firebase-2C384A?style=for-the-badge&logo=firebase
[firebase-url]: https://firebase.google.com