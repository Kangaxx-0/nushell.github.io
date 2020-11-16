(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{509:function(t,e,a){"use strict";a.r(e);var n=a(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"メタデータ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#メタデータ"}},[t._v("#")]),t._v(" メタデータ")]),t._v(" "),a("p",[t._v("Nuを使用していると裏でなにか特別なことがおきているのではないかと思うことがあるでしょう。例えば、Nuがサポートしているファイル形式を忘れていて、余計に変換しようとしてしまったとしましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open Cargo.toml | from toml\nerror: Expected a string from pipeline\n- shell:1:18\n1 | open Cargo.toml | from toml\n  |                   ^^^^^^^^^ requires string input\n- shell:1:5\n1 | open Cargo.toml | from toml\n  |      ---------- object originates from here\n")])])]),a("p",[t._v("エラーメッセージは、"),a("code",[t._v("from toml")]),t._v("に渡したものが文字列ではなかったことだけではなく、元の値がどこから来たかも示しています。どうやってこれを知るのでしょうか。")]),t._v(" "),a("p",[t._v("Nuのパイプラインを流れる値には、多くの場合、メタデータと呼ばれる一連の追加情報が付加されます。これらはストアにあるアイテムにつけられているタグのようにタグと呼ばれています。これらのタグはデータには影響しませんが、データを操作する際の体験を向上させます。")]),t._v(" "),a("p",[t._v("もう一度"),a("code",[t._v("open")]),t._v("コマンドを実行してみましょう、ただし今回は、返されるタグを確認します。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open Cargo.toml | tags\n----------+------------------------------------------\n span     | anchor\n----------+------------------------------------------\n [object] | /home/jonathan/Source/nushell/Cargo.toml\n----------+------------------------------------------\n")])])]),a("p",[t._v("現在、パイプライン上の値について２つのメタデータを追跡しています。このデータがどこから読み込まれたかをしめすoriginがあることに気づくでしょう。これによりNuはデータの表示方法をよりよく理解できるのです。")]),t._v(" "),a("p",[t._v("今度はspanをみてみましょう。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> open Cargo.toml | tags | get span\n-------+-----\n start | end\n-------+-----\n 5     | 15\n-------+-----\n")])])]),a("p",[t._v('ここでの"start"と"end"のspanは下線が行のどこにあるのかを示しています。5から15まで数えてみるとそれが"Cargo.toml"ファイル名と一致することがわかるでしょう。このようにして、さきほどみたエラーはどこに下線をひくべきかをしったのです。')])])}),[],!1,null,null,null);e.default=o.exports}}]);