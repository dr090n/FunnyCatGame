let button = document.createElement('button');
button.style =`width: auto; height: 40; font-size: 30;`;
button.innerText = "Настройки";
buttonSlider.appendChild(button);
buttons.push(button);

button.onclick = ()=>{
    MenuReset();
    Setting();
}

function Setting(){
    let bdiv = document.createElement('div');
    bdiv.style=`position: absolute; top: 0; left: 0; width: 100%; height: 40; display: flex; justify-content: center;`;
    menuContent.appendChild(bdiv);
    
    let div = document.createElement('div');
    div.style=`position: absolute; top: 40; left: 0; width: 100%; height: 40; display: flex; justify-content: center;`;
    menuContent.appendChild(div);
    
    let info = document.createElement('button');
    info.style = `width: auto; height: 40; font-size: 30;`;
    info.innerText="Изменения";
    bdiv.appendChild(info);
    //reset game
    
    //music

}
Setting();