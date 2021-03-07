'use strict';
let main=document.getElementById('test');

let Seattle= {
  minCust: 23,
  maxCust: 65,
  avgCookiesCust:6.3,
  genRandom: function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  },
  amountsOfCookiesPurchased: function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  },
  numberOfHours: 14,
  totalOfCookies:0,
  cookiePerHour: [],
  fillCookiePerHour: function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  },
  callConsumption: function(){
    this.fillCookiePerHour();
    consumptionPerHour('seattle', this.cookiePerHour, this.totalOfCookies);
  }

};
let Tokyo= {
  minCust: 3,
  maxCust: 24,
  avgCookiesCust:1.2,
  genRandom: function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  },
  amountsOfCookiesPurchased: function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  },
  numberOfHours: 14,
  totalOfCookies:0,
  cookiePerHour: [],
  fillCookiePerHour: function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  },
  callConsumption: function(){
    this.fillCookiePerHour();
    consumptionPerHour('Tokyo', this.cookiePerHour, this.totalOfCookies);
  }

};let Dubai= {
  minCust: 11,
  maxCust: 38,
  avgCookiesCust:3.7,
  genRandom: function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  },
  amountsOfCookiesPurchased: function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  },
  numberOfHours: 14,
  totalOfCookies:0,
  cookiePerHour: [],
  fillCookiePerHour: function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  },
  callConsumption: function(){
    this.fillCookiePerHour();
    consumptionPerHour('Dubai', this.cookiePerHour, this.totalOfCookies);
  }

};
let Paris= {
  minCust: 20,
  maxCust: 38,
  avgCookiesCust:2.3,
  genRandom: function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  },
  amountsOfCookiesPurchased: function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  },
  numberOfHours: 14,
  totalOfCookies:0,
  cookiePerHour: [],
  fillCookiePerHour: function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  },
  callConsumption: function(){
    this.fillCookiePerHour();
    consumptionPerHour('Paris', this.cookiePerHour, this.totalOfCookies);
  }

};
let Lima= {
  minCust: 2,
  maxCust: 16,
  avgCookiesCust:4.6,
  genRandom: function(){
    let random=Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust);
    return random;
  },
  amountsOfCookiesPurchased: function(){
    let amount=this.avgCookiesCust*this.genRandom();
    return Math.floor(amount);
  },
  numberOfHours: 14,
  totalOfCookies:0,
  cookiePerHour: [],
  fillCookiePerHour: function(){
    for(let i=0; i<this.numberOfHours; i++){
      this.cookiePerHour[i]=this.amountsOfCookiesPurchased();
      this.totalOfCookies+=this.cookiePerHour[i];
    }
  },
  callConsumption: function(){
    this.fillCookiePerHour();
    consumptionPerHour('Lima', this.cookiePerHour, this.totalOfCookies);
  }

};
function consumptionPerHour(NameOfArea, AmountOfCookiesPerHour, totalOfCookies){
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
}



Seattle.callConsumption();
Tokyo.callConsumption();
Dubai.callConsumption();
Paris.callConsumption();
Lima.callConsumption();
