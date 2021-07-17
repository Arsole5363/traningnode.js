const request = require('request')
const forecast = (longi,lati,callback)=>{
    url='http://api.weatherstack.com/current?access_key=7ba083b1e0fab838396dc30eb5612553&query='+encodeURIComponent(lati)+','+encodeURIComponent(longi)
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('network error',undefined)

        }
        else if(response.body.error){
            callback('wrong loc',undefined)
        }
        else{
            
        
            callback(undefined,'temp is '+response.body.current.temperature + ' with rain probability ='+response.body.current.precip
            )
        }
    })
}
module.exports =forecast