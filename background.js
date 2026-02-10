const ctx = background.getContext('2d',{alpha:true});
var title = window.document.querySelector('#title');
let sqnum = 20;
let sqspd = 100;
let colorArray = ["rgb(248,169,196,0.3)","rgb(0,0,0)","rgb(255,243,1,0.3)","rgb(0,0,0)"];

var playlist = [
    "music/AIRWAVES.ogg",
    "music/Catswing-_-Deltarune-Remix-_-Dunkin-Dayn.ogg",
    "music/DELTARUNE-CAT-WAVES.ogg",
    "music/Deltarune-Chapter-4-_-AIR-WAVES-_Stew-Mix_.ogg",
    "music/Deltarune-Remix_-Stormheart-Air-Waves-_Mike-Secret-Boss_Chapter-4_.ogg",
    "music/AIRWAVES-_toast-mix_.ogg"
];

var music = new Audio();


background.onclick=()=>{
    if(music.ended || music.paused)
    {
        music.src = playlist[Math.floor(Math.random()*playlist.length)];
        music.play();
    }
}

function Draw(n){
    let rside=field/sqnum;
    ctx.clearRect(0,0,background.width,background.height);
    for(i=0;i<sqnum*2;i++){
        ctx.fillStyle = colorArray[Math.floor(i+n/sqspd)%colorArray.length];
        for(j=0;j<=i;j++){
            if(i-j>=0&&i-j<=sqnum) ctx.fillRect((i-j)*rside,j*rside,rside,rside);
        }
    }
    if(!music.ended)requestAnimationFrame(()=>Draw((n+1)%(sqspd*colorArray.length)));
    else{
        ctx.clearRect(0,0,background.width,background.height);
        title.textContent="Silence";
    }
}

music.onplay = () =>{
    Draw(0);
    title.textContent="Dance!";
}