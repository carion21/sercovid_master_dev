class Constante {

    static constMap(){
        const idgmap = "AIzaSyCxKb9jE9UE66tQIzITFl7U8s2M3ROGNcI"
        return idgmap
    }

    static constSiteLocal(){
        const siteLocal = "https://news.google.com/covid19/map?hl=fr&gl=FR&ceid=FR%3Afr&mid=%2Fm%2F0fv4v"
        return siteLocal
    }

    static constSiteNonLocal(){
        const siteNonLocal = ""
        return siteNonLocal
    }

    static constSercovid2(env){
        const siteDev = "http://localhost:4545/sercovid2/avert_new_notif"
        const siteProd = "https://heroku-sercovid2.herokuapp.com/sercovid2/avert_new_notif"
        switch (env) {
            case "dev":
                return siteDev
                break;
            case "prod":
                return siteProd
                break;
        
            default:
                return ""
                break;
        }
    }

}

module.exports = Constante