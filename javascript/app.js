'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let values = [];  
function Mobiles(name,type)
{
    this.name = name;
    this.type = type;
    this.price=random(100,500);
    values.push(this);
    settingItems();
}

function settingItems()
{
    let setting = JSON.stringify(values);
    localStorage.setItem("mobileInfo",setting);
}


    let table = document.getElementById("table");

    let firstRow = document.createElement("tr");
    table.appendChild(firstRow);

    let firstHead = document.createElement("th");
    table.appendChild(firstHead);
    firstHead.textContent=`Name`;

    let secondHead = document.createElement("th");
    table.appendChild(secondHead);
    secondHead.textContent = `Type`;

    let thirdHead = document.createElement("th");
    table.appendChild(thirdHead);
    thirdHead.textContent = `Price`;

    let fourthHead = document.createElement("th");
    table.appendChild(fourthHead);
    fourthHead.textContent = `Condition`;
    


Mobiles.prototype.render = function()
{
    let firstRow = document.createElement("tr");
    table.appendChild(firstRow);

    let firstHead = document.createElement("th");
    table.appendChild(firstHead);
    firstHead.textContent=`${this.name}`;

    let secondHead = document.createElement("th");
    table.appendChild(secondHead);
    secondHead.textContent = `${this.type}`;

    let thirdHead = document.createElement("th");
    table.appendChild(thirdHead);
    thirdHead.textContent = `${this.price}`;

    let fourthHead = document.createElement("th");
    table.appendChild(fourthHead);
    if(this.price<200)
    {
        fourthHead.textContent = `Used`;
    }
    else
    fourthHead.textContent = `New`;
    
}

let form = document.getElementById("form");
form.addEventListener("submit", submitter);

function submitter(event)
{
    event.preventDefault();

    let nameUser = event.target.userName.value;
    let mobileType = event.target.types.value;

    let objection = new Mobiles(nameUser,mobileType);
    objection.render();
    
}



function gettingItems()
{
    let getting = localStorage.getItem("mobileInfo");
    let parsing = JSON.parse(getting);



    if(parsing)
    {
        for(let i = 0; i < parsing.length; i++)
        {
            new Mobiles(parsing[i].name, parsing[i].type);
        }
    }
}
gettingItems();

for(let i = 0; i < values.length; i++)
{
    values[i].render();
}

function myfunc()
{
    localStorage.clear();
}