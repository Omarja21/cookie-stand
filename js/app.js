'use strict';
let main=document.getElementById('test');

// let Seattle= {
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesCust:6.3,
//   genRandom: function(){
//     let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
//     return random;
//   },
//   amountsOfCookiesPurchased: function(){
//     let amount=this.avgCookiesCust*this.genRandom();
//     return Math.floor(amount);
//   },
//   numberOfHours: 14,
//   totalOfCookies:0,
//   cookiePerHour: [],
//   fillCookiePerHour: function(){
//     for(let i=0; i<this.numberOfHours; i++){
//       this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
//       this.totalOfCookies+=this.cookiePerHour[i];
//     }
//   },
//   callConsumption: function(){
//     this.fillCookiePerHour();
//     consumptionPerHour('seattle', this.cookiePerHour, this.totalOfCookies);
//   }

// };
function CalculateConsumptionForArea(minCust, maxCust, avgCookiesCust, numberOfHours, totalOfCookies, cookiePerHour){
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesCust=avgCookiesCust;
  this.numberOfHours=numberOfHours;
  this.totalOfCookies=totalOfCookies;
  this.cookiePerHour=cookiePerHour;
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
}

let main=document.getElementById('test');

// let Seattle= {
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesCust:6.3,
//   genRandom: function(){
//     let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
//     return random;
//   },
//   amountsOfCookiesPurchased: function(){
//     let amount=this.avgCookiesCust*this.genRandom();
//     return Math.floor(amount);
//   },
//   numberOfHours: 14,
//   totalOfCookies:0,
//   cookiePerHour: [],
//   fillCookiePerHour: function(){
//     for(let i=0; i<this.numberOfHours; i++){
//       this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
//       this.totalOfCookies+=this.cookiePerHour[i];
//     }
//   },
//   callConsumption: function(){
//     this.fillCookiePerHour();
//     consumptionPerHour('seattle', this.cookiePerHour, this.totalOfCookies);
//   }

// };
function CalculateConsumptionForArea(minCust, maxCust, avgCookiesCust, numberOfHours, totalOfCookies, cookiePerHour){
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookiesCust=avgCookiesCust;
  this.numberOfHours=numberOfHours;
  this.totalOfCookies=totalOfCookies;
  this.cookiePerHour=cookiePerHour;
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
}

