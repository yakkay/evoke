const express = require('express')
const router = express.Router()
const balance = require ('../contract/balance')
const credentials = require('../contract/credentials')
const contract =require('../contract/contract')
const ownerAddress = credentials.owner
var allocation 
var reamainingOfCampaign 
var consumed 
var redeemed 
router.use(express.json());

balance.TotalSupply()
.then((total) => allocation = total)
.catch((error) => console.log(error))

router.get('/',(req,res)=>{
    campaignRemaining()
        res.json(
            {
                address: contract.address,
                name: "Ciudades Sostenibles piloto EAN",
                location: "Colombia",
                status: "Activa",
                thumbnail: "https://evokecolombia.com/theme/image.php/adaptable/theme/1587762760/login",
                token: "EVC",
                startDate: "20/03/2020",
                endDate: "30/05/2020",
                usedBudget:consumed,
                Budget:{
                    allocated: allocation,
                    students:consumed,
                    mentor:0,
                    reamaining: reamainingOfCampaign,
                    redeemed
                },
                users:{
                    donors: 1,
                    students: 259,
                    mentors:0
                },
                donations:[
                    {
                        name: "Plan 2GB",
                        EVC: 2000000,
                        COP: 20000,
                        allocated:220
                    },
                    {
                        name: "Plan 1GB",
                        EVC: 1000000,
                        COP: 10000,
                        allocated:440
                    },
                    {
                        name: "Novela gráfica: Episodio 1",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    },
                    {
                        name: "Novela gráfica: Episodio 2",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    },
                    {
                        name: "Novela gráfica: Tráfico de personas",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    }
                ]
            })
});

async function campaignRemaining() {
    balance.balanceOf(ownerAddress)
    .then((balance) => {
        reamainingOfCampaign = balance
        consumed = allocation - reamainingOfCampaign
    })
    .catch((error) => console.log(error))

    balance.redeemedOf(credentials.redeemedAddress)
    .then((balance) =>{
        redeemed = balance
    })
}

module.exports = router;
