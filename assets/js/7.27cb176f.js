(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(e,t,a){e.exports=a.p+"assets/img/utf8_table.12140446.png"},364:function(e,t,a){e.exports=a.p+"assets/img/utf8_light_table.7fbfe487.png"},365:function(e,t,a){e.exports=a.p+"assets/img/did_you_mean.cf985b26.png"},409:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-3-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-3-0"}},[e._v("#")]),e._v(" Nushell 0.3.0")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("We're happy to announce that today we're releasing Nushell 0.3.0. Nu has seen numerous bugfixes, performance improvements, and features added since its initial public release (which was only a few weeks ago!)")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.3.0 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo +nightly install nu")]),e._v(" (or if you want all the features "),r("code",[e._v("cargo +nightly install nu --all-features")]),e._v(").")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's new")]),e._v(" "),r("h2",{attrs:{id:"new-table-design-porges-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-table-design-porges-jonathandturner"}},[e._v("#")]),e._v(" New table design (Porges, jonathandturner)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(363),alt:"Table with utf8 box drawing"}})]),e._v(" "),r("p",[e._v("One of the most striking differences is that Nu now uses UTF-8 box drawing to draw its tables.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(364),alt:"Table with utf8 box drawing in light mode"}})]),e._v(" "),r("p",[e._v("The table is also configurable. If you feel like the table is a bit too heavy, you can also configure it to work in light mode using this command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> config --set [table_mode light]\n")])])]),r("h2",{attrs:{id:"new-file-formats-pmeredit-est31-andrasio-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-file-formats-pmeredit-est31-andrasio-jonathandturner"}},[e._v("#")]),e._v(" New file formats (pmeredit, est31, andrasio, jonathandturner)")]),e._v(" "),r("p",[e._v("Nu now natively supports new file formats, including: bson, tsv, sqlite, and url-encoded strings.")]),e._v(" "),r("h2",{attrs:{id:"new-commands-incrop-ramonsnir-ijt-jonathandturner-andrasio-jonnywalker81-chhetripradeep-pka"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-commands-incrop-ramonsnir-ijt-jonathandturner-andrasio-jonnywalker81-chhetripradeep-pka"}},[e._v("#")]),e._v(" New commands (incrop, ramonsnir, ijt, jonathandturner, andrasio, JonnyWalker81, chhetripradeep, pka)")]),e._v(" "),r("p",[e._v("Since the 0.2.0 release, Nu has gained a set of additional commands, including:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("help")]),e._v(" - built-in help system")]),e._v(" "),r("li",[r("code",[e._v("reverse")]),e._v(" - reverse a table")]),e._v(" "),r("li",[r("code",[e._v("last")]),e._v(" - like the "),r("code",[e._v("first")]),e._v(" command, but working from the bottom of the table, return n rows")]),e._v(" "),r("li",[r("code",[e._v("embed")]),e._v(" - create a new table using the current table as a start")]),e._v(" "),r("li",[r("code",[e._v("fetch")]),e._v(" - get the contents of a URL (this originally lived in "),r("code",[e._v("open")]),e._v(")")]),e._v(" "),r("li",[r("code",[e._v("post")]),e._v(" - post to a URL and get the results")]),e._v(" "),r("li",[r("code",[e._v("pwd")]),e._v(" - print the working directory")]),e._v(" "),r("li",[r("code",[e._v("env")]),e._v(" - give access to a number of important paths and environment settings")]),e._v(" "),r("li",[r("code",[e._v("pivot")]),e._v(" - pivot a table so that rows become columns and vice-versa")]),e._v(" "),r("li",[r("code",[e._v("echo")]),e._v(" - a built-in echo command")])]),e._v(" "),r("h2",{attrs:{id:"error-improvements-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-improvements-jonathandturner"}},[e._v("#")]),e._v(" Error improvements (jonathandturner)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(365),alt:"Improve error messages"}})]),e._v(" "),r("p",[e._v('We\'ve made steady progress on improving error messages. Recently, we added "did you mean?" errors to help when you mistype the name of columns. Nu 0.3.0 also has gone through a few passes to generally polish the errors to include more information when an error occurs.')]),e._v(" "),r("h2",{attrs:{id:"shell-features-pka-wycats-twe4ked-andrasio-iamcodemaker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shell-features-pka-wycats-twe4ked-andrasio-iamcodemaker"}},[e._v("#")]),e._v(" Shell features (pka, wycats, twe4ked, andrasio, iamcodemaker)")]),e._v(" "),r("p",[e._v("Nu now supports "),r("code",[e._v("~")]),e._v(" to refer to your home directory as part of a path.  You can also use "),r("code",[e._v("cd -")]),e._v(" to return to a previous directory you were working in.")]),e._v(" "),r("p",[e._v("The shell itself also got a few updates. You can now enable 'vi' mode, if you'd prefer vi-like bindings (by running "),r("code",[e._v("config --set [edit_mode vi]")]),e._v("). On non-Windows platforms, you can also use Ctrl-R to enable Sublime-style history searching (we're hoping to enable Windows support for this soon).")]),e._v(" "),r("h2",{attrs:{id:"plugin-improvements-jonathandturner-andrasio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-improvements-jonathandturner-andrasio"}},[e._v("#")]),e._v(" Plugin improvements (jonathandturner, andrasio)")]),e._v(" "),r("p",[e._v("Plugins have continued to mature, and it's now possible to use plugins to extend Nu with support for new file formats.")]),e._v(" "),r("p",[e._v("We've also added documentation on how to "),r("a",{attrs:{href:"https://github.com/nushell/contributor-book/blob/master/en/plugins.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("write Nu plugins in both Rust and Python"),r("OutboundLink")],1),e._v(", with info on Ruby coming soon.")]),e._v(" "),r("h2",{attrs:{id:"docker-support-vsoch-drsensor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-support-vsoch-drsensor"}},[e._v("#")]),e._v(" Docker support (vsoch, DrSensor)")]),e._v(" "),r("p",[e._v("If you're interested in using Nu and Docker together, be sure to check out the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/blob/master/docs/docker.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("new Docker support"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"book-progress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#book-progress"}},[e._v("#")]),e._v(" Book progress")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"http://book.nushell.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nu book"),r("OutboundLink")],1),e._v(" is now available in "),r("em",[e._v("three")]),e._v(" languages: English, Spanish, and Japanese.")]),e._v(" "),r("p",[e._v("We've also created a "),r("a",{attrs:{href:"https://github.com/nushell/contributor-book/blob/master/en/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nu contributor book"),r("OutboundLink")],1),e._v(", which will help developers who want to contribute to Nu learn about its philosophy, design, and how to create plugins.")]),e._v(" "),r("h2",{attrs:{id:"acknowledgements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),r("p",[e._v("est31, pmeredit, twe4ked, DrSensor, vsoch, pka, jankoprowski, Porges, max-sixty, ijt, djc, vthriller, taiki-e, oskarskog, iamcodemaker, JonnyWalker81, yaahc, tim77, svartalf, ramonsnir, orf, lesichkovm, ineol, incrop, eoinkelly, devnought, chhetripradeep, aidanharris, GuillaumeGomez, and BatmanAod for contributing to the Nu codebase. Also a "),r("em",[e._v("big")]),e._v(" thanks to our issue reporters!")]),e._v(" "),r("p",[e._v("ymgyt - for the Japanese version of the Nu book!")]),e._v(" "),r("p",[e._v("mistydemeo, romanlevin, ralvessa, pka, lord, kkalyan, jankprowski, and boisgera for helping with the book.")]),e._v(" "),r("h2",{attrs:{id:"looking-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),r("p",[e._v("We're hard at work on the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/issues/261",target:"_blank",rel:"noopener noreferrer"}},[e._v("upcoming milestone release"),r("OutboundLink")],1),e._v(". If you'd like to help, feel free to jump in! We have an active "),r("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),r("OutboundLink")],1),e._v(" you can join for both users and contributors.")])])}),[],!1,null,null,null);t.default=o.exports}}]);