var key = '61e3cfa6cfc83cdf00f22bfda5f88f6e'


function screeninfo(dados){
    cityname(dados.name)
    citytemp(dados.main.temp)
    cityclouds(dados.weather[0].description)
    cityumid(dados.main.humidity)
    document.querySelector('.nuvensimg').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function callcity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    screeninfo(dados)
}


function setinfo(){
    let txtbox = document.querySelector('.txt_box').value
    callcity(txtbox)
}
function cityname(namec){
    let city = document.querySelector('.city')
    city.textContent = namec
}
function citytemp(temp){
    let tempo = document.querySelector('.temp')
    tempo.innerHTML = `${Math.floor(temp)}°C`
}
function cityclouds(clouds){
    let clim = document.querySelector('.clima')
    clim.textContent = clouds

}
function cityumid(umidade){
    let umid = document.querySelector('.umid')
    umid.innerHTML = `Umidade: ${umidade}%`
}
let citydef = 'Mato grosso do sul'
callcity(citydef)