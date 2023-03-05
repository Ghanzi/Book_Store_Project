const  mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()
const catRoutes=require("./routes/category.routes")
const bookRoutes=require("./routes/book.routes")
const userRoutes=require("./routes/user.routes")
app.use(cors())
app.use(express.json())
app.use("/categories",catRoutes)
app.use("/books",bookRoutes)
app.use("/users",userRoutes)
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL).then(result=>
             app.listen(process.env.PORT,()=>{
                   console.log("server is running ..")
        })

    ).catch(error=>console.log(error))
    


