const Sidebare = require('../config/sidebare')
const ElementSidebare = require('../config/element_sidebare')

var text1 = `
Il recense et pourrait recenser une pile d'informations principalements statistiques permettant d'avoir
un suivi global chiffré de la pandémie mais et surtout des Individus suivis par le système.
`

var text2 = `
Il se compose de 3 cadres principaux : "Liste par catégorie", "Recherche par lot de catégorie", "Recherche poussée par 
lot de catégorie".  Dans la première option on classe les individus en 5 catégories. Dans la seconde on peut effectuer des recherches croisées.
On pourra faire environ 14 combinaisons différentes de recherches afin d'être un peu plus précis. Exemple : "Actif mais suspect", "Sain, Suspect mais actifs"
Dans la troisième en plus d'avoir les fonctionnalités précédente on pourra rechercher un individu en se basant sur du multicritère : "Identifiant, nom, age, etc..."

`

var text3 = `
Cette option nous offre les deux plus grandes fonctionnalités du système "SERCOVID-19" à savoir : 
___le tracking d'individus dans lequel on peut creer des cibles et les "TRACKER" pour connaître leur trajet et qui ils ont probablement rencontrés. <br>
___le tracking de zône dans lequel on peut créer une zône la cibler, lui changer de statut et ainsi informer l'ensemble des Individus afin qu'il ne s'y aventurent 
pas par exemple et bien d'autres.
`

var text4 = `
Cette option permet de créer des notifications Media pour l'instant et informer les Usagers détenteurs de l'application mobile et ainsi ils pourront aussi informer leurs proches.
`

var text5 = `
Cette option est destinée à permettre un suivi "temps réel" cartographique de la pandémie, des utilisateurs , des zônes aussi.
`



const tabsidebase = [
    ElementSidebare.nouveauElement("Tableau de bord", "/root/index", "dashboard", 0, text1),
    ElementSidebare.nouveauElement("Gestion Individus", "/root/gestion_individus", "people", 0, text2),
    ElementSidebare.nouveauElement("Tracking", "/root/tracking", "gps_fixed", 0, text3),
    ElementSidebare.nouveauElement("Service Com.", "/root/service_com", "rss_feed", 0, text4),
    ElementSidebare.nouveauElement("Service Mapping", "/root/service_mapping", "place", 0, text5)
]

module.exports = tabsidebase