
function changeColor(){
    let reqColor = document.querySelector('input[type=radio][name=color]:checked').value;
    document.getElementById("text").style.color = reqColor;
    

}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
}

function changeBgColor(){

}

function changeBg(){
    if(colorsel[colorsel.selectedIndex].text=='Red')
    {
    document.getElementById("td_text").style.backgroundColor='red';
    }
    if(colorsel[colorsel.selectedIndex].text=='Blue')
    {
    document.getElementById("td_text").style.backgroundColor='blue';
    }
    if(colorsel[colorsel.selectedIndex].text=='Green')
    {
    document.getElementById("td_text").style.backgroundColor='green';
    }

    if(colorsel[colorsel.selectedIndex].value=='nothing')
    {
    document.getElementById("td_text").style.backgroundColor='white';
    }

    }
