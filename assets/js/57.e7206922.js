(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{453:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-tables"}},[e._v("#")]),e._v(" Working with tables")]),e._v(" "),a("p",[e._v("One of the common ways of seeing data in Nu is through a table. Nu comes with a number of commands for working with tables to make it convenient to find what you're looking for, and for narrowing the data to just what you need.")]),e._v(" "),a("p",[e._v("To start off, let's get a table that we can use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified \n───┼───────────────┼──────┼─────────┼────────────\n 0 │ files.rs      │ File │  4.6 KB │ 5 days ago \n 1 │ lib.rs        │ File │   330 B │ 5 days ago \n 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago \n 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago \n 4 │ path.rs       │ File │  2.1 KB │ 5 days ago \n 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago \n 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago \n───┴───────────────┴──────┴─────────┴────────────\n")])])]),a("h2",{attrs:{id:"sorting-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sorting-the-data"}},[e._v("#")]),e._v(" Sorting the data")]),e._v(" "),a("p",[e._v("We can sort a table by calling the "),a("code",[e._v("sort-by")]),e._v(" command and telling it which columns we want to use in the sort. Let's say we wanted to sort our table by the size of the file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | sort-by size\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified \n───┼───────────────┼──────┼─────────┼────────────\n 0 │ lib.rs        │ File │   330 B │ 5 days ago \n 1 │ signature.rs  │ File │  1.2 KB │ 5 days ago \n 2 │ path.rs       │ File │  2.1 KB │ 5 days ago \n 3 │ files.rs      │ File │  4.6 KB │ 5 days ago \n 4 │ shapes.rs     │ File │  4.7 KB │ 5 days ago \n 5 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago \n 6 │ parse.rs      │ File │ 49.8 KB │ 1 day ago \n───┴───────────────┴──────┴─────────┴────────────\n")])])]),a("p",[e._v('We can sort a table by any column that can be compared. For example, we could also have sorted the above using the "name", "accessed", or "modified" columns.')]),e._v(" "),a("h2",{attrs:{id:"selecting-the-data-you-want"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selecting-the-data-you-want"}},[e._v("#")]),e._v(" Selecting the data you want")]),e._v(" "),a("p",[e._v("We can select data from a table by choosing to select specific columns or specific rows.  Let's "),a("code",[e._v("select")]),e._v(" a few columns from our table to use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | select name size\n───┬───────────────┬─────────\n # │ name          │ size \n───┼───────────────┼─────────\n 0 │ files.rs      │  4.6 KB \n 1 │ lib.rs        │   330 B \n 2 │ lite_parse.rs │  6.3 KB \n 3 │ parse.rs      │ 49.8 KB \n 4 │ path.rs       │  2.1 KB \n 5 │ shapes.rs     │  4.7 KB \n 6 │ signature.rs  │  1.2 KB \n───┴───────────────┴─────────\n")])])]),a("p",[e._v("This helps to create a table that's more focused on what we need.  Next, let's say we want to only look at the 5 smallest files in this directory:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | sort-by size | first 5\n───┬──────────────┬──────┬────────┬────────────\n # │ name         │ type │ size   │ modified \n───┼──────────────┼──────┼────────┼────────────\n 0 │ lib.rs       │ File │  330 B │ 5 days ago \n 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago \n 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago \n 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago \n 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago \n───┴──────────────┴──────┴────────┴────────────\n")])])]),a("p",[e._v("You'll notice we first sort the table by size to get to the smallest file, and then we use the "),a("code",[e._v("first 5")]),e._v(" to return the first 5 rows of the table.")]),e._v(" "),a("p",[e._v("You can also "),a("code",[e._v("skip")]),e._v(" rows that you don't want.  Let's skip the first two of the 5 rows we returned above:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | sort-by size | first 5 | skip 2\n───┬───────────┬──────┬────────┬────────────\n # │ name      │ type │ size   │ modified \n───┼───────────┼──────┼────────┼────────────\n 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago \n 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago \n 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago \n───┴───────────┴──────┴────────┴────────────\n")])])]),a("p",[e._v("We've narrowed it to three rows we care about.")]),e._v(" "),a("p",[e._v("Let's look at a few other commands for selecting data.  You may have wondered why the rows of the table are numbers. This acts as a handy way to get to a single row.  Let's sort our table by the file name and then pick one of the rows with the "),a("code",[e._v("nth")]),e._v(" command using its row number:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | sort-by name\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified \n───┼───────────────┼──────┼─────────┼────────────\n 0 │ files.rs      │ File │  4.6 KB │ 5 days ago \n 1 │ lib.rs        │ File │   330 B │ 5 days ago \n 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago \n 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago \n 4 │ path.rs       │ File │  2.1 KB │ 5 days ago \n 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago \n 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago \n───┴───────────────┴──────┴─────────┴────────────\n\n> ls | sort-by name | nth 5\n──────────┬────────────\n name     │ shapes.rs \n type     │ File \n size     │ 4.7 KB \n modified │ 5 days ago \n──────────┴────────────\n")])])]),a("h2",{attrs:{id:"getting-data-out-of-a-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-data-out-of-a-table"}},[e._v("#")]),e._v(" Getting data out of a table")]),e._v(" "),a("p",[e._v("So far, we've worked with tables by trimming the table down to only what we need. Sometimes we may want to go a step further and only look at the values in the cells themselves rather than taking a whole column. Let's say, for example, we wanted to only get a list of the names of the files. For this, we use the "),a("code",[e._v("get")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | get name\n───┬───────────────\n 0 │ files.rs \n 1 │ lib.rs \n 2 │ lite_parse.rs \n 3 │ parse.rs \n 4 │ path.rs \n 5 │ shapes.rs \n 6 │ signature.rs \n───┴───────────────\n")])])]),a("p",[e._v("We now have the values for each of the filenames.")]),e._v(" "),a("p",[e._v("This might look like the "),a("code",[e._v("select")]),e._v(" command we saw earlier, so let's put that here as well to compare the two:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | select name\n───┬───────────────\n # │ name \n───┼───────────────\n 0 │ files.rs \n 1 │ lib.rs \n 2 │ lite_parse.rs \n 3 │ parse.rs \n 4 │ path.rs \n 5 │ shapes.rs \n 6 │ signature.rs \n───┴───────────────\n")])])]),a("p",[e._v("These look very similar! Let's see if we can spell out the difference between these two commands to make it clear:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("select")]),e._v(" - creates a new table which includes only the columns specified")]),e._v(" "),a("li",[a("code",[e._v("get")]),e._v(" - returns the values inside the column specified as a list")])]),e._v(" "),a("p",[e._v("The one way to tell these apart looking at the table is the characteristic "),a("code",[e._v("value")]),e._v(" column name, which lets us know that this is going to be a list of values we can work with.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("get")]),e._v(" command can go one step further and take a path to data deeper in the table. This simplifies working with more complex data, like the structures you might find in a .json file.")]),e._v(" "),a("h2",{attrs:{id:"changing-data-in-a-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-data-in-a-table"}},[e._v("#")]),e._v(" Changing data in a table")]),e._v(" "),a("p",[e._v("In addition to selecting data from a table, we can also update what the table has. We may want to add new columns, or edit the contents of a cell. In Nu, rather than editing in place, each of the commands in the section will return a new table in the pipeline.")]),e._v(" "),a("h3",{attrs:{id:"adding-a-new-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-column"}},[e._v("#")]),e._v(" Adding a new column")]),e._v(" "),a("p",[e._v("We can use the "),a("code",[e._v("add")]),e._v(" command to add a new column to the table. Let's look at an example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018 \n─────────┴──────\n")])])]),a("p",[e._v('Let\'s add an column called "next_edition" with the value 2021:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml | insert next_edition 2021\n──────────────┬──────\n edition      │ 2018 \n next_edition │ 2021 \n──────────────┴──────\n")])])]),a("p",[e._v("Notice that we if open the original file, the contents have stayed the same:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018 \n─────────┴──────\n")])])]),a("p",[e._v("Changes in Nu are functional changes, meaning that they work on the values themselves rather than trying to cause a permanent change. This lets us do many different types of work in our\npipeline until we're ready to write out the result with any changes we'd like if we choose to. Here we could write out the result using the "),a("code",[e._v("save")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml\n> open rustfmt2.toml\n──────────────┬──────\n edition      │ 2018 \n next_edition │ 2021 \n──────────────┴──────\n")])])]),a("h3",{attrs:{id:"updating-a-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-column"}},[e._v("#")]),e._v(" Updating a column")]),e._v(" "),a("p",[e._v("Similarly to the "),a("code",[e._v("insert")]),e._v(" command, we can also use the "),a("code",[e._v("update")]),e._v(" command to change the contents of a column to a new value. To see it in action let's open the same file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018 \n─────────┴──────\n")])])]),a("p",[e._v("And now, let's update the edition to point at the next edition we hope to support:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml | update edition 2021\n─────────┬──────\n edition │ 2021 \n─────────┴──────\n")])])]),a("h3",{attrs:{id:"incrementing-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incrementing-values"}},[e._v("#")]),e._v(" Incrementing values")]),e._v(" "),a("p",[e._v("There's one more command that Nu supports that will help us work with numbers and versions: "),a("code",[e._v("inc")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018 \n─────────┴──────\n> open rustfmt.toml | inc edition\n─────────┬──────\n edition │ 2019 \n─────────┴──────\n")])])]),a("p",[e._v('Because the value in "edition" is a number, we can use '),a("code",[e._v("inc")]),e._v(" to update it.  Where "),a("code",[e._v("inc")]),e._v(" really shines is working with versions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open Cargo.toml | get package.version\n0.1.3\n> open Cargo.toml | inc package.version --minor | get package.version\n0.2.0\n")])])]),a("p",[e._v("When working with versions, we can use the flag to say how to increment the version:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("--major")]),e._v(" - increment the major version (0.1.3 -> 1.0.0)")]),e._v(" "),a("li",[a("strong",[e._v("--minor")]),e._v(" - increment the minor version (0.1.3 -> 0.2.0)")]),e._v(" "),a("li",[a("strong",[e._v("--patch")]),e._v(" - increment the patch version (0.1.3 -> 0.1.4)")])])])}),[],!1,null,null,null);t.default=n.exports}}]);