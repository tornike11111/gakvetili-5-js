let navi=['home','aboutus','gallery','contact'];
let linkebi=['index.html','aboutus.html','gallerey.html','contact.html'];

let navtext='<ul class="flex">';

for(a=0; a<navi.length; a++){
    navtext+='<li><a href="'+ linkebi[a] + '">' + navi[a]+ '</a></li>'

    navtext+= "</ul>"
    document.getElementById("nav").innerHTML=navtext;
}