const request = require('request')

const geocode=(adress,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoidWpqd2Fsc2hpbmRlIiwiYSI6ImNrcjRvNGNhdDJ4ZjkydnFhNzM3OHpuY3EifQ.D_-9O8qy8VPbrlreILuzDQ&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('network error',undefined)

        }
        else if(response.body.features.length===0){
            callback('wrong loc',undefined)
        }
        else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        const location = response.body.features[0].place_name
            callback(undefined,{
                longitude:longitude,
                latitude:latitude,
                location:location
            })
    }
       
        
     })
}
module.exports = geocode


