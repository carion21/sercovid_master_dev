class ElementSidebare {
    
    static  nouveauElement(texte, route, icone, active, description){

        var nouveau = {
            texte: texte,
            route: route,
            icone: icone,
            active: active,
            description: description
        }

        return nouveau

    }
}

module.exports = ElementSidebare