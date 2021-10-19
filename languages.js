function localizeSLsi() {
    document.getElementById("about").innerHTML = "O meni";
    document.getElementById("programming_langs_tools_i_use").innerHTML = "Programski jeziki in orodja, katere uporaljam";
    document.getElementById("home").innerHTML = "Domov";
    document.getElementById("my-personal-website").innerHTML = "Moja spletna stran";
}

function localizeSLsi_index() {
    localizeSLsi();
    document.getElementById("this-page-helps").innerHTML = "Ta spletna stran ti pomaga, da mene in moje projekte bolje poznaš.";
    document.getElementById("hi_there").innerHTML = "Pozdravljen 👋";
    document.getElementById("my-personal-website2").innerHTML = "Moja spletna stran";
}

function localizeSLsi_about() {
    localizeSLsi();
    document.getElementById("hello_i_am").innerHTML = 'Pozdravljen, jaz sem <a href="https://github.com/mytja">@mytja</a>';
    document.getElementById("im_a_os_developer").innerHTML = "Sem razvijalec odprtokodne opreme in študent."
}

function localizeSLsi_langs() {
    localizeSLsi();

    document.getElementById("my-personal-website2").innerHTML = "Moja spletna stran";
    document.getElementById("i_know_many_langs").innerHTML = "Poznam veliko programskih jezikov in uporabljam razna orodja za razvoj. Tukaj je nekaj:";
    
    document.getElementById("i_know_py").innerHTML = "Poznam Python kar dobro. Sem zainteresiran v spletne aplikacije in IoT. Razvil sem tudi nekaj knjižic.";
    document.getElementById("i_know_many_tools_py").innerHTML = "Poznam veliko orodij v Pythonu, med drugim tudi Flask in FastAPI";
    
    document.getElementById("title_go").innerHTML = "Še vedno se učim Go, a ga že kar dobro poznam. Znam delati Go backende";
    document.getElementById("title_go2").innerHTML = "Go je 'compilan' jezik, zato je zelo hiter. Go je bil zgrajen za strežnike.";

    document.getElementById("title_fl").innerHTML = "Flutter se uporablja za razvoj aplikacij, čeprav nisem tako zainteresiran vanj, kot v Python or Go, ga poznam.";
    document.getElementById("title_fl2").innerHTML = "Lahko tudi pišem v Dartu.";
    document.getElementById("title_fl3").innerHTML = "Zabavno dejstvo - moja stara spletna stran je bila napisana v Flutterju, a Flutter je imel grozen 'preformance' na spletu";

    document.getElementById("title_html").innerHTML = "Nisem tako zainteresiran v 'frontend' ali pa v spletne strani kot v 'backend'. Poznam HTML a v njem redkokdaj pišem.";
    document.getElementById("title_html2").innerHTML = "Ne poznam ravno CSS-a, minimalno.";

    document.getElementById("title_js").innerHTML = "Raje imam JavaScript kot HTML. Rad imam React, poznam pa tudi HTML5 DOM."
}