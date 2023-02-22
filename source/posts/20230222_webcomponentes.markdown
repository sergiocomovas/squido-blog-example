---
title: Componentes Web - Lit - WebComponents - Solid - Alpine...
permalink: webcomonents
description: Descubre el motivo por los que ahorras tiempo usando Componentes Web incluso si no usas compiladores. 
date: '2022-10-31 13:33:00'
tags: 
  - microservicios
  - javascript
  - lit
  - alpinejs
  - webcomponents
  - componentes
  - proyectos
  - 2023
mainimage: '../content/images/posts/20230222184547.png'
---
>![Componentes web sin aditivos](..\content\images\posts\20230222204632.png)  
>¡Hola! En este artículo voy a hablar sobre los componentes web, qué son y por qué son útiles. También explicaré cómo funcionan los custom elements, que son una forma de crear etiquetas HTML personalizadas para renderizar componentes web. Además, hablaré sobre cómo se pueden crear componentes web utilizando JavaScript vanilla, así como utilizando librerías como LitElement de Google.

## Componentes Web: Qué son y por qué son útiles

Los **componentes web** son elementos de una página web que encapsulan una funcionalidad específica y se pueden reutilizar en diferentes páginas o aplicaciones web. Al crear componentes web, se pueden reducir la cantidad de código repetitivo que se utiliza en una página web y, por lo tanto, se puede mejorar la **mantenibilidad** y la **escalabilidad** de la aplicación.

Los componentes web son elegidos por los equipos de desarrollo por varias razones. En trabajos complejos con mucha incertidumbre, es importante trabajar con **sprints cortos** de tiempo y entregar un **MVP** (Producto Mínimo Viable) a tu cliente o gerente de la empresa para generar valor constantemente. Esto permite obtener retroalimentación temprana y constante de los interesados, lo que puede ayudar a ajustar y refinar el producto a medida que se desarrolla. Además, en proyectos complejos, es probable que surjan nuevos requisitos y cambios constantemente: la filosofía **Scrum**, que es un marco de trabajo ligero y flexible, puede permitir una mayor flexibilidad para manejar estos cambios.

## Custom Elements

Los **Custom Elements** son una característica de HTML que permiten crear **etiquetas personalizadas**. Estas etiquetas personalizadas se pueden utilizar para renderizar componentes web. Por convención, las etiquetas personalizadas se nombran utilizando un guión (-) para separar las palabras. Por ejemplo, un elemento personalizado para un reproductor de música podría llamarse `<music-player>`. Los Custom Elements se pueden crear utilizando JavaScript y se pueden registrar con el navegador utilizando el método `customElements.define()`.

## JavaScript Vanilla vs Lit

JavaScript Vanilla es el lenguaje de programación que entienden los navegadores web. Con JavaScript Vanilla, es posible crear componentes web utilizando la API de Custom Elements. Sin embargo, hay librerías y frameworks disponibles que pueden facilitar la creación de componentes web. **Lit** es una de esas librerías, creada por Google, que permite crear componentes web utilizando JavaScript, pero con una sintaxis más simple y menos verbosa que la API de Custom Elements.

## Lit.dev

Lit está disponible como una biblioteca JavaScript que se puede utilizar en cualquier proyecto web. A diferencia de otras bibliotecas, Lit se puede utilizar sin Node.js, sin compilar o precompilar. Para utilizar **LitElement**, solo es necesario importar el archivo JavaScript en la página web y utilizar la directiva `type="module"` al declararlo en el HTML. Cuando se utiliza `defer` dentro de la etiqueta `<script>`, el archivo JavaScript se carga en segundo plano mientras la página se está renderizando.

## Ejemplo práctico

<iframe src="https://codesandbox.io/embed/componentes-web-forked-b16e4v?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Componentes Web (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Para ilustrar lo que hemos visto, he creado un ejemplo práctico que puedes encontrar en mi repositorio de GitHub.

* [Repositorio del proyecto](https://github.com/sergiocomovas/2023-02-componentes-web)
* [Proyecto subido al servidor](https://palmabot.comovas.es/webcomp/)

El ejemplo parte de un archivo base de HTML creado con la abreviación emmet (`html:5` en el editor de código). En este ejemplo, he creado dos componentes web diferentes: uno nativo y otro con Lit.

Para crear el componente nativo, he utilizado el elemento `<webcom-nativo>` y le he pasado un atributo con un mensaje personalizado:

```html
<webcom-nativo
  mensaje="Esto es un componente Web Nativo 🧡"
></webcom-nativo>
```

Para el componente Lit, he utilizado el elemento <webcom-lit> y le he pasado un atributo con el nombre del componente:

```html
<webcom-lit nombre="Componente Lit"></webcom-lit>
```

Además, para añadir un poco más de complejidad, he utilizado la biblioteca Alpine.js para agregar una pequeña funcionalidad que carga datos de un archivo JSON:

```html
<div
  x-data="{ personas: [] }"
  x-init="personas = await (await fetch('/data/personas.json')).json()"
>
```

El resultado que puedo usar una `custom-tag` para buclear y, en definitiva, reutilizar el código que es lo que pretendía.

**Cosas que no me han salido bien:**

* En la versión alojada el [servidor](https://palmabot.comovas.es/webcomp/) he usado solidJs con literales en lugar de jsx, pero tuve problemas al alojar los scripts en mi servidor.  JSX es una extensión de JavaScript que permite escribir elementos de interfaz de usuario de manera similar a HTML.
* Otro intento fallido fue intentar encapsular Vue compilado en JS y utilizarlo como un elemento personalizado, pasándole un parámetro. También intenté utilizar la galería de petit-vue, pero no logré que funcionara correctamente.

Aunque SolidJS tiene algunas características interesantes y Vue es una de mis herramientas favoritas para desarrollar aplicaciones web, en mi caso, no resultaron ser las mejores opción. Aprendí que, a veces, es necesario probar varias herramientas hasta encontrar la adecuada para cada proyecto.

**Enlaces**

| Título                                                  | URL                                                            | Explicación breve                                                             |
| ------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| JavaScript Template Literals                            | [Link](https://www.w3schools.com/JS//js_string_templates.asp)         | Una manera moderna de concatenar strings en JavaScript.                       |
| Usar elementos personalizados en Web Components (JS)     | [Link](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements) | Tutorial sobre cómo crear elementos personalizados en Web Components con JS. |
| Crea componentes reutilizables con Lit                   | [Link](https://www.youtube.com/watch?v=MUtSrXUh6T8)                  | Tutorial en video sobre cómo crear componentes reutilizables con Lit.         |
| Tutorial interactivo de Lit                             | [Link](https://lit.dev/tutorials/intro-to-lit/)                      | Tutorial interactivo para aprender a usar Lit.                                |
| Opciones sin compilar de Solid JS                        | [Link](https://www.solidjs.com/guides/getting-started#opciones-sin-compilar) | Documentación sobre las opciones sin compilar de Solid JS.                  |
| Directiva x-init de Alpine JS                            | [Link](https://alpinejs.dev/directives/init)                         | Documentación sobre cómo usar la directiva x-init de Alpine JS.               |
| Single File Components (SFC) en Vue.js                   | [Link](https://vuejs.org/guide/scaling-up/sfc.html)                  | Tutorial sobre cómo usar Single File Components (SFC) en Vue.js.              |
| Petite Vue: una versión reducida de Vue.js para proyectos pequeños | [Link](https://github.com/vuejs/petite-vue)                     | Petite Vue es una versión reducida de Vue.js para proyectos pequeños.         |

**Conclusiones**

Los componentes web son una forma efectiva de mejorar la escalabilidad y la mantenibilidad de una aplicación web. Al encapsular funcionalidades específicas en componentes web reutilizables, se puede reducir la cantidad de código repetitivo que se utiliza en una página web y, por lo tanto, mejorar la mantenibilidad y la escalabilidad de la aplicación. Siendo el equivalnete frontend a los microservicios del back.
