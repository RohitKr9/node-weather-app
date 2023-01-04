const request = require("request")

const forecast=(location,callback)=>{
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+location+'?unitGroup=metric&key=ZRR7TDXFQH3SGFGEN7QB5CYAE&contentType=json'

    request(url,{json:true},(error,response)=>{
        if(error){
            callback('unable to connect to server',undefined)
        }else if(!response.body.currentConditions){
            callback('Unable to find results for the loaction, please try agian',undefined)
        }else{
            data={
                temp: response.body.currentConditions.temp,
                humidity: response.body.currentConditions.humidity,
                sunrise:response.body.currentConditions.sunrise,
                sunset:response.body.currentConditions.sunset,
                windspeed:response.body.currentConditions.windspeed,
                condition: response.body.currentConditions.conditions,
                address: response.body.resolvedAddress
            }
            callback(undefined,data)
           // callback(undefined,'the humidity in '+location+' is '+response.body.currentConditions.humidity)
        }
    })
}

module.exports=forecast