var express = require('express');
var router = express.Router();
const Sidebare = require('../config/sidebare')
const tabsidebase = require('../config/tabsidebase')

const Individu = require('../models/Individu')


/* GET home page. */
router.get('/', function (req, res, next) {
    var idpage = 0
    var tabside = Sidebare.activeSidebare(tabsidebase, idpage)
    console.log("================================================================================")
    console.log(tabside[idpage])
    console.log("================================================================================")

    let total_suivis = 0
    let total_actifs = 0
    let total_nonactifs = 0
    

    let total_inscrits = 0
    let total_connectes = 0
    let total_deconnectes = 0

    let total_sains = 0
    let total_suspects = 0
    let total_infectes = 0
    let total_decedes = 0



    Individu.all((futindividus) => {
        if(futindividus.length !== 0 && futindividus !== null){
            total_suivis = futindividus.length
            total_inscrits = futindividus.length

            futindividus.forEach(individu => {
                if(individu.estActif == 1){
                    total_actifs++
                    total_connectes++
                } else {
                    total_nonactifs++
                    total_deconnectes++
                }
                if(individu.statut == 0){
                    total_sains++
                }if(individu.statut == 1){
                    total_suspects++
                }
                if(individu.statut == 2){
                    total_infectes++
                }
            });

            res.render(
                'root/index/index', {
                    tabside: tabside,
                    idpage: idpage,
                    total_suivis: total_suivis,
                    total_actifs: total_actifs,
                    pourcent_actifs: ((total_actifs/total_suivis)*100).toFixed(2),
                    total_nonactifs: total_nonactifs,
                    pourcent_nonactifs: ((total_nonactifs/total_suivis)*100).toFixed(2),
                    total_inscrits: total_inscrits,
                    total_connectes: total_connectes,
                    pourcent_connectes: ((total_connectes/total_inscrits)*100).toFixed(2),
                    total_deconnectes: total_deconnectes,
                    pourcent_deconnectes: ((total_deconnectes/total_inscrits)*100).toFixed(2),
                    total_sains: total_sains,
                    pourcent_sains: ((total_sains/total_inscrits)*100).toFixed(2),
                    total_suspects: total_suspects,
                    pourcent_suspects: ((total_suspects/total_inscrits)*100).toFixed(2),
                    total_infectes: total_infectes,
                    pourcent_infectes: ((total_infectes/total_inscrits)*100).toFixed(2),
                    total_decedes: total_decedes,
                    pourcent_decedes: ((total_decedes/total_inscrits)*100).toFixed(2),
                }
            );
        }
    })
    
});

router.get('/documentation', (req, res, next) => {
    var idpage = 0
    var tabside = Sidebare.activeSidebare(tabsidebase, idpage)
    console.log("================================================================================")
    console.log(tabside[idpage])
    console.log("================================================================================")

    res.render('root/index/documentation', {
        tabside: tabside,
        idpage: idpage,
    })
})

module.exports = router;