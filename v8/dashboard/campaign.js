const axios = require('axios')
const express = require('express')
const router = express.Router()
const balance = require ('../contract/balance')
const credentials = require('../contract/credentials')
const contract =require('../contract/contract')
const ownerAddress = credentials.owner
const host= credentials.host
const section = credentials.section
const productListURL = `${host}/sections/${section}/items`
const bearer = credentials.bearer
const options = {
    headers: {
        accept: "application/json",
        Authorization: bearer,
    }
}
var allocation = 880000000
var redeemed = 0
router.use(express.json());

balance.TotalSupply()
.then((total) => allocation = total)
.catch((error) => console.log(error))

router.get('/',async (request,response)=>{
    await campaignRemaining()
    .then((campaignBalance) =>{
        response.json(
            {
                address: contract.address,
                name: "Ciudades Sostenibles piloto EAN",
                location: "Colombia",
                status: "Activa",
                thumbnail: "https://evokecolombia.com/theme/image.php/adaptable/theme/1587762760/login",
                token: "EVC",
                startDate: "20/03/2020",
                endDate: "30/05/2020",
                usedBudget:campaignBalance[1],
                Budget:{
                    allocated: allocation,
                    students:campaignBalance[1],
                    mentor:0,
                    reamaining: campaignBalance[0],
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
                        name: "Novela grafica: Episodio 1",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    },
                    {
                        name: "Novela grafica: Episodio 2",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    },
                    {
                        name: "Novela grafica: Trafico de personas",
                        EVC: 250000,
                        COP: 0,
                        allocated:0
                    }
                ]
            })
    }
    )
    .catch((error) => Console.log(error))
});

router.get('/donations',async (request,response) => {
    await getProducts()
    .then((products) =>{
        response.json(products)
    }).catch((error) => console.log(error))
})

async function getProducts() {
    return new Promise((resolve,reject) => {
        axios.get(productListURL,options)
        .then(response =>{
            const products = response.data
            return resolve(products)
        }).catch((error)=>{return reject(error)})
    })
}

async function campaignRemaining() {
    return new Promise ((resolve,reject) =>{
        balance.balanceOf(ownerAddress)
        .then((reamainingOfCampaign) => {
            const consumed = allocation - reamainingOfCampaign
            return resolve([reamainingOfCampaign,consumed])
        })
        .catch((error) => {return reject(error)})
    })
}


module.exports = router;
