(function(dust){dust.register("errors\/404",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<h1>Lehekülge ei leitud</h1><p>Soovitud lehte aadressiga <code>\"").f(ctx.get(["url"], false),ctx,"h").w("\"</code> ei leitud. </p>");}body_1.__dustBody=!0;return body_0;})(dust);