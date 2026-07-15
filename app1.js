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

const Vendor = mongoose.model("Vendors", new mongoose.Schema(

    {
        vendorid: String,
        vendorname: String,
        ownername: String,
        phonenumber: String,
        email: String,
        businessname: String,
        foodcategory: String,
        cuisinetype: String,
        numberofstaff: String,
        licensenumber: String,
        bookingdate: String,
        paymentstatus: String,
        stallnumber: String
    }

))

app.post("/add-vendor", async (request, response) => {

    await Vendor.create(request.body)

    response.json({ "status": "success" })

})

app.post("/view-vendor", async (request, response) => {

    const Vendors = await Vendor.find()

    response.json(Vendors)

})

app.listen(3000, () => {

    console.log("server started")

})