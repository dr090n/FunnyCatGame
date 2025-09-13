const ctx = background.getContext('2d',{alpha:true});
let sqnum = 20;
let sqspd = 500;
let colorArray = ["rgb(248,169,196,0.3)","rgb(0,0,0)","rgb(255,243,1,0.3)","rgb(0,0,0)"];
background.onclick=()=>music.play();

function Draw(n){
    let rside=field/sqnum;
    ctx.clearRect(0,0,background.width,background.height);
    for(i=0;i<sqnum*2;i++){
        ctx.fillStyle = colorArray[Math.floor(i+n/sqspd)%colorArray.length];
        for(j=0;j<=i;j++){
            if(i-j>=0&&i-j<=sqnum) ctx.fillRect((i-j)*rside,j*rside,rside,rside);
        }
    }
    requestAnimationFrame(()=>Draw((n+1)%(sqspd*colorArray.length)));
}

music.onplay = () =>{
    Draw(0);
}