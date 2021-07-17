

const adress =document.querySelector('input')
const weatherform=document.querySelector('form')
const msg1 =document.querySelector('#msg-1')
const msg2 =document.querySelector('#msg-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = adress.value
    fetch('/weather?adress='+location).then((response)=>{
response.json().then((data)=>{
    if(data.error){
        console.log(error)

    }
    else{
        msg1.textContent=data.forecast
        msg2.textContent=data.location
    }
})

    })
})