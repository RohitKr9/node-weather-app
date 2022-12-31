const path=require('path')
const express=require('express')
const hbs=require('hbs')
const forecast=require('./utils/forecast.js')

const app = express()

const publicDirPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewPath)  //beacuse we changes the folder, so we are redefining path
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Rohit'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send({
            error:'please provide location'
        })
    }

    return forecast(req.query.location,(error,data)=>{
        if(data===undefined){
            return res.send({
                error: error
            })
        } 
        return res.send(data)
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Rohit'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help page',
        name:'Rohit'
    })

app.get('/help/*',(req,res)=>{
    res.render('error',{
        message:'Help not found',
        name:'Rohit'
    })
})

app.get('*',(req,res)=>{
    res.render('error',{
        message:'404 page not found',
        name:'Rohit'
    })
})
})
// app.use(express.static(publicDirPath+'/help.html'))

// app.use(express.static(publicDirPath+'/about.html'))

// app.get('/about',(req,res)=>{
//     res.send('<h1>About the app</h1><h2>test is on</h2>')
// })



app.listen(3000,()=>{
    console.log('running server')
})
