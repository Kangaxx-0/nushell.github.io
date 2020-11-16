(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{392:function(e,a,t){e.exports=t.p+"assets/img/0_22_flatten.fb366d78.gif"},431:function(e,a,t){"use strict";t.r(a);var n=t(42),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nushell-0-22"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-22"}},[e._v("#")]),e._v(" Nushell 0.22")]),e._v(" "),n("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),n("p",[e._v("Today, we're releasing 0.22 of Nu. In this version, we introduce a charting functionality for quickly exploring data, stability improvements, and some general command cleanups.")]),e._v(" "),n("h1",{attrs:{id:"where-to-get-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),n("p",[e._v("Nu 0.22 is available as "),n("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.22.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),n("OutboundLink")],1),e._v(" or from "),n("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),n("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),n("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),n("p",[e._v("If you want all the goodies, you can install "),n("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),n("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),n("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"what-s-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),n("h2",{attrs:{id:"new-functionality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-functionality"}},[e._v("#")]),e._v(" New functionality")]),e._v(" "),n("h3",{attrs:{id:"the-flatten-command-andrasio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-flatten-command-andrasio"}},[e._v("#")]),e._v(" The "),n("code",[e._v("flatten")]),e._v(" command (andrasio)")]),e._v(" "),n("p",[n("img",{attrs:{src:t(392),alt:"animation of using the flatten command"}})]),e._v(" "),n("p",[n("em",[e._v("New flatten command")])]),e._v(" "),n("p",[e._v("There's now a flatten command that can take tables nested inside of the main table and flatten their contents into the main table.")]),e._v(" "),n("h3",{attrs:{id:"more-math-commands-morbatex-gillespiecd-fdncred"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#more-math-commands-morbatex-gillespiecd-fdncred"}},[e._v("#")]),e._v(" More "),n("code",[e._v("math")]),e._v(" commands (morbatex, gillespiecd, fdncred)")]),e._v(" "),n("p",[e._v("You can now use rounding in math operations:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo [1.5 2.3 -3.1] | math ceil\n───┬────\n 0 │  2\n 1 │  3\n 2 │ -3\n───┴────\n\n> echo [1.5 2.3 -3.1] | math floor\n───┬────\n 0 │  1\n 1 │  2\n 2 │ -4\n───┴────\n\n> echo [1.5 2.3 -3.1] | math round\n───┬────\n 0 │  2\n 1 │  2\n 2 │ -3\n───┴────\n")])])]),n("h2",{attrs:{id:"breaking-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),n("h3",{attrs:{id:"remove-it-expansion-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-it-expansion-jonathandturner"}},[e._v("#")]),e._v(" Remove it-expansion (jonathandturner)")]),e._v(" "),n("p",[e._v("Previously, we treated the "),n("code",[e._v("$it")]),e._v(" variable as a special variable that caused a command to iterate over each element in the row, for example "),n("code",[e._v("ls | echo $it.name")]),e._v(" would expand to "),n("code",[e._v("ls | each { echo $it.name }")]),e._v(".")]),e._v(" "),n("p",[e._v("While this was handy in small examples, in the general case it became confusing to remember when and how it-expansion would happen.")]),e._v(" "),n("p",[e._v("In this release, we're trying an experiment of removing it-expansion.")]),e._v(" "),n("p",[e._v("Previously:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ls | echo $it.name\n")])])]),n("p",[e._v("Now:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ls | each { echo $it.name }\n")])])]),n("p",[e._v("Or, you can switch to other forms, like:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ls | get name\n")])])]),n("p",[e._v("We're working towards a simpler mental model, where blocks can have parameters, and "),n("code",[e._v("$it")]),e._v(" is the name of the parameter if it's not specified.")]),e._v(" "),n("p",[e._v("Please try it out and let us know what you think.")]),e._v(" "),n("h2",{attrs:{id:"improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("New")]),e._v(" - a "),n("code",[e._v("seq")]),e._v(" command for working with sequences (fdncred)")]),e._v(" "),n("li",[e._v("bson and sqlite support added to the WiX (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("to md")]),e._v(" now has a pretty flag (JosephTLyons)")]),e._v(" "),n("li",[n("code",[e._v("ls")]),e._v(" can now support other number formatting (lucassmmg)")]),e._v(" "),n("li",[e._v("Filesize formats can now be changed via "),n("code",[e._v("config")]),e._v(" (fdncred)")]),e._v(" "),n("li",[e._v("Tables can now have heavy or no borders (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("math eval")]),e._v(" now supports tau (rjboas)")]),e._v(" "),n("li",[n("code",[e._v("char")]),e._v(" now has simpler weather emoji (gillespiecd, fdncred)")]),e._v(" "),n("li",[n("code",[e._v("str to-int")]),e._v(" now takes an optional radix for conversion (gillespiecd)")]),e._v(" "),n("li",[n("code",[e._v("char")]),e._v(" can now print any unicode character (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("alias")]),e._v(" now has optional type inference based on the recently accepted RFC (LhKipp)")]),e._v(" "),n("li",[n("code",[e._v("ls")]),e._v(" will also list inode in "),n("code",[e._v("-l")]),e._v(" mode on Unix (gillespiecd)")])]),e._v(" "),n("h2",{attrs:{id:"internal-improvements-andrasio-jonathandturner-lhkipp-everlastingbugstopper-josephtlyons-fdncred-jjshanks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#internal-improvements-andrasio-jonathandturner-lhkipp-everlastingbugstopper-josephtlyons-fdncred-jjshanks"}},[e._v("#")]),e._v(" Internal improvements (andrasio, jonathandturner, LhKipp, EverlastingBugstopper, JosephTLyons, fdncred, jjshanks)")]),e._v(" "),n("p",[e._v("It's now easier to create column-paths inside of the Nu source, "),n("code",[e._v("alias")]),e._v(" got some bugfixes, the parser got some bugfixes, fixed typo in the build message, filesize labels for bytes wasn't showing up (now fixed), internally there are now more helpers for creating the core Value type, bumped the required Rust version, bugfix for "),n("code",[e._v(";")]),e._v(" endings, and remove unneeded comments.")]),e._v(" "),n("h1",{attrs:{id:"looking-forward"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),n("p",[e._v("We're continuing to work to simplify the internal representation, improve the parser, and work to add support for features like block parameters, variables, and, in the future, custom commands.")]),e._v(" "),n("p",[e._v("If you'd like to help out, come by the "),n("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),n("OutboundLink")],1),e._v(" and say hello!")])])}),[],!1,null,null,null);a.default=s.exports}}]);