let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = 0;
let rotation = 0;

const spinValue = {
    1: { minRot: 350, maxRot: 26, prize: "2 Custard Creams!" },
    10: { minRot: 26, maxRot: 62, prize: "Nothing!" },
    9: { minRot: 62, maxRot: 98, prize: "2 Chocolate Digestives!" },
    8: { minRot: 98, maxRot: 134, prize: "Hot Choc + Single Topping!" },
    7: { minRot: 134, maxRot: 170, prize: "A Hot Chocolate!" },
    6: { minRot: 170, maxRot: 206, prize: "5 Chocolate Digestives!" },
    5: { minRot: 206, maxRot: 242, prize: "2 Chocolate Digestives!" },
    4: { minRot: 242, maxRot: 278, prize: "A Chocolate Digestive!" },
    3: { minRot: 278, maxRot: 314, prize: "10 Custard Creans!" },
    2: { minRot: 314, maxRot: 350, prize: "4 Custard Creams!" }
};

function returnPrize(rot){
    for(let i = 1; i<=10; i++){
        if(i == 1 && (rot >= spinValue[i].minRot || rot < spinValue[i].maxRot)){
            return spinValue[i].prize;
        }
        else if(rot >= spinValue[i].minRot && rot < spinValue[i].maxRot){
            return spinValue[i].prize;
        }
    }
    return "CRITICAL ISSUE!"
}

function GetRand() {
    let randomSelect = Math.random()
    
    if(randomSelect>0.3){
        return Math.ceil(Math.random()*36 + spinValue[2].minRot);
    } else if(randomSelect>0.7){
        return Math.ceil(Math.random()*36 + spinValue[4].minRot);
    } else if(randomSelect>1){
        return Math.ceil(Math.random()*36 + spinValue[5].minRot);
    } else{
        return Math.ceil(Math.random()*360);
    }
}

spinBtn.onclick = function(){
    wheel.style.transform = "";
    value += GetRand(rotation)+(Math.ceil(Math.random()*10)*360);
    rotation = value%360;
    wheel.style.transform = "rotate(" + value + "deg)";
    setTimeout(() => {
        document.querySelector('#prize').innerHTML = returnPrize(rotation);
    }, 0);
}