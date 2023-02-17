import express from "express"
import mysql from "mysql";
const app = express()



export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3puzzlepieces",
  database: "my_workday_recap",
});



app.use(express.json())
app.get("/", (req,res)=>{
    res.json("hello")
})

app.get("/my_workday_recap", (req,res)=>{
    const query = "SELECT * FROM my_workday_recap.recap;" 
    db.query(query,(err,data)=>{
        if(err) return res.json("error")
        return res.json(data)
    })
})

app.listen(5000, () => {console.log("server started on port 5000")})