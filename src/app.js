

    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))


app.set('view engine', 'hbs');

 const viewsDirectory = path.join (__dirname , '../temp1/views')
 app.set('views', viewsDirectory);

 
 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Temp1/partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "HOME",
        desc : "This is home page",
        foot: "Eng.Aous Mohammad Younes"
    })
})

app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "Aous Younes",
        city:"Syria",
        age: 33,
        img1: "images/1.jpg",
        foot: "Eng.Aous Mohammad Younes"
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "islam mohammad",
        city:"mansoura",
        age: 27,
        img2: "images/3.jpg",
        foot: "Eng.Aous Mohammad Younes"
    })
})

app.get ('/about' , (req,res) => {
    res.render('about' , {
        title : "ABOUT",
        name: "Eng.Aous Mohammad Younes",
        city:"Tartous",
        age: 33,
        img3: "images/2.jpg",
        foot: "Eng.Aous Mohammad Younes"
    })
})




  

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////


