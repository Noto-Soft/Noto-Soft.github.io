$("nav").html(`
<a href="/index.html" class="nav-title alternating">Noto-Soft</a>
<a href="/projects.html">Projects</a>
<a href="/contact.html">Contact Us</a>
`);
$("footer").html(`
<button onclick="redirect('/contact.html');">Contact Us</button>
<button onclick="redirect('https://github.com/Noto-Soft');">Our Github</button>
<br /><span class="alternating">Noto-Soft</span> 2025
`);
$("head").prepend(`
<link rel="icon" href="/favicon.png" type="image/png">
`);
$("body").prepend(`
<noscript>you need javascript enabled stinky</noscript>
`);

let title = $("title");
let pagetitle = $('meta[name="ns-page-title"]').attr("content");
title.append("Noto-Soft");
if (pagetitle != "Index") {
    title.append(" | " + pagetitle);
}