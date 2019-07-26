const bodyParser = require("body-parser"),
        express  = require("express"),
        app = express();


app.use(bodyParser.json());
app.use
const database = {
    users:[{
        id:"124",
        name:"mohamed",
        email:"madad@gmail.com"
    },
    {
        id:"14",
        name:"kayse",
        email:"mca@gmail.com"
    }
]
    
}



app.get('/',function(req,res){
    res.send("<h1>welcome home</h1>")
})

app.post('/register',function(req,res){
    const {name, email}  = req.body;
    database.users.push({
        id:"44",
        name:name,
        email:email
    })
    res.json(database.users)
});

app.listen(process.env.PORT || 2000,console.log("app running"))
