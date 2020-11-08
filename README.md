### Proyecto Final con Testcafé

**Bienvenido al repositorio del proyecto final de Testcafé**

Se realizó como parte del curso de Testcafé con Javascript, impartido por QA Minds y así poner en practica los conocimientos aprendidos durante las clases.

Las pruebas automatizadas fueron aplicadas en el sitio web http://automationpractice.com/, página que esta diseñada para las personas que están aprendiendo a codificar pruebas automatizadas puedan practicar.

#### Estructura
Existen las siguientes carpetas:
- **Data:** Se encuentra una clase con los datos necesarios para realizar las pruebas de los módulos. Estos datos se mandan llamar en las clases de la caperta Tests.

- **PageObjectModel:** Contiene los selectores de cada campo que se utilizan en los Tests de los módulos Home, My Account, Products y flujos de Compra. Las clases de los selectores están separados por pantalla.

- **Tests:** En esta carpeta están las pruebas automatizadas, separadas en clases para cada pantalla Home, My Account y Products, también se encuentra una clase para los diferentes flujos de compra.

- **Reportes:** Aquí se encuentran los reportes de los resultados de las pruebas. Se generaron reportes por cada pantalla ya antes mencionadas y para los flujos de compra. Hay tres archivos por cada pantalla, uno contiene los resultados ejecutados en Chrome, otro en Firefox y el tercero en ambos navegadores.
- **Documentación**: Contiene los archivos de Plan de pruebas, listado de casos de prueba y reporte de bugs.



#### Instalación

Para poder ejecutar los tests de este proyecto es necesario tener instalado las siguientes herramientas.
- **Node js **
Descargar de la siguiente página: https://nodejs.org/es/
Para validar que ya esta instalado en el equipo solo se debe ingresar el siguiente comando en consola:
*node -v*
Se mostrará la versión de node.

- **Visual Studio Code**
Descargar de la siguiente página: https://code.visualstudio.com/
Esta herramienta ayuda a codificar y ejecutar en la misma pantalla porque cuenta con una terminal.

- **Testcafé**
Ir a la siguiente página: https://devexpress.github.io/testcafe/documentation/getting-started/
para ver la documentación.
Para instalar es necesario ir a la consola y ejecutar el siguiente comando:
*npm install -g testcafe*

Para validar que ya esta instalado es necesario ejecutar:
*testcafe -v*
Mostrará la versión de Testcafé instalada.

- **Reportes**
Para generar los reportes de los resultados en html, es necesario ejecutar el siguiente comando en consola:
npm install -g testcafe-reporter-html@latest

**Nota:**
Este proyecto fue desarrollado en  macOS Catalina, versión 10.15.6, procesador 2.4 GHz Intel Core i5 de dos núcleos y RAM 8GB.
Versión de Node v10.13.0
Versión de Testcafé 1.9.4 
Version de Visual Studio Code: 1.50.0

#### Ejecución
Una vez que se clono este proyecto y se requiere ejecutar las pruebas es necesario ir a la consola del equipo y seguir la siguiente sintaxis:
Se debe empezar con la palabra testcafe, seguido por el nombre del navegador y por último el nombre de la clase que se debe ejecutar.
- Ejemplo:
*testcafe chrome homeTests.js*

Ejecutar las pruebas en dos navegadores al mismo tiempo:
Palabra testcafe, nombres de los navegadores separados por coma y el nombre de la clase.
- Ejemplo:
*testcafe chrome, firefox homeTests.js*

Para ejecutar las sin que se muestre el navegador en la pantalla:
Palabra testcafe, nombre de navegador,seguido de la palabra :headless y el nombre de la clase.
- Ejemplo para un navegador:
*testcafe chrome:headless homeTests.js*

- Ejemplo para dos navegadores:
*testcafe chrome,firefox:headless homeTests.js*

Ejecutar las pruebas y generar reporte de resultados en html
Se debe indicar la ruta en donde se va a guardar y el nombre del reporte.
- Ejemplo
testcafe chrome homeTests.js  --reporter html:reportes/reporte.html
