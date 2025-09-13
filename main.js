    var music = window.document.querySelector('#music');
    var menu = window.document.querySelector('#menu');
    var buttonSlider = window.document.querySelector('#buttons');
    var buttons = new Array();
    var menuContent =window.document.querySelector('#menu-content');
    var canvas = window.document.querySelector('#canvas');
    var background = document.querySelector('#background');
    let scoreTile = window.document.querySelector('#score');
    var colors = ["rgb(248,169,196)","rgb(255,243,1)"];
    var score;
    var field;

    function MenuReset(){
        menuContent.innerHTML='';
    }

    function ColorText(text){
        let result='';
        for (i=0;i<text.length;i++){
            result+=`<span style="color:${colors[i%2]};">${text[i]}</span>`;
        }
        return result;
    }
    
    function Resize(){
        if(window.innerHeight>window.innerWidth) {
            field= window.innerWidth;
            menu.style.top = field;
            menu.style.left=0;
            menu.style.height=window.innerHeight-field;
            menu.style.width=field;
        }
        else {
            field= window.innerHeight;
            menu.style.left = field;
            menu.style.top=0;
            menu.style.width=window.innerWidth-field;
            menu.style.height=field;
        }
        canvas.style.height = field;
        canvas.style.width = field;
        background.height = field;
        background.width = field;
    }

    //interface update
    setInterval(
        ()=>{
            scoreTile.innerHTML=ColorText(Math.round(score*100)/100 + " Кромеров"); 
        }
        ,20
    )

    //save
    function SaveGame(){
        localStorage.setItem('score', score);
    }

    //restart
    function Restart(){
        score=0;
        localStorage.setItem('score', score); 
    }

    //load
    function LoadGame(){
        let savedScore = localStorage.getItem('score');
        if(savedScore!==null&&!isNaN(savedScore)){
            score = parseInt(savedScore);
        }
    }

    //resize
    window.addEventListener('resize',()=>{
        Resize();
    })
    
    //autosave/load
    setInterval(SaveGame,5000);
    LoadGame();
    Resize();