import mongoose from mongoose
const DBURL = "mongodb+srv://lalashubham:shubham1234@cluster1.bncu9xa.mongodb.net/"
const connect_db = async () =>{
    try{
const connectionobj = await mongoose.connect (`${DBURL}`)
console.log("connection establish with MONGODB");
    }
    catch(err){
        console.log(err);
    }
}
export default connect_db