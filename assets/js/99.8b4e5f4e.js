(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{495:function(a,e,s){"use strict";s.r(e);var n=s(42),o=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"trabajando-con-tablas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trabajando-con-tablas"}},[a._v("#")]),a._v(" Trabajando con tablas")]),a._v(" "),s("p",[a._v("Una de las maneras comunes de mirar datos en Nu es a través de una tabla. Nu viene con una serie de comandos que trabajan con tablas para que pueda ser más conveniente encontrar lo que estás buscando y para limitar los datos a solo lo que necesites.")]),a._v(" "),s("p",[a._v("Para empezar, consigamos una tabla que podamos usar:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls\n---+---------------+------+----------+---------+------------+------------\n # | name          | type | readonly | size    | accessed   | modified \n---+---------------+------+----------+---------+------------+------------\n 0 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 1 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago \n 2 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago \n 3 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago \n 4 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago \n 5 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago \n 6 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago \n 7 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 8 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago \n 9 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago \n---+---------------+------+----------+---------+------------+------------\n")])])]),s("h2",{attrs:{id:"ordenando-los-datos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ordenando-los-datos"}},[a._v("#")]),a._v(" Ordenando los datos")]),a._v(" "),s("p",[a._v("Podemos ordenar la tabla llamando el comando "),s("code",[a._v("sort-by")]),a._v(" e indicándole qué columnas queremos usar al ordenar. Digamos que deseamos ordenar nuestra tabla por tamaño de archivo:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | sort-by size\n---+---------------+------+----------+---------+------------+------------\n # | name          | type | readonly | size    | accessed   | modified \n---+---------------+------+----------+---------+------------+------------\n 0 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago \n 1 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 2 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 3 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago \n 4 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago \n 5 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago \n 6 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago \n 7 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago \n 8 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago \n 9 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago \n---+---------------+------+----------+---------+------------+------------\n")])])]),s("p",[a._v('Podemos ordenar una tabla con cualquier columna que pueda ser comparada. Por ejemplo, también pudimos haber ordenador usando las columnas "name", "accessed", o "modified".')]),a._v(" "),s("h1",{attrs:{id:"seleccionando-los-datos-que-quieres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seleccionando-los-datos-que-quieres"}},[a._v("#")]),a._v(" Seleccionando los datos que quieres")]),a._v(" "),s("p",[a._v("Podemos seleccionar datos de una tabla seleccionando columnas o filas específicas. Escojamos algunas columnas de nuestra tabla para usar:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | select name size\n---+---------------+---------\n # | name          | size \n---+---------------+---------\n 0 | add.rs        | 2.7 KB \n 1 | sum.rs        | 3.0 KB \n 2 | inc.rs        | 11.8 KB \n 3 | str.rs        | 21.4 KB \n 4 | skip.rs       | 1.7 KB \n 5 | textview.rs   | 9.4 KB \n 6 | binaryview.rs | 13.0 KB \n 7 | edit.rs       | 2.7 KB \n 8 | tree.rs       | 3.0 KB \n 9 | sys.rs        | 9.2 KB \n---+---------------+---------\n")])])]),s("p",[a._v("Esto ayuda a crear una table más enfocada para lo que necesitamos. Siguiente, digamos que queremos ver los 5 archivos más livianos de este directorio:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | sort-by size | first 5\n---+---------+------+----------+--------+------------+------------\n # | name    | type | readonly | size   | accessed   | modified \n---+---------+------+----------+--------+------------+------------\n 0 | skip.rs | File |          | 1.7 KB | 2 days ago | 2 days ago \n 1 | add.rs  | File |          | 2.7 KB | 2 days ago | 2 days ago \n 2 | edit.rs | File |          | 2.7 KB | 2 days ago | 2 days ago \n 3 | sum.rs  | File |          | 3.0 KB | 2 days ago | 2 days ago \n 4 | tree.rs | File |          | 3.0 KB | 2 days ago | 2 days ago \n---+---------+------+----------+--------+------------+------------\n")])])]),s("p",[a._v("Notarás que primero ordenamos la tabla por tamaño para llegar hasta el archivo más pequeño y luego usamos "),s("code",[a._v("first 5")]),a._v(" que nos devuelve las primeras 5 filas de la tabla.")]),a._v(" "),s("p",[a._v("También puedes saltarte filas con "),s("code",[a._v("skip")]),a._v(" que no deseas. Saltemos las primeras dos de las 5 filas que obtuvimos arriba:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | sort-by size | first 5 | skip 2\n---+---------+------+----------+--------+------------+------------\n # | name    | type | readonly | size   | accessed   | modified \n---+---------+------+----------+--------+------------+------------\n 0 | edit.rs | File |          | 2.7 KB | 2 days ago | 2 days ago \n 1 | sum.rs  | File |          | 3.0 KB | 2 days ago | 2 days ago \n 2 | tree.rs | File |          | 3.0 KB | 2 days ago | 2 days ago \n---+---------+------+----------+--------+------------+------------\n")])])]),s("p",[a._v("Hemos reducido a tres filas que nos interesa.")]),a._v(" "),s("p",[a._v("Veamos algunos otros comandos para seleccionar datos. Es posible que te hayas preguntado por qué las filas de la tabla son números. Esto actúa como una forma práctica de llegar a una sola fila. Ordenemos nuestra tabla por el nombre del archivo y luego escojamos una de las filas con el comando "),s("code",[a._v("n-th")]),a._v(" usando el número de fila:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | sort-by name\n---+---------------+------+----------+---------+------------+------------\n # | name          | type | readonly | size    | accessed   | modified \n---+---------------+------+----------+---------+------------+------------\n 0 | add.rs        | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 1 | binaryview.rs | File |          | 13.0 KB | a day ago  | a day ago \n 2 | edit.rs       | File |          | 2.7 KB  | 2 days ago | 2 days ago \n 3 | inc.rs        | File |          | 11.8 KB | 2 days ago | 2 days ago \n 4 | skip.rs       | File |          | 1.7 KB  | 2 days ago | 2 days ago \n 5 | str.rs        | File |          | 21.4 KB | 2 days ago | 2 days ago \n 6 | sum.rs        | File |          | 3.0 KB  | 2 days ago | 2 days ago \n 7 | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago \n 8 | textview.rs   | File |          | 9.4 KB  | 2 days ago | 2 days ago \n 9 | tree.rs       | File |          | 3.0 KB  | 2 days ago | 2 days ago \n---+---------------+------+----------+---------+------------+------------\n\n> ls | sort-by name | nth 5\n--------+------+----------+---------+------------+------------\n name   | type | readonly | size    | accessed   | modified \n--------+------+----------+---------+------------+------------\n str.rs | File |          | 21.4 KB | 2 days ago | 2 days ago \n--------+------+----------+---------+------------+------------\n")])])]),s("h2",{attrs:{id:"obteniendo-datos-de-una-tabla"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obteniendo-datos-de-una-tabla"}},[a._v("#")]),a._v(" Obteniendo datos de una tabla")]),a._v(" "),s("p",[a._v("Hasta ahora hemos trabajado con tablas reduciendo la tabla a solo lo que necesitamos. A veces es posible que queramos ir un paso más allá y solo mirar los valores en las celdas en lugar the tomar una columna completa. Digamos, por ejemplo, que queramos obtener una lista de los nombres de los archivos. Para esto usamos el comando "),s("code",[a._v("get")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | get name\n---+---------------\n # | value \n---+---------------\n 0 | add.rs \n 1 | sum.rs \n 2 | inc.rs \n 3 | str.rs \n 4 | skip.rs \n 5 | textview.rs \n 6 | binaryview.rs \n 7 | edit.rs \n 8 | tree.rs \n 9 | sys.rs \n---+---------------\n")])])]),s("p",[a._v("Ahora tenemos los valores de cada nombre de los archivos.")]),a._v(" "),s("p",[a._v("Puede parecerse al comando "),s("code",[a._v("select")]),a._v(" que vimos previamente, probemos "),s("code",[a._v("select")]),a._v(" para comparar los dos:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | select name\n---+---------------\n # | name \n---+---------------\n 0 | add.rs \n 1 | sum.rs \n 2 | inc.rs \n 3 | str.rs \n 4 | skip.rs \n 5 | textview.rs \n 6 | binaryview.rs \n 7 | edit.rs \n 8 | tree.rs \n 9 | sys.rs \n---+---------------\n")])])]),s("p",[a._v("¡Se ven muy similares! Veamos si podemos explicar la diferencia entre estos dos comandos para aclarar:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("select")]),a._v(" - crea una tabla donde incluye únicamente las columnas indicadas")]),a._v(" "),s("li",[s("code",[a._v("get")]),a._v(" - devuelve los valores dentro de la columna indicada")])]),a._v(" "),s("p",[a._v("La manera de distinguirlas mirando la tabla de forma característica es con el nombre de columna "),s("code",[a._v("value")]),a._v(" que nos permite saber que será una lista de valores con la que podemos trabajar.")]),a._v(" "),s("p",[a._v("El comando "),s("code",[a._v("get")]),a._v(" puede ir más allá y tomar una ruta para datos más profundos en la tabla. Esto simplifica trabajar con datos más complejos como las estructuras que podrías encontrar en archivos .json.")]),a._v(" "),s("h2",{attrs:{id:"cambiando-datos-de-una-tabla"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambiando-datos-de-una-tabla"}},[a._v("#")]),a._v(" Cambiando datos de una tabla")]),a._v(" "),s("p",[a._v("Además de seleccionar datos de una tabla, también podemos actualizar lo que contiene una tabla. Es posible que queramos agregar nuevas columnas o editar el contenido de una celda. En Nu, en lugar la misma tabla, cada uno de los comandos en la sección devolvera una nueva tabla en la tubería.")]),a._v(" "),s("h3",{attrs:{id:"agregando-una-nueva-columna"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agregando-una-nueva-columna"}},[a._v("#")]),a._v(" Agregando una nueva columna")]),a._v(" "),s("p",[a._v("Podemos utilizar el comando "),s("code",[a._v("add")]),a._v(" para agregar una nueva columna a la tabla. Veamos un ejemplo:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml\n---------\n edition \n---------\n 2018 \n---------\n")])])]),s("p",[a._v('Agreguemos una columna llamada "next_edition" con el valor 2021:')]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml | add next_edition 2021\n---------+--------------\n edition | next_edition \n---------+--------------\n 2018    | 2021 \n---------+--------------\n")])])]),s("p",[a._v("Observa que si abrimos el archivo original el contenido permanece igual:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml\n---------\n edition \n---------\n 2018 \n---------\n")])])]),s("p",[a._v("Los cambios en Nu son cambios funcionales, lo que significa que funcionan en los valores mismos en vez de causar cambios permanentes. Esto nos permite realizar diferentes tipos de trabajo en nuestra tubería hasta que estemos listos para grabar los resultados con cualquier cambio que nos gustaría si así decidimos. Aquí podríamos grabar los resultados usando el comando "),s("code",[a._v("save")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml | add next_edition 2021 | save rustfmt2.toml\n/home/jonathan/Source/nushell(master)> open rustfmt2.toml\n---------+--------------\n edition | next_edition \n---------+--------------\n 2018    | 2021 \n---------+--------------\n")])])]),s("h3",{attrs:{id:"editando-una-columna"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editando-una-columna"}},[a._v("#")]),a._v(" Editando una columna")]),a._v(" "),s("p",[a._v("Similarmente al comando "),s("code",[a._v("add")]),a._v(", también podemos usar el comando "),s("code",[a._v("edit")]),a._v(" para cambiar el contenido de una columna a un nuevo valor. Abramos el mismo archivo para verlo en acción:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("open rustfmt.toml\n---------\n edition \n---------\n 2018 \n---------\n")])])]),s("p",[a._v("y ahora, actualizemos la edición y que apunte a la siguiente edición que esperamos soportar:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml | edit edition 2021\n---------\n edition \n---------\n 2021 \n---------\n")])])]),s("h3",{attrs:{id:"incrementando-valores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#incrementando-valores"}},[a._v("#")]),a._v(" Incrementando valores")]),a._v(" "),s("p",[a._v("Hay un comando más en Nu que nos ayudará a trabajar con números y versiones: "),s("code",[a._v("inc")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open rustfmt.toml\n---------\n edition \n---------\n 2018 \n---------\n> open rustfmt.toml | inc edition\n---------\n edition \n---------\n 2019 \n---------\n")])])]),s("p",[a._v('Como el valor en "edition" es un número, podemos usar '),s("code",[a._v("inc")]),a._v(" para actualizarlo. "),s("code",[a._v("inc")]),a._v(" realmente brilla cuando trabajamos con versiones:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> open Cargo.toml | get package.version\n0.1.3\n> open Cargo.toml | inc package.version --minor | get package.version\n0.2.0\n")])])]),s("p",[a._v("Cuando trabajamos con versiones podemos usar banderas e indicar cómo incrementar la versión:")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("--major")]),a._v(" - incrementar major  (0.1.3 -> 1.0.0)")]),a._v(" "),s("li",[s("strong",[a._v("--minor")]),a._v(" - incrementar minor  (0.1.3 -> 0.2.0)")]),a._v(" "),s("li",[s("strong",[a._v("--patch")]),a._v(" - incrementar patch  (0.1.3 -> 0.1.4)")])])])}),[],!1,null,null,null);e.default=o.exports}}]);