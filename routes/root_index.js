var express = require('express');
var router = express.Router();
const Sidebare = require('../config/sidebare')
const tabsidebase = require('../config/tabsidebase')

const Individu = require('../models/Individu')
const StatLocal = require('../models/StatLocal')
const StatNonLocal = require('../models/StatNonLocal')


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
        if (futindividus.length !== 0 && futindividus !== null) {
            total_suivis = futindividus.length
            total_inscrits = futindividus.length

            futindividus.forEach(individu => {
                if (individu.estActif == 1) {
                    total_actifs++
                    total_connectes++
                } else {
                    total_nonactifs++
                    total_deconnectes++
                }
                if (individu.statut == 0) {
                    total_sains++
                }
                if (individu.statut == 1) {
                    total_suspects++
                }
                if (individu.statut == 2) {
                    total_infectes++
                }
            });
            let laststatlocal;
            StatLocal.findLast((futlastlocal) => {
                if (futlastlocal.length === 1) {
                    laststatlocal = futlastlocal[0]
                    console.log(laststatlocal)

                    let laststatnonlocal;
                    StatNonLocal.findLast((futlastnonlocal) => {
                        if (futlastnonlocal.length === 1) {
                            laststatnonlocal = futlastnonlocal[0]
                            console.log(laststatnonlocal)

                            res.render(
                                'root/index/index', {
                                    tabside: tabside,
                                    idpage: idpage,
                                    total_suivis: total_suivis,
                                    total_actifs: total_actifs,
                                    pourcent_actifs: ((total_actifs / total_suivis) * 100).toFixed(2),
                                    total_nonactifs: total_nonactifs,
                                    pourcent_nonactifs: ((total_nonactifs / total_suivis) * 100).toFixed(2),
                                    total_inscrits: total_inscrits,
                                    total_connectes: total_connectes,
                                    pourcent_connectes: ((total_connectes / total_inscrits) * 100).toFixed(2),
                                    total_deconnectes: total_deconnectes,
                                    pourcent_deconnectes: ((total_deconnectes / total_inscrits) * 100).toFixed(2),
                                    total_sains: total_sains,
                                    pourcent_sains: ((total_sains / total_inscrits) * 100).toFixed(2),
                                    total_suspects: total_suspects,
                                    pourcent_suspects: ((total_suspects / total_inscrits) * 100).toFixed(2),
                                    total_infectes: total_infectes,
                                    pourcent_infectes: ((total_infectes / total_inscrits) * 100).toFixed(2),
                                    total_decedes: total_decedes,
                                    pourcent_decedes: ((total_decedes / total_inscrits) * 100).toFixed(2),
                                    statlocal: laststatlocal,
                                    pourcent_local_ng: ((laststatlocal.totalNonGueris / laststatlocal.totalCas) * 100).toFixed(2),
                                    pourcent_local_gu: ((laststatlocal.totalGueris / laststatlocal.totalCas) * 100).toFixed(2),
                                    pourcent_local_dc: ((laststatlocal.totalDeces / laststatlocal.totalCas) * 100).toFixed(2),
                                    statnonlocal: laststatnonlocal,
                                    pourcent_nonlocal_ng: ((laststatnonlocal.totalNonGueris / laststatnonlocal.totalCas) * 100).toFixed(2),
                                    pourcent_nonlocal_gu: ((laststatnonlocal.totalGueris / laststatnonlocal.totalCas) * 100).toFixed(2),
                                    pourcent_nonlocal_dc: ((laststatnonlocal.totalDeces / laststatnonlocal.totalCas) * 100).toFixed(2),
                                }
                            );
                        }
                    })

                }
            })
        }
    })

});

router.get('/documentation', (req, res, next) => {
    var idpage = 5
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