'use strict';
let main=document.getElementById('test');
let table=document.getElementById('table');
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let form=document.getElementById('Form');

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
    this.hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
    for(let i=0; i<hours.length; i++){
      let list= document.createElement('li');
      list.innerText= this.hour[i]+':  '+AmountOfCookiesPerHour[i];
      unorderedList.appendChild(list);
    }
    let total= document.createElement('li');
    unorderedList.appendChild(total);
    total.innerText= 'total: '+totalOfCookies;
    main.appendChild(unorderedList);

  };
  this.callConsumption=function(){
    this.fillCookiePerHour();
    this.consumptionPerHour(this.cookiePerHour, this.totalOfCookies);
  };
  this.tablebody=function(){
    let trow=document.createElement('tr');
    let tdata=document.createElement('td');
    tdata.innerText=NameOfArea;
    trow.appendChild(tdata);
    for(let i=0; i<hours.length; i++){
      tdata=document.createElement('td');
      tdata.innerText=this.cookiePerHour[i];
      trow.appendChild(tdata);
    }
    tdata=document.createElement('td');
    tdata.innerText=this.totalOfCookies;
    trow.appendChild(tdata);
    table.appendChild(trow);
  };
}
form.addEventListener('submit', testing);
function testing(event){
  event.preventDefault();
  let NameOfArea= event.target.cityName.value;
  let minCust=event.target.min.value;
  let maxCust=event.target.max.value;
  let avgCookiesCust=event.target.avg.value;
  let newCity= new CalculateConsumptionForArea(NameOfArea, minCust, maxCust,avgCookiesCust);
  newCity.tablebody();
};

let seattle= new CalculateConsumptionForArea('seattle',23,65,6.3);
let Tokyo= new CalculateConsumptionForArea('Tokyo',3, 24, 1.2);
let Dubai= new CalculateConsumptionForArea('Dubai',11,38,3.7);
let Paris= new CalculateConsumptionForArea('Paris',20,38,2.3);
let Lima= new CalculateConsumptionForArea('Lima',2,16,4.6);
let aqaba=new CalculateConsumptionForArea('aqaba',20,25,3.3);
let doha= new CalculateConsumptionForArea('Doha', 17,20,1.5);

let totalCookiesOfEachCity=[];
let city=[seattle, Tokyo, Dubai, Paris,Lima,aqaba, doha];
let totalForEachHourOfAllCities=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalCookiesOfAllCities=0;
for(let i=0;i<city.length; i++){
  city[i].fillCookiePerHour();
  totalCookiesOfEachCity[i]=city[i].totalOfCookies;
  totalCookiesOfAllCities+=city[i].totalOfCookies;
  for (let j=0; j<14; j++){
    totalForEachHourOfAllCities[j]+= city[i].cookiePerHour[j];
  }
}


function tableHeaderMaker(){
  let trow=document.createElement('tr');
  let tdata=document.createElement('td');
  tdata.innerText= 'Cities/Hours';
  trow.appendChild(tdata);
  for(let i=0; i<hours.length; i++){
    let tdata=document.createElement('td');
    tdata.innerHTML=hours[i];
    trow.appendChild(tdata);
  }
  let tdata2=document.createElement('td');
  tdata2.innerHTML=('Daily Location Total');
  trow.appendChild(tdata2);
  table.appendChild(trow);
}
function tableFooterMaker(){
  let trow=document.createElement('tr');
  let tdata=document.createElement('td');
  tdata.innerText='totals';
  trow.appendChild(tdata);
  for(let i=0; i<hours.length; i++){
    tdata=document.createElement('td');
    tdata.innerText=totalForEachHourOfAllCities[i];
    trow.appendChild(tdata);
  }
  tdata=document.createElement('td');
  tdata.innerText=totalCookiesOfAllCities;
  trow.appendChild(tdata);
  table.appendChild(trow);
}
function makeTable(){
  tableHeaderMaker();
  for (let i=0; i<city.length; i++){
    city[i].tablebody();
  }
  tableFooterMaker();
}
makeTable();




