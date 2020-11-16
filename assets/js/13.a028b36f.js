(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{390:function(e,t,a){e.exports=a.p+"assets/img/0_21_bar_charts.c2eca350.gif"},391:function(e,t,a){e.exports=a.p+"assets/img/0_21_line_chart.286ca4de.png"},430:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-21"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-21"}},[e._v("#")]),e._v(" Nushell 0.21")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.21 of Nu. In this version, we introduce a charting functionality for quickly exploring data, stability improvements, and some general command cleanups.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.21 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.21.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"new-functionality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-functionality"}},[e._v("#")]),e._v(" New functionality")]),e._v(" "),r("h3",{attrs:{id:"charting-andrasio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#charting-andrasio"}},[e._v("#")]),e._v(" Charting (andrasio)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(390),alt:"animation of building different types of bar charts"}})]),e._v(" "),r("p",[r("em",[e._v("New charting functionality")])]),e._v(" "),r("p",[e._v("Nushell now supports bar and line charts for when you want to quickly take a look at data you're exploring.  You can reach these through the new "),r("code",[e._v("chart")]),e._v(" command.")]),e._v(" "),r("p",[e._v("Here's an example of using "),r("code",[e._v("chart")]),e._v(" to chart out contributions to a git repository:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('> git log "--pretty=format:%h<nu>%aN<nu>%s<nu>%aD" | lines | split column "<nu>" sha1 author desc merged_at | where author == "Andrés N. Robalino" | update merged_at { get merged_at | str to-datetime } | reverse | chart line merged_at -f "%b-%Y"\n')])])]),r("p",[r("img",{attrs:{src:a(391),alt:"line chart of github contributions"}})]),e._v(" "),r("p",[r("em",[e._v("Line chart of GitHub contributions")])]),e._v(" "),r("h3",{attrs:{id:"improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("rm -f")]),e._v(" no longer complains if the path can't be found (luccasmg)")]),e._v(" "),r("li",[r("code",[e._v("benchmark")]),e._v(" now randomizes the environment for more accurate results (tumdum)")]),e._v(" "),r("li",[r("code",[e._v("select")]),e._v(" now works with columns that have spaces (JonathanArns)")]),e._v(" "),r("li",[e._v("math with duration now properly handles overflow (samualvanderwaal)")]),e._v(" "),r("li",[r("code",[e._v("mv")]),e._v(" now properly fails if you try to move a directory into itself (luccasmg)")]),e._v(" "),r("li",[e._v("smarter auto-conversion to string where possible, helping with commands like "),r("code",[e._v("clip")]),e._v(" (gillespiecd)")]),e._v(" "),r("li",[e._v("added left and right padding for strings via "),r("code",[e._v("str lpad")]),e._v(" and "),r("code",[e._v("str rpad")]),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("blink and strikethrough added to colors (fdncred)")]),e._v(" "),r("li",[e._v("initial WASI support (jonathandturner)")]),e._v(" "),r("li",[e._v("inf/nan handled in CSV (gillespiecd)")]),e._v(" "),r("li",[e._v("new "),r("code",[e._v("xpath")]),e._v(" command that can search XML documents (fdncred, andrasio)")]),e._v(" "),r("li",[e._v("rustyline paste mode no longer assumes bracketed paste (wcarss)")])]),e._v(" "),r("h3",{attrs:{id:"internal-improvements-fdncred-gillespiecd-jonathandturner-josephtlyons-andrasio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#internal-improvements-fdncred-gillespiecd-jonathandturner-josephtlyons-andrasio"}},[e._v("#")]),e._v(" Internal improvements (fdncred, gillespiecd, jonathandturner, JosephTLyons, andrasio)")]),e._v(" "),r("p",[e._v("Windows builds now use a bigger stack, suggestions have been cleaned up, cleaned up unused files in nu-data, some redundant dependencies were simplified, variable scope was improved to make way for variables, internal names for "),r("code",[e._v("describe")]),e._v(" have been improved, nu-protocol got a tidy, added example to "),r("code",[e._v("update")]),e._v(", fix for panics in "),r("code",[e._v("str to-datetime")]),e._v(", internal name of "),r("code",[e._v("to md")]),e._v(" corrected, "),r("code",[e._v("empty?")]),e._v(" got a rewrite, integers are now parsed as BigInt, decimals are now parsed as BigDecimal, cleanup of old files in the root, more tests added,")]),e._v(" "),r("h1",{attrs:{id:"looking-forward"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),r("p",[e._v("We recently finished the Nushell survey and will be working on processing the results, which will help us plan the next few months. Also, if you haven't heard, Nushell is part of the "),r("a",{attrs:{href:"http://couchbase.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("new Couchbase CLI experience"),r("OutboundLink")],1),e._v(". There are also lots of big plans for improving core parts of the system, including line editing, completions, and more. If you're interested in helping out, come chat with us on "),r("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);