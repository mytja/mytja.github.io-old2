function localize() {
    var item = localStorage.getItem("localization");
    if (item == "SLsi") {
        console.log("Localizing SLsi");
        try {
            localizeSLsi_about();
        } catch {}
        try {
            localizeSLsi_index();
        } catch {}
        try {
            localizeSLsi_langs();
        } catch {}
        try {
            localizeSLsi_projects();
        } catch {}
    }
    else if (item == "ENus") {
        console.log("Localizing ENus");
        try {
            localizeENus_about();
        } catch {}
        try {
            localizeENus_index();
        } catch {}
        try {
            localizeENus_langs();
        } catch {}
        try {
            localizeENus_projects();
        } catch {}
    } else {
        console.log("Setting localization")
        localStorage.setItem("localization", "ENus");
        localize();
    }
}

localize();