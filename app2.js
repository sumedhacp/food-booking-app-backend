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

const Stall = mongoose.model("Stalls", new mongoose.Schema(

    {
        bookingId: String,
        petName: String,
        petType: String,
        breed: String,
        age: String,
        weightKg: String,
        vaccinationStatus: String,
        ownerName: String,
        ownerPhone: String,
        ownerEmail: String,
        checkInDate: String,
        checkOutDate: String,
        kennelNumber: String
    }

))

app.post("/add-stall", async (request, response) => {

    await Stall.create(request.body)

    response.json({ "status": "success" })

})

app.post("/view-stall", async (request, response) => {

    const stalls = await Stall.find()

    response.json(stalls)

})

app.listen(3000, () => {

    console.log("server started")

})