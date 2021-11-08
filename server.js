const express=require('express')
const ConnectDb=require('./config/ConnectDb')
const app=express()
const router=require('./Routes/Users')


app.use(express.json())


ConnectDb()

const port=4000






app.use('/api',router)
app.listen(port,()=>{console.log(`the server is running at port ${port} `)})