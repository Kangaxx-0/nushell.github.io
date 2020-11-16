(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{491:function(a,e,o){"use strict";o.r(e);var s=o(42),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"el-pipeline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#el-pipeline"}},[a._v("#")]),a._v(" El pipeline")]),a._v(" "),o("p",[a._v("Uno de los diseños centrales de Nu es la tubería (pipeline), una idea de diseño que rastrea sus raíces décadas atrás hasta parte de la filosofía original detrás de Unix. Así como Nu extiende desde un solo dato tipo de cadena de Unix, Nu también extiende la idea de tuberías (pipelines) para incluir más que solo texto.")]),a._v(" "),o("h2",{attrs:{id:"fundamentos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fundamentos"}},[a._v("#")]),a._v(" Fundamentos")]),a._v(" "),o("p",[a._v("Una tubería (pipeline) es construída con tres partes: la entrada, el filtro, y la salida.")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open "Cargo.toml" | inc package.version | save "Cargo_new.toml"\n')])])]),o("p",[a._v("El primer comando, "),o("code",[a._v('open "Cargo.toml"')]),a._v(', es una entrada (a veces también llamada "fuente" o "productor"). Esto crea o carga datos y lo canaliza en la tubería. Es de entrada para la tubería tener valores y poder trabajarlas. Comandos como '),o("code",[a._v("ls")]),a._v(" también son entradas ya que toman datos desde el sistema de archivos y lo canalizan a través de las tuberías para que puedan ser usadas.")]),a._v(" "),o("p",[a._v("El segundo comando, "),o("code",[a._v("inc package.version")]),a._v(", es un filtro. Filtros toman los datos que se les entrega y comúnmente hacen algo con la misma. Puede que la cambien (tal como el comando "),o("code",[a._v("inc")]),a._v(" en nuestro ejemplo), o pueden hacer otra operación, como registrar, mientras pasan los valores.")]),a._v(" "),o("p",[a._v("El último comando, "),o("code",[a._v('save "Cargo_new.toml"')]),a._v(', es una salida (a veces llamado un "sink"). Una salida toma la entrada de la tubería y realiza alguna operación final. En nuestro ejemplo, grabamos lo que viene a través de la tubería hacia un archivo como paso final. Otros tipos de comandos de salida pueda que tomen valores y lo muestren para el usuario.')]),a._v(" "),o("h2",{attrs:{id:"trabajando-con-comandos-externos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trabajando-con-comandos-externos"}},[a._v("#")]),a._v(" Trabajando con comandos externos")]),a._v(" "),o("p",[a._v("Los comandos en Nu se comunican entre ellos usando los tipos de datos de Nu (mirar "),o("RouterLink",{attrs:{to:"/es/book/tipos_de_datos.html"}},[a._v("tipos de datos")]),a._v(") pero, ¿qué hay de comandos fuera de Nu? Miremos algunos ejemplos trabajando con comandos externos:")],1),a._v(" "),o("p",[o("code",[a._v("commando_interno | comando_externo")])]),a._v(" "),o("p",[a._v("Los datos fluirán desde comando_interno al comando_externo. Estos datos se esperan que sean cadenas para que puedan ser enviadas a entrada estándar "),o("code",[a._v("stdin")]),a._v(" del comando_externo.")]),a._v(" "),o("p",[o("code",[a._v("comando_externo | comando_interno")])]),a._v(" "),o("p",[a._v("Los datos que vienen de un comando externo a Nu se coleccionará a una sola cadena y luego serán pasadas a comando_interno. Comandos como "),o("code",[a._v("lines")]),a._v(" ayudan a facilitar datos provenientes de comandos externos de manera que sea más facil trabajarlas.")]),a._v(" "),o("p",[o("code",[a._v("comando_externo_1 | comando_externo_2")])]),a._v(" "),o("p",[a._v("Nu trabaja con datos canalizados entre dos comandos externos de la misma forma como en otras shells, como Bash lo haría. La salida estándar "),o("code",[a._v("stdout")]),a._v(" de comando_externo_1 es conectada a la entrada estándar "),o("code",[a._v("stdin")]),a._v(" de comando_externo_2. Esto permite que los datos fluyan naturalmente entre dos comandos.")]),a._v(" "),o("h2",{attrs:{id:"detras-de-escenas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detras-de-escenas"}},[a._v("#")]),a._v(" Detrás de escenas")]),a._v(" "),o("p",[a._v("Es posible que te hayas preguntado como miramos una tabla si "),o("code",[a._v("ls")]),a._v(" es una entrada y no una salida. Nu agrega esta salida por nosotros automáticamente usando otro comando llamado "),o("code",[a._v("autoview")]),a._v(". El comando "),o("code",[a._v("autoview")]),a._v(" es añadido a cualquier tubería que no tenga una salida permitiéndonos ver el resultado.")]),a._v(" "),o("p",[a._v("En efecto, el comando:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> ls\n")])])]),o("p",[a._v("y la tubería:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> ls | autoview\n")])])]),o("p",[a._v("Son uno y lo mismo.")])])}),[],!1,null,null,null);e.default=n.exports}}]);