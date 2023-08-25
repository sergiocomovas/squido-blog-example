---
title: Desplegando en AWS con DENO y DOCKER (FULL STACK)
permalink: desplegando_aws
description: Un reto para día de mi cumpleaños, que ya he superado.. 
date: '2023-05-13 13:33:00'
tags: 
  - AWS
  - AWS-VPC
  - AWS-ECR
  - AWS-ECS
  - AWS-AIM
  - DOCKER
  - TYPESCRIPT
  - TWIND
  - PREACT
  - DENO-FRESH
  - DENO
  - DEV
  - COSAS-DEV
  - CODESANDBOX
  - 2023
mainimage: '../content/images/posts/20230513001842.png'
---

<figure><img src="../content/images/posts/20230513000751.png"></figure>

> En este artículo, compartiré mi experiencia al enfrentar el reto de desplegar DENO Fresh en un contenedor de AWS. Aunque no soy un experto en todas las tecnologías que utilicé, pude superar el desafío gracias a las herramientas y tecnologías que utilicé. **En este artículo, explicaré cómo logré este objetivo y cómo esta experiencia me ha ayudado a mejorar mis habilidades como programador**.

## Mi experimento con DENO FRESH.

Elegí "DENO FRESH" como plataforma para mi experimento de despliegue, a pesar de que es un mundo nuevo para mí y presenta diferencias significativas en comparación con NODE, VUE o QUASAR. En este entorno, levantar un servidor requiere indicar permisos y no hay paquetes, solo se llama a la galería por URL en un archivo de mapeo. Además, el lenguaje de programación es tipado, lo que significa que se deben utilizar interfaces para indicar el tipo de variable, ya sea una cadena o un número.

| URL | Descripción |
| --- | ----------- |
| [LINK](https://dev.to/j471n/typescript-interface-3748) | Artículo sobre interfaces en TypeScript |
| [LINK](https://fresh.deno.dev/docs/introduction) | Documentación oficial de DENO Fresh |
| [LINK](https://deno.com/manual@v1.33.3/runtime/http_server_apis) | Documentación oficial de DENO sobre el uso del servidor HTTP |
| [LINK](https://www.youtube.com/watch?v=h1U7Iq5zgkc) | Video tutorial sobre el uso de DENO |


## Explorando las diferencias de DENO FRESH frente a otros frameworks.

Una de las características de DENO FRESH es que utiliza PREACT. Para ejemplificar el uso de SIGNALS, respeté la arquitectura de "ISLAS" usada para mostrar fragmentos dinámicos de la página. En cuanto a los estilos, utilicé Twind, el "clon" de Tailwind, lo que supuso descartar mis experimentos con la API de view-transitions que quería integrar en el proyecto. Sin embargo, aún puedes encontrar los ejemplos realizados en los enlaces.

| URL | Descripción |
| --- | ----------- |
| [LINK](https://preactjs.com/guide/v10/components) | Documentación oficial de Preact sobre componentes |
| [LINK](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks) | Artículo sobre SIGNALS en Builder.io |
| [LINK](https://preactjs.com/guide/v10/signals) | Documentación oficial de Preact sobre el uso de SIGNALS |
| [LINK](https://twind.dev/) | Sitio web oficial de Twind |
| [LINK](https://codesandbox.io/s/view-transitions-api-dxfxdg) | Ejemplos de uso de la API view-transitions en CodeSandbox |

## Desplegando una aplicación con DENO FRESH y Docker en AWS.

Para hacer el deploy, necesité investigar sobre el uso de Docker e instalarlo. Además, aprendí sobre las imágenes de Docker. Sin embargo, antes de esto, tuve que configurar el CLI de AWS, lo que implicó generar un usuario en AIM y asignarle permisos. Esta fue la parte más complicada del experimento, ya que en realidad había dos módulos de AWS implicados: Elastic Container Registry y Elastic Container Service. También fue necesario abrir el puerto 8000.

<figure><img src="../content/images/posts/20230512233830.png"></figure>

| URL | Descripción |
| --- | ----------- |
| [LINK](https://fresh.deno.dev/docs/concepts/deployment) | Documentación oficial de DENO Fresh sobre el despliegue |
| [LINK](https://hub.docker.com/r/denoland/deno) | Imagen de Docker oficial de DENO |
| [LINK](https://aws.amazon.com/es/cli) | Sitio web oficial de AWS CLI |
| [LINK](https://www.youtube.com/watch?v=TRLK6ZNpjB8) | Video tutorial sobre cómo usar AWS ECR/ECS |
| [LINK](https://dev.to/aws-builders/docker-aws-elastic-container-registry-ecr-3cln) | Docker 🐳, AWS Elastic Container Registry (ECR)

## Un vistazo al futuro del desarrollo web en contenedores.

En general, estoy emocionado por el futuro de DENO y las posibilidades que ofrece para el desarrollo web moderno y el despliegue en servidores en contenedores que ya contienen todo lo necesario para funcionar incluido la distribución de Linux (en el caso DENO, un Debian por defecto) ¡Gracias por leer este artículo y espero que te haya resultado útil e interesante! Por cierto: este el resultado final.

| URL | Descripción |
| --- | ----------- |
| [LINK](https://github.com/sergiocomovas/deno_proyecto.) | Repositorio de GitHub del proyecto de DENO |