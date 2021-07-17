const express =require('express')
const path =require('path')
const hbs=require('hbs')
const app=express()
const geocode=require('./utility/geocode')
const forecast =require('./utility/forecast')
const dirpath =path.join(__dirname,'../public')
const viewspath= path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)

app.use(express.static(dirpath))


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'kill me',
        msg:'i dont wanna live'

    })

})
app.get('',(req,res)=>{
    res.render('index')

})
app.get('/weather',(req,res)=>{
    if(!req.query.adress){
        return res.send({error:"Error: adress required"})

    }
    geocode(req.query.adress,(error,response)=>{
        if(error){
            console.log('error occured as '+error)
        }
        else{
            // console.log(response)
            forecast(response.latitude, response.longitude, (error, data) => {
                // console.log('Error', error)
                // console.log('Data', data)
                // console.log(response.location)
                res.send({
                    forecast:data,
                    location:response.location,
                    adress:req.query.adress

                })
              })
        }
    })
    
    
    // res.render('weather',{
    //     title:req.query.adress,
        

    // })

})

app.get('*',(req,res)=>{
    res.send('my 404 page')
})
app.listen(3000,()=>{
    console.log('server is started')
})