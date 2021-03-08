'use strict';
let main=document.getElementById('test');

function CalculateConsumptionForArea(NameOfArea,minCust, maxCust, avgCookiesCust){
  this.NameOfArea=NameOfArea;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesCust=avgCookiesCust;
  this.numberOfHours=14;
  this.totalOfCookies=0;
  this.cookiePerHour=[];
  this.genRandom= function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  };
  this.amountsOfCookiesPurchased= function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  };
  this.fillCookiePerHour= function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  };
  this.consumptionPerHour=function(AmountOfCookiesPerHour, totalOfCookies){
    let unorderedList= document.createElement('ul');
    unorderedList.innerHTML= NameOfArea;
    let firstHour= document.createElement('li');
    let secondHour= document.createElement('li');
    let thirdHour= document.createElement('li');
    let forthHour= document.createElement('li');
    let fifthHour= document.createElement('li');
    let sixthHour= document.createElement('li');
    let seventhHour= document.createElement('li');
    let eighthHour= document.createElement('li');
    let ninthHour= document.createElement('li');
    let tenthHour= document.createElement('li');
    let eleventhHour= document.createElement('li');
    let twelvthtHour= document.createElement('li');
    let thirteenthHour= document.createElement('li');
    let forteenthHour= document.createElement('li');
    let total= document.createElement('li');
    unorderedList.appendChild(firstHour);
    unorderedList.appendChild(secondHour);
    unorderedList.appendChild(thirdHour);
    unorderedList.appendChild(forthHour);
    unorderedList.appendChild(fifthHour);
    unorderedList.appendChild(sixthHour);
    unorderedList.appendChild(seventhHour);
    unorderedList.appendChild(eighthHour);
    unorderedList.appendChild(ninthHour);
    unorderedList.appendChild(tenthHour);
    unorderedList.appendChild(eleventhHour);
    unorderedList.appendChild(twelvthtHour);
    unorderedList.appendChild(thirteenthHour);
    unorderedList.appendChild(forteenthHour);
    unorderedList.appendChild(total);
    firstHour.innerText= '6am: '+AmountOfCookiesPerHour[0];
    secondHour.innerText= '7am: '+AmountOfCookiesPerHour[1];
    thirdHour.innerText= '8am: '+AmountOfCookiesPerHour[2];
    forthHour.innerText= '9am: '+AmountOfCookiesPerHour[3];
    fifthHour.innerText= '10am: '+AmountOfCookiesPerHour[4];
    sixthHour.innerText= '11am: '+AmountOfCookiesPerHour[5];
    seventhHour.innerText= '12am: '+AmountOfCookiesPerHour[6];
    eighthHour.innerText= '1pm: '+AmountOfCookiesPerHour[7];
    ninthHour.innerText= '2pm: '+AmountOfCookiesPerHour[8];
    tenthHour.innerText= '3pm: '+AmountOfCookiesPerHour[9];
    eleventhHour.innerText= '4pm: '+AmountOfCookiesPerHour[10];
    twelvthtHour.innerText= '5pm: '+AmountOfCookiesPerHour[11];
    thirteenthHour.innerText= '6pm: '+AmountOfCookiesPerHour[12];
    forteenthHour.innerText= '7pm: '+AmountOfCookiesPerHour[13];
    total.innerText= 'total: '+totalOfCookies;
    main.appendChild(unorderedList);
  };
  this.callConsumption=function(){
    this.fillCookiePerHour();
    this.consumptionPerHour(this.cookiePerHour, this.totalOfCookies);
  };
}

let seattle= new CalculateConsumptionForArea('seattle',23,65,6.3);
let Tokyo= new CalculateConsumptionForArea('Tokyo',3, 24, 1.2);
let Dubai= new CalculateConsumptionForArea('Dubai',11,38,3.7);
let Paris= new CalculateConsumptionForArea('Paris',20,38,2.3);
let Lima= new CalculateConsumptionForArea('Lima',2,16,4.6);
let totalCookiesOfEachCity=[];
let city=[seattle, Tokyo, Dubai, Paris,Lima];
let totalForEachHourOfAllCities=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalCookiesOfAllCities=0;
for(let i=0;i<5; i++){
  city[i].callConsumption();
  totalCookiesOfEachCity[i]=city[i].totalOfCookies;
  totalCookiesOfAllCities+=city[i].totalOfCookies;
  for (let j=0; j<14; j++){
    totalForEachHourOfAllCities[j]+= city[i].cookiePerHour[j];
  }
}
console.log(totalCookiesOfAllCities);
for(let i=0; i<14; i++){
  console.log(totalForEachHourOfAllCities[i]);

}

