function localizeSLsi() {
    localStorage.setItem("localization", "SLsi");

    document.getElementById("about").innerHTML = "O meni";
    document.getElementById("programming_langs_tools_i_use").innerHTML = "Programski jeziki in orodja, katere uporaljam";
    document.getElementById("home").innerHTML = "Domov";
    document.getElementById("my_projects").innerHTML = "Moji projekti";
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
    document.getElementById("about-me").innerHTML = "O meni";
}

function localizeSLsi_langs() {
    localizeSLsi();

    document.getElementById("my-personal-website2").innerHTML = "Moja spletna stran";
    document.getElementById("i_know_many_langs").innerHTML = "Poznam veliko programskih jezikov in uporabljam razna orodja za razvoj. Tukaj je nekaj:";
    document.getElementById("used-ides").innerHTML = "Uporabljena razvojna okolja:"
    
    document.getElementById("i_know_py").innerHTML = "Poznam Python kar dobro. Sem zainteresiran v spletne aplikacije in IoT. Razvil sem tudi nekaj knjižic.";
    document.getElementById("i_know_many_tools_py").innerHTML = "Poznam veliko orodij v Pythonu, med drugim tudi Flask in FastAPI";
    
    document.getElementById("title_go").innerHTML = "Še vedno se učim Go, a ga že kar dobro poznam. Znam delati Go backende";
    document.getElementById("title_go2").innerHTML = "Go je 'compilan' jezik, zato je zelo hiter. Go je bil zgrajen za strežnike.";

    document.getElementById("title_fl").innerHTML = "Flutter se uporablja za razvoj aplikacij, čeprav nisem tako zainteresiran vanj, kot v Python or Go, ga poznam.";
    document.getElementById("title_fl2").innerHTML = "Lahko tudi pišem v Dartu.";
    document.getElementById("title_fl3").innerHTML = "Zabavno dejstvo - moja stara spletna stran je bila napisana v Flutterju, a Flutter je imel grozen 'preformance' na spletu";

    document.getElementById("title_html").innerHTML = "Nisem tako zainteresiran v 'frontend' ali pa v spletne strani kot v 'backend'. Poznam HTML a v njem redkokdaj pišem.";
    document.getElementById("title_html2").innerHTML = "Ne poznam ravno CSS-a, minimalno.";

    document.getElementById("title_js").innerHTML = "Raje imam JavaScript kot HTML. Rad imam React, poznam pa tudi HTML5 DOM.";

    document.getElementById("title_arduc").innerHTML = "Zagotovo nisem profesionalec, ampak poznam 'basicse' Arduino C-ja. Lahko pišem za razne projekte, z malo truda ba tudi na bolj zahtevnih projektih.";

    document.getElementById("title_vscode").innerHTML = "Uporabljam ga za Dart in Flutter.";

    document.getElementById("title_jb_top").innerHTML = "JetBrainsova razvojna okolja";
    document.getElementById("title_jb").innerHTML = "Uporabljam PyCharm za Python, GoLand za Go, WebStorm pa za razvoj spletnih aplikacij.";

    document.getElementById("title_andstu").innerHTML = "Android Studio uporabljam za razvoj aplikacij za Android.";
}

function localizeSLsi_projects() {
    localizeSLsi();

    document.getElementById("my-personal-website2").innerHTML = "Moja spletna stran";

    document.getElementById("my-projects").innerHTML = "Moji projekti:";

    document.getElementById("title_meetplan").innerHTML = "MeetPlan je zmogljiv organizator srečanj na Zoomu ipd. Razvit je bil specifično za šole. Zgrajen je na Flask 'frameworku', v Pythonu";
}






// ENus

function localizeENus() {
    localStorage.setItem("localization", "ENus");

    document.getElementById("about").innerHTML = "About";
    document.getElementById("programming_langs_tools_i_use").innerHTML = "Programming languages and tools I use";
    document.getElementById("home").innerHTML = "Home";
    document.getElementById("my_projects").innerHTML = "My projects";
    document.getElementById("my-personal-website").innerHTML = "My personal website";
}

function localizeENus_index() {
    localizeENus();
    document.getElementById("this-page-helps").innerHTML = "This page helps you to know me & my projects better.";
    document.getElementById("hi_there").innerHTML = "Hi there 👋";
    document.getElementById("my-personal-website2").innerHTML = "My personal website";
}

function localizeENus_about() {
    localizeENus();
    document.getElementById("hello_i_am").innerHTML = 'Hello, I am <a href="https://github.com/mytja">@mytja</a>';
    document.getElementById("im_a_os_developer").innerHTML = "I am a open-souce developer and a student.";
    document.getElementById("about-me").innerHTML = "About me";
}

function localizeENus_langs() {
    localizeENus();

    document.getElementById("my-personal-website2").innerHTML = "My personal website";
    document.getElementById("i_know_many_langs").innerHTML = "I know many languages, and use many tools. Here are some:";
    document.getElementById("used-ides").innerHTML = "Used IDEs:"
    
    document.getElementById("i_know_py").innerHTML = "I know Python well. I am mostly interested in web apps and IoT. I have developed some libraries.";
    document.getElementById("i_know_many_tools_py").innerHTML = "I know many tools, like FastAPI and Flask.";
    
    document.getElementById("title_go").innerHTML = "I am still learing Go, but I know quite a lot of it. I can make Go backends.";
    document.getElementById("title_go2").innerHTML = "Go is compiled language, thus it is very fast. Go was built for servers.";

    document.getElementById("title_fl").innerHTML = "Flutter is used for app development, although I am not interested as much as in Python or Go, I know it.";
    document.getElementById("title_fl2").innerHTML = "I can also write native Dart apps.";
    document.getElementById("title_fl3").innerHTML = "Fun fact - my old website was written in Flutter, but Flutter had a terrible preformance on web";

    document.getElementById("title_html").innerHTML = "I am not as interested in frontend or in websites, as in backend. I know it, but I don't write it that often.";
    document.getElementById("title_html2").innerHTML = "I don't really know CSS, maybe bare minimum.";

    document.getElementById("title_js").innerHTML = "I like JavaScript more than HTML. I like React and know quite a lot of HTML5 DOM.";

    document.getElementById("title_arduc").innerHTML = "While I am definetly not a pro, I know basics of Arduino C. I can create basic Arduino code, with some labour even advanced ones.";

    document.getElementById("title_vscode").innerHTML = "I use it for Dart/Flutter.";

    document.getElementById("title_jb_top").innerHTML = "JetBrains' IDEs";
    document.getElementById("title_jb").innerHTML = "I use PyCharm for Python, GoLand for Go, WebStorm for web development.";

    document.getElementById("title_andstu").innerHTML = "I use it for Native Android development.";
}

function localizeENus_projects() {
    localizeENus();

    document.getElementById("my-personal-website2").innerHTML = "My personal website";

    document.getElementById("my-projects").innerHTML = "My projects:";

    document.getElementById("title_meetplan").innerHTML = "MeetPlan is a powerful meetings organizer. It was specifically designed with schools in mind. It is based on Flask, Python";
}