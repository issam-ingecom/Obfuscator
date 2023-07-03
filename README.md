# Obfuscator

Este proyecto es un obfuscator de archivos JavaScript, diseñado para encriptar y ofuscar el código fuente de tus archivos JS. El obfuscator transformará tu código en una forma difícil de entender y revertir, lo que ayuda a proteger la propiedad intelectual y aumentar la seguridad de tu aplicación.

## **Requisitos**

- Node.js versión 18.16.1 o superior (incluye npm 9.5.1)

Asegúrate de tener Node.js instalado en tu sistema antes de ejecutar este programa. Puedes descargar la última versión estable de Node.js desde el sitio web oficial: **[https://nodejs.org](https://nodejs.org/)**

## **Instalación**

1. Instala Node https://nodejs.org/en
    - Durante la instalación, se te presentará una opción que dice "Automatically install tools for native modules". Ten en cuenta que marcar esta casilla puede prolongar el tiempo de instalación. Si prefieres evitar esta demora, asegúrate de no marcar la casilla durante la instalación.
2. Abre una interfaz de línea de comandos (CLI) y navega hasta la carpeta del proyecto. `npm install`
3. instala la herramienta Gulp globalmente `npm install -g gulp-cli`

## **Uso**

1. Coloca los archivos JavaScript que deseas encriptar en la siguiente ubicación: `Proyecto/Input/`
2. Ejecuta el comando `gulp` para iniciar el proceso de encriptación
3. Una vez completado, los archivos JavaScript encriptados se encontrarán en `Proyecto/Output/`