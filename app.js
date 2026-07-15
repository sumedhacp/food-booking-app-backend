const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://sumedha:sumu123@ac-nr9nhaz-shard-00-00.jv4x88s.mongodb.net:27017,ac-nr9nhaz-shard-00-01.jv4x88s.mongodb.net:27017,ac-nr9nhaz-shard-00-02.jv4x88s.mongodb.net:27017/fooddb?ssl=true&replicaSet=atlas-11vj1p-shard-0&authSource=admin&appName=Cluster0").then(

    () => {
        console.log("MongoDB Connected")
    }

).catch(

    (error) => {

        console.log(error)

    }

)

const Food = mongoose.model("Foods", new mongoose.Schema(
    
    {
        menuId: String,
        vendorId: String,
        vendorName: String,
        foodItemName: String,
        foodCategory: String,
        cuisineType: String,
        price: String,
        availabilityStatus: String,
        specialOffer: String,
        foodImageUrl: String
    }

))

app.post("/add-food", async (request, response) => {

    await Food.create(request.body)

    response.json({ "status": "success" })

})

app.post("/view-food", async (request, response) => {

    const Foods = await Food.find()

    response.json(Foods)

})

app.listen(3000, () => {

    console.log("server started")

})