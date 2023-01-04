console.log('Client side javascript running')

const weatherForm=document.querySelector('form')
const Search=document.querySelector('input')

const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const messageThree=document.querySelector('#message-3')
const messageFour=document.querySelector('#message-4')
const messageFive=document.querySelector('#message-5')
const messageSix=document.querySelector('#message-6')
const messageEnd=document.querySelector('#message-e')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=Search.value

    messageOne.textContent='loading...'
    messageTwo.textContent=''
    messageThree.textContent=''
    messageFour.textContent=''
    messageFive.textContent=''
    messageSix.textContent=''
    messageEnd.textContent=''

    fetch('/weather?location='+location).then((response)=>{
    response.json().then((data=>{
        if(data.error){
             messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.address
            messageTwo.textContent=data.temp+' degree' 
            messageThree.textContent='Humidity :'+data.humidity+'%'
            messageFour.textContent='Wind Speed :'+data.windspeed+' km/hr'
            messageFive.textContent='Sunrise :'+data.sunrise
            messageSix.textContent='Sunset :'+data.sunset

            var place=data.address
            if(place.includes('Nathnagar')||place.includes('Bhagalpur')){
                messageEnd.textContent='^_^'
            }
            
        }
        console.log(data.error)
    }))
})

})
