const mongoose=require('mongoose')

require('dotenv/config')
const ConnectDb=()=>{
    try {
        mongoose.connect(process.env.DB_CONNECTION)
        console.log('the database is already connected')
   
    } catch (error) {console.log(error)
        
    }
}
module.exports=ConnectDb