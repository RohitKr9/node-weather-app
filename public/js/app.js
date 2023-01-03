console.log('Client side javascript running')

const weatherForm=document.querySelector('form')
const Search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const messageThree=document.querySelector('#message-3')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=Search.value

    messageOne.textContent='loading...'
    messageTwo.textContent=''
    messageThree.textContent=''

    fetch('/weather?location='+location).then((response)=>{
    response.json().then((data=>{
        if(data.error){
             messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.address
            messageTwo.textContent=data.temp+' degree'
            var place=data.address
            if(place.includes('Nathnagar')||place.includes('Bhagalpur')){
                messageThree.textContent='Amarpur bhi search kar lezeye bajoria ji😁:))'
            }
            
        }
        console.log(data.error)
    }))
})

})
